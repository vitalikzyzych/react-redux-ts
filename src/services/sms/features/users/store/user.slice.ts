import { createSlice } from '@reduxjs/toolkit';
import { userList } from './user.actions';
import { InitialState } from './types';

import { getPayloadIds } from 'store/helpers';

const initialState: InitialState = {
  ids: [],
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearList: (state) => {
      state.ids = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userList.fulfilled, (state, action) => {
      state.isLoading = true;
      state.ids = getPayloadIds(action.payload);
    });
    builder.addCase(userList.rejected, (state) => {
      state.isLoading = true;
    });
  },
});

export const { clearList } = userSlice.actions;

export default userSlice.reducer;
