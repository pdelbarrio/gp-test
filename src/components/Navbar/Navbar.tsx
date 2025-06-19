import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Good Practices in React
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
