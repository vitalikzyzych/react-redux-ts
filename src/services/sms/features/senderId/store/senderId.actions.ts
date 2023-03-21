import { createAsyncThunk } from '@reduxjs/toolkit';

import { listSenderIds } from '../source/senderId.source';

export const senderIdsList = createAsyncThunk('senderIds/list', async () => {
  try {
    const response = await listSenderIds();
    if (response.statusCode >= 200 && response.statusCode < 300) {
      return response.data.senderIds;
    }
  } catch (error) {
    return [];
  }
});
