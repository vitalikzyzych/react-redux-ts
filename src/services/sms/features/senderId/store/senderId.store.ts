import { createSlice } from '@reduxjs/toolkit';
import { senderIdsList } from './senderId.actions';
import { InitialStoreState, SenderId } from './types';

const initialState: InitialStoreState<SenderId> = {
  data: {},
};

const exampleSlice = createSlice({
  name: 'senderIdStore',
  initialState,
  reducers: {
    clear: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(senderIdsList.fulfilled, (state, { payload }) => {
      state.data = { ...state.data, ...payload };
    });
  },
});

export const { clear } = exampleSlice.actions;

export default exampleSlice.reducer;
