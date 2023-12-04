import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CheckIcon from "@mui/icons-material/Check";

import { useDispatch, useSelector } from "react-redux";

import FormSignIn from "components/forms/FormSignIn";
import TransitionDialog from "components/TransitionModal";
import { onCloseModal } from "redux/slices/modalSlice";
import { RootState } from "redux/store";
import FormSignUp from "components/forms/FormSignUp";
import { setIsSignIn, setIsSignUp } from "redux/slices/formSign";

const Sign = () => {
  const { openModal } = useSelector((state: RootState) => state.modal);
  const { isSignin, isSignUp } = useSelector(
    (state: RootState) => state.formSign
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(onCloseModal());
  };

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={openModal}
        TransitionComponent={TransitionDialog}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="flex justify-between w-full h-[645px]">
          <div className="w-1/2 bg-[url('https://fiverr-res.cloudinary.com/npm-assets/layout-server/standard.ddd97e5.png')] bg-cover bg-bottom px-[40px] py-[54px]">
            <h2 className="text-white text-[2rem] font-bold">
              Success starts here
            </h2>
            <ul className="flex flex-col justify-center-center mt-6 text-white text-lg">
              <li className="flex items-center  mb-4">
                <CheckIcon sx={{ fontSize: "16px", marginRight: "8px" }} />
                Over 600 categories
              </li>
              <li className="flex items-center  mb-4">
                <CheckIcon sx={{ fontSize: "16px", marginRight: "8px" }} />
                Pay per project, not per hour
              </li>
              <li className="flex items-center  mb-4">
                <CheckIcon sx={{ fontSize: "16px", marginRight: "8px" }} />
                Access to talent and businesses across the globe
              </li>
            </ul>
          </div>
          <div className="w-1/2 mt-6 mb-8 px-10">
            {isSignin && (
              <>
                <div className="mt-6 mb-8 ">
                  <DialogTitle
                    sx={{
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    {"Sign in to your account"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText
                      id="alert-dialog-slide-description"
                      sx={{ color: "#62646a" }}
                    >
                      Don’t have an account?
                      <span
                        className="underline cursor-pointer text-[#222325] ml-1"
                        onClick={() => {
                          dispatch(setIsSignUp());
                        }}
                      >
                        Join here
                      </span>
                    </DialogContentText>
                  </DialogContent>
                </div>
                <FormSignIn />
              </>
            )}
            {isSignUp && (
              <>
                <div className="mt-6 mb-8 ">
                  <DialogTitle
                    sx={{
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    {"Create a new account"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText
                      id="alert-dialog-slide-description"
                      sx={{ color: "#62646a" }}
                    >
                      Already have an account?
                      <span
                        className="underline cursor-pointer text-[#222325] ml-1"
                        onClick={() => {
                          dispatch(setIsSignIn());
                        }}
                      >
                        Sign in
                      </span>
                    </DialogContentText>
                  </DialogContent>
                </div>
                <FormSignUp />
              </>
            )}
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
};

export default Sign;
