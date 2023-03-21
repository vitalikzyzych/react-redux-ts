import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { useLocation } from 'react-router-dom';

import AppTopbar from './AppTopbar';
import AppFooter from './AppFooter';
import AppMenu from './AppMenu';

import PrimeReact from 'primereact/api';
import { Tooltip } from 'primereact/tooltip';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'assets/sass/main.scss';
// import './App.scss';
import AppRoutes from 'core/routes';
import { menu } from 'const/menu';

import { setupFontAwesomeIcons } from 'core/fontAwesome';
import RenderOnAuthenticated from './RenderOnAuthenticated';
import { isLoggedIn } from 'source/AuthSource';

setupFontAwesomeIcons();

const App = (props: any) => {
  const [configActive, setConfigActive] = useState(false);
  const [overlayMenuActive, setOverlayMenuActive] = useState(false);
  const [sidebarStatic, setSidebarStatic] = useState(false);
  const [menuMode] = useState('sidebar');
  const [staticMenuDesktopInactive, setStaticMenuDesktopInactive] = useState(false);
  const [staticMenuMobileActive, setStaticMenuMobileActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [topbarMenuActive, setTopbarMenuActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [pinActive, setPinActive] = useState(false);
  const [activeInlineProfile, setActiveInlineProfile] = useState(false);
  const [resetActiveIndex, setResetActiveIndex] = useState<boolean>(false);
  const copyTooltipRef = useRef<any>();
  const location = useLocation();

  PrimeReact.ripple = true;

  let menuClick: any;
  let topbarItemClick: any;

  useEffect(() => {
    copyTooltipRef && copyTooltipRef.current && copyTooltipRef.current.updateTargetEvents();
  }, [location]);

  const onDocumentClick = () => {
    if (!topbarItemClick) {
      setTopbarMenuActive(false);
    }

    if (!menuClick) {
      if (isHorizontal() || isSlim()) {
        setMenuActive(false);
        setResetActiveIndex(true);
      }

      if (overlayMenuActive || staticMenuMobileActive) {
        setOverlayMenuActive(false);
        setStaticMenuMobileActive(false);
      }

      hideOverlayMenu();
      unblockBodyScroll();
    }

    if (configActive) {
      setConfigActive(false);
    }

    topbarItemClick = false;
    menuClick = false;
  };

  const onMenuButtonClick = (event: any) => {
    menuClick = true;

    if (isOverlay()) {
      setOverlayMenuActive((prevState) => !prevState);
    }

    if (isDesktop()) {
      setStaticMenuDesktopInactive((prevState) => !prevState);
    } else {
      setStaticMenuMobileActive((prevState) => !prevState);
    }

    event.preventDefault();
  };

  const hideOverlayMenu = () => {
    setOverlayMenuActive(false);
    setStaticMenuMobileActive(false);
  };

  const onTopbarItemClick = (event: any) => {
    topbarItemClick = true;
    setTopbarMenuActive((prevState) => !prevState);
    hideOverlayMenu();
    event.preventDefault();
  };

  const onToggleMenu = (event: any) => {
    menuClick = true;

    if (overlayMenuActive) {
      setOverlayMenuActive(false);
    }

    if (sidebarActive) {
      setSidebarStatic((prevState) => !prevState);
    }

    event.preventDefault();
  };

  const onSidebarMouseOver = () => {
    if (menuMode === 'sidebar' && !sidebarStatic) {
      setSidebarActive(isDesktop());
      setTimeout(() => {
        setPinActive(isDesktop());
      }, 200);
    }
  };

  const onSidebarMouseLeave = () => {
    if (menuMode === 'sidebar' && !sidebarStatic) {
      setTimeout(() => {
        setSidebarActive(false);
        setPinActive(false);
      }, 250);
    }
  };

  const onMenuClick = () => {
    menuClick = true;
  };

  const onChangeActiveInlineMenu = (event: any) => {
    setActiveInlineProfile((prevState) => !prevState);
    event.preventDefault();
  };

  const onRootMenuItemClick = () => {
    setMenuActive((prevState) => !prevState);
  };

  const onMenuItemClick = (event: any) => {
    if (!event.item.items) {
      hideOverlayMenu();
      setResetActiveIndex(true);
    }

    if (!event.item.items && (isHorizontal() || isSlim())) {
      setMenuActive(false);
    }
  };

  const isHorizontal = () => {
    return menuMode === 'horizontal';
  };

  const isSlim = () => {
    return menuMode === 'slim';
  };

  const isOverlay = () => {
    return menuMode === 'overlay';
  };

  const isDesktop = () => {
    return window.innerWidth > 991;
  };

  const unblockBodyScroll = () => {
    if (document.body.classList) {
      document.body.classList.remove('blocked-scroll');
    } else {
      document.body.className = document.body.className.replace(
        new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'),
        ' ',
      );
    }
  };

  const layoutClassName = classNames('layout-wrapper', {
    'layout-static': menuMode === 'static',
    'layout-overlay': menuMode === 'overlay',
    'layout-overlay-active': overlayMenuActive,
    'layout-slim': menuMode === 'slim',
    'layout-horizontal': menuMode === 'horizontal',
    'layout-active': menuActive,
    'layout-mobile-active': staticMenuMobileActive,
    'layout-sidebar': menuMode === 'sidebar',
    'layout-sidebar-static': menuMode === 'sidebar' && sidebarStatic,
    'layout-static-inactive': staticMenuDesktopInactive && menuMode === 'static',
    'p-ripple-disabled': !true,
  });

  return (
    <div className={layoutClassName} onClick={onDocumentClick}>
      <Tooltip
        ref={copyTooltipRef}
        target=".block-action-copy"
        position="bottom"
        content="Copied to clipboard"
        event="focus"
      />
      <div className="layout-main">
        {isLoggedIn() && (
          <>
            <AppTopbar
              items={menu}
              menuMode={menuMode}
              colorScheme={props.colorScheme}
              menuActive={menuActive}
              topbarMenuActive={topbarMenuActive}
              activeInlineProfile={activeInlineProfile}
              onTopbarItemClick={onTopbarItemClick}
              onMenuButtonClick={onMenuButtonClick}
              onSidebarMouseOver={onSidebarMouseOver}
              onSidebarMouseLeave={onSidebarMouseLeave}
              onToggleMenu={onToggleMenu}
              onChangeActiveInlineMenu={onChangeActiveInlineMenu}
              onMenuClick={onMenuClick}
              onMenuItemClick={onMenuItemClick}
              onRootMenuItemClick={onRootMenuItemClick}
              resetActiveIndex={resetActiveIndex}
            />

            <AppMenu
              model={menu}
              onRootMenuItemClick={onRootMenuItemClick}
              onMenuItemClick={onMenuItemClick}
              onToggleMenu={onToggleMenu}
              onMenuClick={onMenuClick}
              menuMode={menuMode}
              colorScheme={props.colorScheme}
              menuActive={menuActive}
              sidebarActive={sidebarActive}
              sidebarStatic={sidebarStatic}
              pinActive={pinActive}
              onSidebarMouseLeave={onSidebarMouseLeave}
              onSidebarMouseOver={onSidebarMouseOver}
              activeInlineProfile={activeInlineProfile}
              onChangeActiveInlineMenu={onChangeActiveInlineMenu}
              resetActiveIndex={resetActiveIndex}
            />
          </>
        )}
        <RenderOnAuthenticated>
          <div className="layout-main-content">
            <AppRoutes />
          </div>
        </RenderOnAuthenticated>
        {isLoggedIn() && <AppFooter />}
      </div>
    </div>
  );
};

export default App;
