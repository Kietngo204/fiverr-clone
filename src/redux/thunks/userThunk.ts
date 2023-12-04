import { signInAPI, signUpAPI } from "apis/userAPI";
import createAPIThunk from "./createAPIThunk";

// Tạo async thunk và slice bằng cách sử dụng hàm tạo createAPIThunk
export const { asyncThunk: signIn, slice: signInSlice } = createAPIThunk(
  signInAPI,
  "signin",
  {
    data: null,
    isLoading: false,
    error: null,
  }
);

export const { asyncThunk: signUp, slice: signUpSlice } = createAPIThunk(
  signUpAPI,
  "signup",
  {
    data: null,
    isLoading: false,
    error: null,
  }
);

const rootReducers = {
  signIn: signInSlice.reducer,
  signUp: signUpSlice.reducer,
};
export default rootReducers;
