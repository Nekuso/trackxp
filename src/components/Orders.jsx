import React from 'react';
import { StyledOrders } from '../styles/Orders.styled';
import DataTable from './DataTable';

const Orders = () => {
  
  return (
    <StyledOrders>
      <h1>Orders</h1>
      <DataTable/>
    </StyledOrders>
  );
}

export default Orders;
