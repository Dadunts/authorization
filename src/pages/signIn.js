import { TextField, Box, Typography, Button, Container } from "@mui/material";

const inputs = [
  {
    id: "email",
    label: "Email Address",
    type: "email",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
  },
];
const SignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {inputs.map((value, idx) => (
            <TextField
              key={value.label + idx}
              margin="normal"
              required
              fullWidth
              id={value.id}
              label={value.label}
              type={value.label}
              autoFocus
            />
          ))}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default SignIn