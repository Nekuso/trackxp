import { AnimatePresence } from "framer-motion";
import React from "react";
import { useContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import DashboardPage from "./components/pages/DashboardPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import View from "./components/pages/View";
import { AuthContext } from "./context/AuthContext";
import { GlobalStyle } from "./styles/Global";

function App() {
  const location = useLocation();
  const { currentUser } = useContext(AuthContext);

  // Create a function for RequireAuth
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/Login" />;
  };

  return (
    <>
      <GlobalStyle />
      <div className="content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path=":orderId" element={<View />} />
              <Route path="Login" element={<LoginPage />} />
              <Route path="Signup" element={<SignupPage />} />
              <Route
                path="Home/*"
                element={
                  <RequireAuth>
                    <DashboardPage />
                  </RequireAuth>
                }
              />
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
