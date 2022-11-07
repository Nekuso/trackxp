import React, { useState } from 'react'
import {StyledDashboard} from "../styles/Dashboard.styled";
import Widget from './Widget';
import Featured from './Featured';
import Chart from './Chart';
import AddModal from './AddModal';

function Dashbooard() {

  const [isAddModal, setIsAddModal] = useState(false);

  const handleAddModal = () => {
    setIsAddModal(!isAddModal);
  }

  return (
    <StyledDashboard>
      {isAddModal ? <AddModal handleAddModal={handleAddModal} /> : null}
      <div className="dashboard__header">
        <h1 className="page__title">Dashboard🚀</h1>
        <button onClick={handleAddModal} className="new__button">New Order</button>
      </div>
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