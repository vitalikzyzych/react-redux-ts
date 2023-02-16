import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'core/app/rootStore';

const userState = (state: RootState) => state.user;
const userStore = (state: RootState) => state.userStore;

export const userIdsSelector = createSelector(userState, (state) => state.ids);
export const userIsLoadingSelector = createSelector(userState, (state) => state.isLoading);
export const usersSelector = createSelector(userStore, (state) => state.data);

export const userSelector = createSelector(userState, (state) => state);
export const userDataSelector = createSelector(userStore, (state) => state);
