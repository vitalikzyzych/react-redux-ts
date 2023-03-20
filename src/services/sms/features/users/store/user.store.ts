import { createSlice } from '@reduxjs/toolkit';
import { userList } from './user.actions';
import { InitialStoreState, User } from './types';

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
      state.data = { ...state.data, ...payload };
    });
  },
});

export const { clear } = exampleSlice.actions;

export default exampleSlice.reducer;
