import React, { useState } from 'react';
import { StyledOrders } from '../styles/Orders.styled';
import AddModal from './AddModal';
import DataTable from './DataTable';


const Orders = () => {

  const [isAddModal, setIsAddModal] = useState(false);

  const handleAddModal = () => {
    setIsAddModal(!isAddModal);
  }

  return (
    <StyledOrders>
      <div className="orders__header">
        {isAddModal ? <AddModal handleAddModal={handleAddModal} /> : null}
        <div className="text__header">
          <h1 className="title">Today's orders</h1>
          <p className="date">{Date()}</p>
        </div>
        <button onClick={handleAddModal} className="new__button">New Order</button>
      </div>
      <DataTable/>
    </StyledOrders>
  );
}

export default Orders;
