import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from 'core';

export const userList = createAsyncThunk('user/list', async () => {
  try {
    const response = await apiClient.get('/users');
    return response.data;
  } catch (error) {
    console.error(error);
  }
});
