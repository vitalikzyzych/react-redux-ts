import React from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from 'primereact/utils';
import AppMenu from './AppMenu';
import { useSelector } from 'react-redux';
import { settingsSelector } from 'store/settings';
import ServiceSelector from './ServiceSelector';
import { getDecodedItem, doLogout } from 'source/AuthSource';

const AppTopbar = (props: any) => {
  const onTopbarSubItemClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleLogout = async () => {
    await doLogout();
  };

  // const dispatch = useDispatch<AppDispatch>();

  const { services, currentService } = useSelector(settingsSelector);

  const navigate = useNavigate();

  return (
    <>
      <div className="layout-topbar flex lg:justify-content-end">
        <div className="layout-topbar-left">
          <button className="topbar-menu-button p-link" onClick={props.onMenuButtonClick}>
            <i className="pi pi-bars"></i>
          </button>

          <button className="logo p-link" onClick={() => navigate('/')}>
            <img
              src={`assets/layout/images/logo-${
                props.colorScheme === 'light' ? 'dark' : 'light'
              }.png`}
              alt="logo"
            />
          </button>

          <button className="p-link" onClick={() => navigate('/')}>
            <img
              src={`assets/layout/images/appname-${
                props.colorScheme === 'light' ? 'dark' : 'light'
              }.png`}
              className="app-name"
              alt="app-name"
            />
          </button>
        </div>

        <AppMenu
          model={props.items}
          menuMode={props.menuMode}
          colorScheme={props.colorScheme}
          menuActive={props.menuActive}
          activeInlineProfile={props.activeInlineProfile}
          onSidebarMouseOver={props.onSidebarMouseOver}
          onSidebarMouseLeave={props.onSidebarMouseLeave}
          toggleMenu={props.onToggleMenu}
          onChangeActiveInlineMenu={props.onChangeActiveInlineMenu}
          onMenuClick={props.onMenuClick}
          onRootMenuItemClick={props.onRootMenuItemClick}
          onMenuItemClick={props.onMenuItemClick}
        />

        <div className="layout-topbar-right flex align-item-center">
          <ServiceSelector services={services} currentService={currentService} />
          <ul className="layout-topbar-right-items p-0">
            <li
              id="profile"
              className={classNames('profile-item lg:hidden', {
                'active-topmenuitem': props.topbarMenuActive,
              })}
            >
              <button className="p-link" onClick={props.onTopbarItemClick}>
                <img src="assets/layout/images/avatar.png" alt="profile" />
              </button>

              <ul className="fadeInDown">
                <li role="menuitem">
                  <button className="p-link" onClick={onTopbarSubItemClick}>
                    <i className="pi pi-fw pi-user"></i>
                    <span>{getDecodedItem('preferred_username')}</span>
                  </button>
                </li>
                <li role="menuitem">
                  <button className="p-link" onClick={onTopbarSubItemClick}>
                    <i className="pi pi-fw pi-cog"></i>
                    <span>Settings</span>
                  </button>
                </li>
                <li role="menuitem">
                  <button className="p-link" onClick={handleLogout}>
                    <i className="pi pi-fw pi-sign-out"></i>
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </li>
            <li className="hidden">
              <button className="p-link">
                <i className="topbar-icon pi pi-fw pi-bell"></i>
                <span className="topbar-badge">2</span>
                <span className="topbar-item-name">Notifications</span>
              </button>
            </li>
            <li className="hidden">
              <button className="p-link">
                <i className="topbar-icon pi pi-fw pi-comment"></i>
                <span className="topbar-badge">5</span>
                <span className="topbar-item-name">Messages</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AppTopbar;
