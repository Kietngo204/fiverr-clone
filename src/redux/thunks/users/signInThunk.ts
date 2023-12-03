import { signInAPI } from "apis/userAPI";
import { SignInType } from "interfaces/userType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signIn = createAsyncThunk(
  "user/signIn",
  async (payload: SignInType, { dispatch, getState }) => {
    const response = await signInAPI(payload);

    return response.data?.content;
  }
);

interface SignInState {
  data: any;
  isLoading: boolean;
  error: any;
}

const initialState: SignInState = {
  data: null,
  isLoading: false,
  error: null,
};

const signInThunk = createSlice({
  name: "signin",
  initialState,
  reducers: {
    removeUser: (state) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { removeUser } = signInThunk.actions;

export default signInThunk.reducer;
