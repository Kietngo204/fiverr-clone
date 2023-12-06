import { createSlice } from "@reduxjs/toolkit";

interface formSignState {
  isSignin: boolean;
  isSignUp: boolean;
}

const initialState: formSignState = {
  isSignin: false,
  isSignUp: false,
};

const formSignSlice = createSlice({
  name: "formSign",
  initialState,
  reducers: {
    setIsSignIn: (state) => {
      state.isSignin = true;
      state.isSignUp = false;
    },
    setIsSignUp: (state) => {
      state.isSignin = false;
      state.isSignUp = true;
    },
  },
});

export const { setIsSignIn, setIsSignUp } = formSignSlice.actions;

export default formSignSlice.reducer;
