import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Logo from "../Logo";
import { onOpenModal } from "../../../redux/slices/modalSlice";
import Account from "../Account";
import { setIsSignIn, setIsSignUp } from "redux/slices/formSign";

interface DrawerDesktopProps {}

const DrawerDesktop: React.FC<DrawerDesktopProps> = () => {
  const { textColor, logoColor, joinColor } = useSelector(
    (state: RootState) => state.scroll
  );
  const { user } = useSelector((state: RootState) => state.user);
  // const { data } = useSelector((state: RootState) => state.signIn);

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(onOpenModal());
  };

  return (
    <>
      <Typography
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          display: { xs: "none", sm: "block" },
          color: textColor,
        }}
      >
        <Logo logoColor={logoColor} />
      </Typography>

      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        {!!user ? (
          <Account />
        ) : (
          <>
            {" "}
            <button
              className="font-bold mr-6"
              onClick={() => {
                handleOpenModal();
                dispatch(setIsSignIn());
              }}
            >
              SIgn In
            </button>
            <button
              className={`
          font-bold 
          border 
          border-[${joinColor}] 
          rounded 
          text-sm 
          text-[${joinColor}] 
          px-4 
          py-1.5 
          hover:bg-[#7a9689] 
          hover:border-[#1dbf73]
          hover:text-white
          `}
              onClick={() => {
                handleOpenModal();
                dispatch(setIsSignUp());
              }}
            >
              JoIn
            </button>
          </>
        )}
      </Box>
    </>
  );
};

export default DrawerDesktop;
