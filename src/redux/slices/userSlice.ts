import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CurrentUserState {
  currentUser: any;
}

const storedUser = localStorage.getItem("loginUser");

const initialState: CurrentUserState = {
  currentUser: storedUser ? JSON.parse(storedUser) : undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleSignIn: (state, action: PayloadAction<CurrentUserState>) => {
      state.currentUser = action.payload;
      localStorage.setItem("loginUser", JSON.stringify(state.currentUser));
    },
    handleRemoveUser: (state) => {
      state.currentUser = undefined;
      localStorage.removeItem("loginUser");
    },
  },
});

export const { handleSignIn, handleRemoveUser } = userSlice.actions;

export default userSlice.reducer;
