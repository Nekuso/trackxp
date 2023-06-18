import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { StyledSidebar } from "../styles/Sidebar.styled";

function Sidebar({ currentUser }) {
  const { dispatch } = useContext(AuthContext);

  const [user, setUser] = useState(currentUser ? currentUser : "");

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  const allowedRoles = {
    dashboard: ["Manager", "Staff"],
    orders: ["Manager", "Staff"],
    analytics: [, "Manager"],
    inventory: ["Manager"],
    management: ["Manager"],
    reports: ["Manager"],
  }; // add the roles that are allowed to see the link

  return (
    <StyledSidebar className="sidebar__container">
      <div className="top__side navigation">
        <Link to="/" className="home__logo">
          <i className="bx bxs-analyse"></i>
          <h2>
            Track<mark>XP</mark>
          </h2>
        </Link>
        <h4>Menu</h4>
        <ul className="sidebar__links">
          {allowedRoles["dashboard"].includes(currentUser.role) && (
            <Link className="li list" to="">
              <i className="bx bxs-dashboard"></i>
              <div className="link title">Dashboard</div>
            </Link>
          )}
          {allowedRoles["orders"].includes(currentUser.role) && (
            <Link className="li list" to="Orders">
              <i className="bx bxs-receipt"></i>
              <div className="link title">Orders</div>
            </Link>
          )}
          {allowedRoles["analytics"].includes(currentUser.role) && (
            <Link className="li list" to="Analytics">
              <i className="bx bxs-objects-horizontal-left"></i>
              <div className="link title">Analytics</div>
            </Link>
          )}
          {/* {allowedRoles["inventory"].includes(currentUser.role) && (
            <Link className="li list" to="Inventory">
              <i className="bx bxs-package"></i>
              <div className="link title">Inventory</div>
            </Link>
          )} */}
          {allowedRoles["management"].includes(currentUser.role) && (
            <Link className="li list" to="Management">
              <i className="bx bx-user-circle"></i>
              <div className="link title">Management</div>
            </Link>
          )}
          {allowedRoles["reports"].includes(currentUser.role) && (
            <Link className="li list" to="Reports">
              <i className="bx bxs-report"></i>
              <div className="link title">Reports</div>
            </Link>
          )}
        </ul>
      </div>

      <div className="other__container">
        <Link
          className="other__link"
          to="/Login"
          onClick={() => dispatch({ type: "LOGOUT" })}
        >
          <i className="bx bx-log-out"></i>
          <div className="link title">Logout</div>
        </Link>
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
