import React from "react";
import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./components/pages/DashboardPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import { AuthContext } from "./context/AuthContext";
import { GlobalStyle } from "./styles/Global";

function App() {
  const { currentUser } = useContext(AuthContext);

  // Create a function for RequireAuth
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/Login" />;
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="content">
        <Routes>
          <Route path="trackxp/">
            <Route index element={<HomePage />} />
            <Route path="trackxp/Login" element={<LoginPage />} />
            <Route path="trackxp/Signup" element={<SignupPage />} />
            <Route
              path="trackxp/Home/*"
              element={
                <RequireAuth>
                  <DashboardPage />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
