import React from "react";
import { Box, Typography, Button, AppBar, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../utils/logout";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin page
          </Typography>
          <Button onClick={() => handleLogout(navigate)} color="inherit">Log out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Admin;
