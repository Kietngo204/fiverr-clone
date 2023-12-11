import { getMenuJobSlice, getTypeJobSlice } from "./jobThunk";
import { signInSlice, signUpSlice } from "./userThunk";

const rootReducers = {
  signIn: signInSlice.reducer,
  signUp: signUpSlice.reducer,
  menuJob: getMenuJobSlice.reducer,
  typeJob: getTypeJobSlice.reducer,
};
export default rootReducers;
