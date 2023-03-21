import { createSlice } from '@reduxjs/toolkit';
import { senderIdsList } from './senderId.actions';
import { InitialState } from './types';

// import { getPayloadIds } from 'store/helpers';

const initialState: InitialState = {
  ids: [],
  isLoading: false,
};

const userSlice = createSlice({
  name: 'senderId',
  initialState,
  reducers: {
    clearList: (state) => {
      state.ids = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(senderIdsList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(senderIdsList.fulfilled, (state) => {
      state.isLoading = true;
    });
    builder.addCase(senderIdsList.rejected, (state) => {
      state.isLoading = true;
    });
  },
});

export const { clearList } = userSlice.actions;

export default userSlice.reducer;
