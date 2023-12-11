import useScrollTrigger from "@mui/material/useScrollTrigger";
import * as React from "react";
import { useDispatch } from "react-redux";
import { scrollNavbar } from "../../redux/slices/scrollSlice";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

export default function ElevationScroll(props: Props) {
  const dispatch = useDispatch();

  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  React.useEffect(() => {
    if (trigger) {
      dispatch(
        scrollNavbar({
          backgroundColor: "#fff",
          textColor: "#000",
          logoColor: "#000",
          joinColor: "text-[#1dbf73] border-[#1dbf73]",
        })
      );
    } else {
      dispatch(
        scrollNavbar({
          backgroundColor: "transparent",
          textColor: "#fff",
          logoColor: "#fff",
          joinColor: "text-[#fff] border-[#fff]",
        })
      );
    }
  }, [trigger, dispatch]);

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
