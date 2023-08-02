import { adminCredentials, userCredentials } from "../utils/credentials";

export const logIn = (email, password, setIsLoggedIn, setIsAdmin, navigate) => {
    if (
    email === adminCredentials.email &&
    password === adminCredentials.password
  ) {
    console.log("Logged in as admin.");
    setIsLoggedIn(true);
    setIsAdmin('admin');
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
    setIsAdmin('user');
    navigate("/", { replace: true });

    return;
  }
  setIsLoggedIn(false);
  setIsAdmin('');

  console.log("Login failed. Invalid credentials.");
};
