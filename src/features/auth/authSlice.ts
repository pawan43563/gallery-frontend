import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  value: boolean;
  token: string;
}

const initialState: CounterState = {
  value: false,
  token: "",
};


export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.value = true;
      state.token = action.payload
    },
    loggedOut: (state) => {
      state.value = false;
      state.token = ""
    },
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;

export default authSlice.reducer;
