import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components';
import { rootStore } from 'core/app/rootStore';
import { initKeycloak } from 'source/AuthSource';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const renderApp = () =>
  root.render(
    <Provider store={rootStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );

initKeycloak(renderApp);
