import { TextField, Box, Typography, Button, Container } from "@mui/material";
import { logIn } from "../utils/logIn";
import { useNavigate } from "react-router-dom";

const inputs = [
  {
    id: "email",
    label: "Email Address",
    type: "email",
    name: "email",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    name: "password",
  },
];

const SignIn = ({ setIsLoggedIn, setIsAdmin }) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    logIn(
      data.get("email"),
      data.get("password"),
      setIsLoggedIn,
      setIsAdmin,
      navigate
    );
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Sign in</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          {inputs.map((value, idx) => (
            <TextField
              key={value.label + idx}
              margin="normal"
              required
              fullWidth
              id={value.id}
              label={value.label}
              name={value.name}
              type={value.type}
              autoFocus
            />
          ))}
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
