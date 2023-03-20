import { createSlice } from '@reduxjs/toolkit';
// import { userList } from './user.actions';
import { InitialState } from './types';

const initialState: InitialState = {
  currentService: localStorage.getItem('currentService') || 'sms',
  services: (JSON.parse(localStorage.getItem('services') as string) as {
    [key: string]: boolean;
  }) || {
    survey: true,
    sms: true,
    pay: true,
  },
};

const userSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateCurrentService(state, { payload: { currentService, reload = false } }) {
      state.currentService = currentService;
      localStorage.setItem('currentService', currentService);

      if (reload) {
        setTimeout(() => {
          window.location.replace('/' + currentService);
        }, 100);
      }
    },
    updateServices(state, { payload }) {
      state.services = payload;
      localStorage.setItem('services', JSON.stringify(payload));
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(userList.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(userList.fulfilled, (state, action) => {
    //   state.isLoading = true;
    //   state.ids = getPayloadIds(action.payload);
    // });
    // builder.addCase(userList.rejected, (state) => {
    //   state.isLoading = true;
    // });
  },
});

export const { updateCurrentService, updateServices } = userSlice.actions;

export default userSlice.reducer;
