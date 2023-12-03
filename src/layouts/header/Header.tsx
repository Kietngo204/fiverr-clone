import React from "react";
import ElevationScroll from "./ElevationScroll";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import DrawerDesktop from "./contents/DrawerDesktop";
import DrawerMobile from "./contents/DrawerMobile";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const Header = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { backgroundColor, textColor } = useSelector(
    (state: RootState) => state.scroll
  );

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <ElevationScroll {...props}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: { xs: "#fff", sm: backgroundColor },
          color: { xs: "#000", sm: textColor },
          transition: "background-color 1s, color 1s",
        }}
      >
        <div className="container mx-auto">
          <Toolbar>
            <DrawerDesktop />

            <DrawerMobile
              container={container}
              mobileOpen={mobileOpen}
              onDrawerToggle={handleDrawerToggle}
              drawerWidth={drawerWidth}
              navItems={navItems}
            />
          </Toolbar>
        </div>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
