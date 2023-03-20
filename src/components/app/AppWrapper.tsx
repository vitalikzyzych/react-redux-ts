import React, { useEffect, useState } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

import { Provider } from 'react-redux';
import { rootStore } from 'core/app/rootStore';
import App from './App';

const AppWrapper = () => {
  const [colorScheme, setColorScheme] = useState('dark');

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const onColorSchemeChange = (scheme: string) => {
    changeStyleSheetUrl('layout-css', 'layout-' + scheme + '.css', 1);
    changeStyleSheetUrl('theme-css', 'theme-' + scheme + '.css', 1);
    setColorScheme(scheme);
  };

  const changeStyleSheetUrl = (id: any, value: any, from: any) => {
    const element = document.getElementById(id) as HTMLInputElement;
    const urlTokens = (element.getAttribute('href') as string).split('/');

    if (from === 1) {
      // which function invoked this function - change scheme
      urlTokens[urlTokens.length - 1] = value;
    } else if (from === 2) {
      // which function invoked this function - change color
      urlTokens[urlTokens.length - 2] = value;
    }

    const newURL = urlTokens.join('/');

    replaceLink(element, newURL);
  };

  const replaceLink = (linkElement: any, href: string, callback?: any) => {
    const id = linkElement.getAttribute('id');
    const cloneLinkElement = linkElement.cloneNode(true);

    cloneLinkElement.setAttribute('href', href);
    cloneLinkElement.setAttribute('id', id + '-clone');

    linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

    cloneLinkElement.addEventListener('load', () => {
      linkElement.remove();
      const _linkElement = document.getElementById(id);
      _linkElement && _linkElement.remove();
      cloneLinkElement.setAttribute('id', id);

      if (callback) {
        callback();
      }
    });
  };

  return (
    <Provider store={rootStore}>
      <BrowserRouter>
        <App colorScheme={colorScheme} onColorSchemeChange={onColorSchemeChange} />
      </BrowserRouter>
    </Provider>
  );
};

export default AppWrapper;
