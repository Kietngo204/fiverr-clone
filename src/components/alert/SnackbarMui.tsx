import React from "react";
import Snackbar from "@mui/material/Snackbar";
import AlertMUI from "./AlertMUI";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { AlertColor } from "@mui/material/Alert";
import { onCloseAlert } from "redux/slices/alertSlice";

const SnackBarMui = () => {
  const { open, status, message } = useSelector(
    (state: RootState) => state.alert
  );
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(onCloseAlert());
  };

  const severity: AlertColor = status as AlertColor;
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <AlertMUI
        onClose={handleClose}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </AlertMUI>
    </Snackbar>
  );
};

export default SnackBarMui;
