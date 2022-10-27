import React from 'react';
import { StyledOrders } from '../styles/Orders.styled';
import DataTable from './DataTable';

const Orders = () => {

  // const columns = [
  //   { field: 'id', headerName: 'ID', width: 70 },
  //   { field: 'firstName', headerName: 'First name', width: 130 },
  //   { field: 'lastName', headerName: 'Last name', width: 130 },
  //   {
  //     field: 'age',
  //     headerName: 'Age',
  //     type: 'number',
  //     width: 90,
  //   },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   },
  // ];

  // const rows = [
  //   {id: 1,
  //     firstName: 'Sargine',
  //     lastName: 'Pinili',
  //     date: '2022-10-27',
  //     amount: 120,
  //     isPaid: true,
  //     status:"Pending",
  //     cycleStaus:"Ready for pick-up",
  //   },
  //   {id: 2,
  //     firstName: 'Natalie Shane',
  //     lastName: 'Aninon',
  //     date: '2022-10-27',
  //     amount: 240,
  //     isPaid: true,
  //     status:"Completed",
  //     cycleStaus:"Picked-up",
  //   },
  //   {id: 3,
  //     firstName: 'Ezzer Dave',
  //     lastName: 'Camal',
  //     date: '2022-10-27',
  //     amount: 440,
  //     isPaid: true,
  //     status:"Pending",
  //     cycleStaus:"Washing",
  //   },
  //   {id: 3,
  //     firstName: 'Ezzer Dave',
  //     lastName: 'Camal',
  //     date: '2022-10-27',
  //     amount: 440,
  //     isPaid: true,
  //     status:"Pending",
  //     cycleStaus:"Washing",
  //   },
  //   {id: 4,
  //     firstName: 'Adrian',
  //     lastName: 'Cardosa',
  //     date: '2022-10-27',
  //     amount: 340,
  //     isPaid: true,
  //     status:"Pending",
  //     cycleStaus:"Drying",
  //   },
  // ]


  return (
    <StyledOrders>
      <h1>Orders</h1>
      <DataTable/>
    </StyledOrders>
  );
}

export default Orders;
