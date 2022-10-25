import React from 'react'
import {StyledDashboard} from "../styles/Dashboard.styled";
import Widget from './Widget';
import Featured from './Featured';
import Chart from './Chart';

function Dashbooard() {
  return (
    <StyledDashboard>
      {/* <h1>Dashboard</h1> */}
      <div className="widgets">
        <Widget type="orders"/>
        <Widget type="earnings"/>
        <Widget type="balance"/>
      </div>
      <div className="charts">
        <Featured/>
        <Chart/>
      </div>
    </StyledDashboard>
  )
}

export default Dashbooard