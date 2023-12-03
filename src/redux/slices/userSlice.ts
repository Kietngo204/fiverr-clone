import { UserType } from "./../../interfaces/userType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: UserType | undefined;
}

const storedUser = localStorage.getItem("loginUser");

const initialState: UserState = {
  user: storedUser ? JSON.parse(storedUser) : undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleSignIn: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
      localStorage.setItem("loginUser", JSON.stringify(action.payload));
    },
    handleRemoveUser: (state) => {
      state.user = undefined;
      localStorage.removeItem("loginUser");
    },
  },
});

export const { handleSignIn, handleRemoveUser } = userSlice.actions;

export default userSlice.reducer;
