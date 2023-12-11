import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  openModalSign: boolean;
  openModalVideoSelling: boolean;
}

const initialState: ModalState = {
  openModalSign: false,
  openModalVideoSelling: false,
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    onOpenModalSign: (state) => {
      state.openModalSign = true;
      state.openModalVideoSelling = false;
    },
    onOpenModalVideoSelling: (state) => {
      state.openModalSign = false;
      state.openModalVideoSelling = true;
    },
    onCloseModal: (state) => {
      // Đặt lại tất cả các thuộc tính modal về false
      Object.keys(state).forEach((key) => {
        if (typeof state[key as keyof ModalState] === "boolean") {
          state[key as keyof ModalState] = false;
        }
      });
    },
  },
});

export const { onOpenModalSign, onOpenModalVideoSelling, onCloseModal } =
  dialogSlice.actions;

export default dialogSlice.reducer;
