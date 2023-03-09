import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { StyledSidebar } from "../styles/Sidebar.styled";

function Sidebar() {
  const { dispatch } = useContext(AuthContext);

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
          <Link className="li list" to="">
            <i className="bx bxs-dashboard"></i>
            <div className="link title">Dashboard</div>
          </Link>
          <Link className="li list" to="Orders">
            <i className="bx bxs-receipt"></i>
            <div className="link title">Orders</div>
          </Link>
          <Link className="li list" to="Analytics">
            <i className="bx bxs-objects-horizontal-left"></i>
            <div className="link title">Analytics</div>
          </Link>
          <Link className="li list" to="Inventory">
            <i className="bx bxs-package"></i>
            <div className="link title">Inventory</div>
          </Link>
          <Link className="li list" to="Management">
            <i className="bx bx-user-circle"></i>
            <div className="link title">Management</div>
          </Link>
          <Link className="li list" to="Reports">
            <i className="bx bxs-report"></i>
            <div className="link title">Reports</div>
          </Link>
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
