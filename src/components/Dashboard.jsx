import React from 'react'
import {StyledDashboard} from "../styles/Dashboard.styled";
import Widget from './Widget';


function Dashbooard() {
  return (
    <StyledDashboard>
      <h1>Dashboard</h1>
        <div className="widgets">
          <Widget/>
          <Widget/>
          <Widget/>
        </div>
    </StyledDashboard>
  )
}

export default Dashbooard