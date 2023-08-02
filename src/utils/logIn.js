import { adminCredentials, userCredentials } from "../utils/credentials";

export const logIn = (email, password, setIsLoggedIn, setRole, navigate) => {
  if (
    email === adminCredentials.email &&
    password === adminCredentials.password
  ) {
    console.log("Logged in as admin.");
    setIsLoggedIn(true);
    setRole("admin");
    navigate("/admin", { replace: true });

    return;
  }
  const user = userCredentials.find(
    (user) => email === user.email && password === user.password
  );

  if (
    userCredentials.find(
      (user) => email === user.email && password === user.password
    )
  ) {
    console.log("Logged in as user:", user.email);
    setIsLoggedIn(true);
    setRole("user");
    navigate("/", { replace: true });

    return;
  }
  setIsLoggedIn(false);
  setRole("");

  console.log("Login failed. Invalid credentials.");
};
