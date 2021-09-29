import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';


export interface CounterState {
  value: boolean;

}

const initialState: CounterState = {
  value: false,

};


export const  authSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    islogin: (state) => {
      
    },
  },

});

export const { islogin } = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

// export const selectCount = (state: RootState) => state.auth.islogin;


export default authSlice.reducer;
