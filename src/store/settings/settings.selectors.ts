import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'core/app/rootStore';

const userState = (state: RootState) => state.settings;

export const settingsSelector = createSelector(userState, (state) => state);
