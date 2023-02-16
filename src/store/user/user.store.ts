import { createSlice } from '@reduxjs/toolkit';
import { userList } from './user.actions';
import { InitialStoreState, User } from './types';

import { getFormattedPayload } from 'store/_helpers';

const initialState: InitialStoreState<User> = {
  data: {},
};

const exampleSlice = createSlice({
  name: 'userStore',
  initialState,
  reducers: {
    clear: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userList.fulfilled, (state, { payload }) => {
      state.data = { ...state.data, ...getFormattedPayload<User>(payload) };
    });
  },
});

export const { clear } = exampleSlice.actions;

export default exampleSlice.reducer;
