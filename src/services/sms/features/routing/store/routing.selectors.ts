import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'core/app/rootStore';

const routingState = (state: RootState) => state.routing;

export const routingSelector = createSelector(routingState, (state) => state);
