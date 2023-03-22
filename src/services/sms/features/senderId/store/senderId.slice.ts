import { createSlice } from '@reduxjs/toolkit';
import { senderIdsList } from './senderId.actions';
import { InitialState, SenderId } from './senderId.types';

// import { getPayloadIds } from 'store/helpers';

const initialState: InitialState = {
  list: [] as Array<SenderId>,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'senderId',
  initialState,
  reducers: {
    clearList: (state) => {
      state.list = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(senderIdsList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(senderIdsList.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.list = payload;
    });
    builder.addCase(senderIdsList.rejected, (state) => {
      state.isLoading = true;
    });
  },
});

export const { clearList } = userSlice.actions;

export default userSlice.reducer;
