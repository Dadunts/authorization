import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import useLocalStorage from "./utils/useLocalStorage";
// pages
import SignIn from "./pages/signIn";
import Home from "./pages/home";
import Admin from "./pages/admin";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);
  const [isAdmin, setIsAdmin] = useLocalStorage('isAdmin', false)
  console.log(isAdmin);
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<SignIn setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />}
        />
        <Route
          path="/"
          element={
            isLoggedIn && isAdmin === 'user' ? <Home /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/admin"
          element={
            isLoggedIn && isAdmin === 'admin' ? <Admin /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
