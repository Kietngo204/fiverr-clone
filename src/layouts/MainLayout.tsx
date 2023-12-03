import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import SignUp from "./header/auth/SignUp";
import SnackBarMui from "components/alert/SnackbarMui";
import Header from "./header/Header";

export default function MainLayout() {
  return (
    <Box
      sx={
        {
          // display: "flex",
          // backgroundColor: "#084025",
        }
      }
    >
      <CssBaseline />
      <Header />
      <Box component="main">
        <SnackBarMui />
        <SignUp />
        <Outlet />
      </Box>
    </Box>
  );
}
