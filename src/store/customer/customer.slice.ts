import { createSlice } from '@reduxjs/toolkit';
import { customerList } from './customer.actions';
import { InitialState, Customer } from './customer.types';

const initialState: InitialState = {
  list: [] as Array<Customer>,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    clearList: (state) => {
      state.list = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(customerList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(customerList.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.list = payload;
    });
    builder.addCase(customerList.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { clearList } = userSlice.actions;

export default userSlice.reducer;
