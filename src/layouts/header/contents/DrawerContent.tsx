import React from "react";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { onOpenModalSign } from "redux/slices/modalSlice";
import { setIsSignIn, setIsSignUp } from "redux/slices/formSignSlice";
import { RootState } from "redux/store";
import LogoutIcon from "@mui/icons-material/Logout";
import { handleRemoveUser } from "redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

interface DrawerContentProps {
  onDrawerToggle: () => void;
  navItems: any;
}

const DrawerContent: React.FC<DrawerContentProps> = ({
  onDrawerToggle,
  navItems,
}) => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = currentUser?.user;
  return (
    <Box onClick={onDrawerToggle}>
      {!currentUser ? (
        <div className="py-5 px-5 flex flex-col items-start gap-2">
          <button
            className="bg-[#1dbf73] text-white px-6 py-2 rounded font-bold"
            onClick={() => {
              dispatch(onOpenModalSign());
              dispatch(setIsSignUp());
            }}
          >
            Join Fiverr
          </button>
          <button
            className="py-3 font-bold text-[#62646a]"
            onClick={() => {
              dispatch(onOpenModalSign());
              dispatch(setIsSignIn());
            }}
          >
            Sign in
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-start p-4 gap-3">
          <Avatar
            alt={user?.name}
            src={user?.avatar}
            sx={{ width: 60, height: 60, my: "20px" }}
          />
          <h4 className="text-[#404145] font-bold">{user?.name}</h4>
          <button
            className="flex items-center gap-2"
            onClick={() => {
              dispatch(handleRemoveUser());
              setTimeout(() => {
                navigate(0);
              }, 1000);
            }}
          >
            Logout{" "}
            <span>
              <LogoutIcon sx={{ color: "#5f5f5f" }} />
            </span>
          </button>
        </div>
      )}

      <Divider />
      <List>
        {navItems.map((item: any) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "start" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DrawerContent;
