import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  openModal: boolean;
}

const initialState: ModalState = {
  openModal: false,
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    onOpenModal: (state) => {
      state.openModal = true;
    },
    onCloseModal: (state) => {
      state.openModal = false;
    },
  },
});

export const { onOpenModal, onCloseModal } = dialogSlice.actions;

export default dialogSlice.reducer;
