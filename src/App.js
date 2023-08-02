import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import useLocalStorage from "./utils/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { Authorization } from "./utils/authorization";
// pages
import SignIn from "./pages/signIn";
import Home from "./pages/home";
import Admin from "./pages/admin";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);
  const [role, setRole] = useLocalStorage('role', false)
  // const navigate = useNavigate();

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<SignIn setIsLoggedIn={setIsLoggedIn} setRole={setRole} />}
        />
        <Route
          path="/"
          element={
            <Authorization 
              isLoggedIn={isLoggedIn}
              role={role}
              requiredRole={'user'}
              Element={Home}
              Navigate={Navigate}
            />
          }
        />
        <Route
          path="/admin"
          element={
            <Authorization 
              isLoggedIn={isLoggedIn}
              role={role}
              requiredRole={'admin'}
              Element={Admin}
              Navigate={Navigate}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
