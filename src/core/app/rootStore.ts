import { compose } from 'redux';

import reducer from 'store';
import { configureStore } from '@reduxjs/toolkit';

export const rootStore = configureStore({
  reducer: reducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
