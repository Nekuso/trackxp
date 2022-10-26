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
        <Widget type="orders" className="widget1"/>
        <Widget type="earnings" className="widget2"/>
        <Widget type="balance" className="widget3"/>
      </div>
      <div className="charts">
        <Featured/>
        <Chart/>
      </div>
    </StyledDashboard>
  )
}

export default Dashbooard