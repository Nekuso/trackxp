import React from 'react';
import { StyledOrders } from '../styles/Orders.styled';
import DataTable from './DataTable';

const Orders = () => {

  return (
    <StyledOrders>
      <div className="orders__header">
        <h1 className="title">ORDERS</h1>
        <button className="new__button">New Order</button>
      </div>
      <DataTable/>
    </StyledOrders>
  );
}

export default Orders;
