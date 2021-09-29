import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    islogin: loginReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
