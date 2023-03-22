import { createSlice } from '@reduxjs/toolkit';
import { routingList } from './routing.actions';
import { InitialState } from './routing.types';

// import { getPayloadIds } from 'store/helpers';

const initialState: InitialState = {
  list: [],
  isLoading: false,
};

const userSlice = createSlice({
  name: 'routing',
  initialState,
  reducers: {
    clearList: (state) => {
      state.list = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(routingList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(routingList.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.list = payload;
    });
    builder.addCase(routingList.rejected, (state) => {
      state.isLoading = true;
    });
  },
});

export const { clearList } = userSlice.actions;

export default userSlice.reducer;
