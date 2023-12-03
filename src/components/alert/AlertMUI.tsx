import * as React from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const AlertMUI = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});

export default AlertMUI;
