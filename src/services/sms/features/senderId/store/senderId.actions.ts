import { createAsyncThunk } from '@reduxjs/toolkit';

import { listSenderIds } from '../source/senderId.source';
import { SenderId } from './senderId.types';

export const senderIdsList = createAsyncThunk('senderIds/list', async () => {
  try {
    const localSenderIds = JSON.parse(
      localStorage.getItem('senderIds') as string,
    ) as Array<SenderId>;
    // console.log(localSenderIds);
    if (localSenderIds?.length) {
      return localSenderIds;
    } else {
      const response = await listSenderIds();
      if (response.statusCode >= 200 && response.statusCode < 300) {
        localStorage.setItem('senderIds', JSON.stringify(response.data.senderIds));
        return response.data.senderIds;
      } else {
        return [];
      }
    }
  } catch (error) {
    return [];
  }
});
