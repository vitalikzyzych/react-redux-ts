import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'core/app/rootStore';

const customerState = (state: RootState) => state.customer;

export const customerSelector = createSelector(customerState, (state) => state);
