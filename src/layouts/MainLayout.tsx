import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import Sign from "./header/auth/Sign";
import SnackBarMui from "components/alert/SnackbarMui";
import Header from "./header/Header";
import VideoModalSelling from "./main/selling/VideoModalSelling";

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
        <Sign />
        <VideoModalSelling />
        <Outlet />
      </Box>
    </Box>
  );
}
