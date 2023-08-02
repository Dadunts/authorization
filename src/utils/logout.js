export const handleLogout = (navigate) => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("isAdmin");
  navigate("/login", { replace: true });
};
