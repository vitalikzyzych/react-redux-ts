import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'core/app/rootStore';

const senderIdState = (state: RootState) => state.senderId;

export const senderIdSelector = createSelector(senderIdState, (state) => state);
