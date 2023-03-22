import { createAsyncThunk } from '@reduxjs/toolkit';

import { listRouting } from '../source/routing.source';
import { Routing } from './routing.types';

export const routingList = createAsyncThunk('routing/list', async () => {
  try {
    console.log('test');
    const localRouting = JSON.parse(localStorage.getItem('routing') as string) as Array<Routing>;
    if (localRouting?.length) {
      return localRouting;
    } else {
      const response = await listRouting();
      if (response.statusCode >= 200 && response.statusCode < 300) {
        localStorage.setItem('routing', JSON.stringify(response.data));
        return response.data;
      } else {
        return [];
      }
    }
  } catch (error) {
    return [];
  }
});
