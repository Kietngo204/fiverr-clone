import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Logo from "../Logo";
import { onOpenModalSign } from "../../../redux/slices/modalSlice";
import Account from "../Account";
import { setIsSignIn, setIsSignUp } from "redux/slices/formSignSlice";

interface DrawerDesktopProps {}

const DrawerDesktop: React.FC<DrawerDesktopProps> = () => {
  const { textColor, logoColor, joinColor } = useSelector(
    (state: RootState) => state.scroll
  );
  const { currentUser } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(onOpenModalSign());
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
        {!!currentUser ? (
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
              rounded 
              text-sm
              ${joinColor}
              px-4 
              py-1.5 
            hover:bg-[#1dbf73] 
            hover:border-[#1dbf73]
            hover:text-[#fff]
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
