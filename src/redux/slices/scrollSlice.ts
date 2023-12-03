import { createSlice } from "@reduxjs/toolkit";

interface ScrollState {
  backgroundColor: string;
  textColor: string;
  logoColor: string;
  joinColor: string;
}

const initialState: ScrollState = {
  backgroundColor: "transparent",
  textColor: "#fff",
  logoColor: "#fff",
  joinColor: "#fff",
};

export const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    scrollNavbar: (state, action) => {
      state.backgroundColor = action.payload.backgroundColor;
      state.textColor = action.payload.textColor;
      state.logoColor = action.payload.logoColor;
      state.joinColor = action.payload.joinColor;
    },
  },
});

export const { scrollNavbar } = scrollSlice.actions;

export default scrollSlice.reducer;
