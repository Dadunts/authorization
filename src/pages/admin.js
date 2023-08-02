import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../utils/logout";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>Admin</Typography>

        <Button onClick={() => handleLogout(navigate)} variant="contained" sx={{ mt: 3 }}>
          Log out
        </Button>
      </Box>
    </Container>
  );
};

export default Admin;
