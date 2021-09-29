import { createSlice } from '@reduxjs/toolkit';
// import { RootState} from '../../app/store';
// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';



export interface CounterState {
  value: boolean;
  token: string
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
    }
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

// export const selectCount = (state: RootState) => state.auth.islogin;


export default authSlice.reducer;
