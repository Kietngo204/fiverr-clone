import React from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

interface DrawerContentProps {
  onDrawerToggle: () => void;
  navItems: any;
}

const DrawerContent: React.FC<DrawerContentProps> = ({
  onDrawerToggle,
  navItems,
}) => {
  return (
    <Box onClick={onDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item: any) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DrawerContent;
