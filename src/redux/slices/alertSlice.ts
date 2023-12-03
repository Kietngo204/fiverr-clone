import { createSlice } from "@reduxjs/toolkit";

interface AlertState {
  open: boolean;
  status: string;
  message: string;
}

const initialState: AlertState = {
  open: false,
  status: "",
  message: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    onOpenAlert: (state, actions) => {
      state.open = true;
      state.status = actions.payload.status;
      state.message = actions.payload.message;
    },
    onCloseAlert: (state) => {
      state.open = false;
    },
  },
});

export const { onOpenAlert, onCloseAlert } = alertSlice.actions;

export default alertSlice.reducer;
