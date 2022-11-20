import React from "react";
import { useContext } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./components/pages/DashboardPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import View from "./components/pages/View";
import { AuthContext } from "./context/AuthContext";
import { GlobalStyle } from "./styles/Global";

function App() {
  const { currentUser } = useContext(AuthContext);

  // Create a function for RequireAuth
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/Login" />;
  };

  return ( 
    // https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages
    <HashRouter>
      <GlobalStyle />
      <div className="content">
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />}/>
            <Route path=":orderId" element={<View/>}/>
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
      </div>
    </HashRouter>
  );
}

export default App;
