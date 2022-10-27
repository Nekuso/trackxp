import React from 'react';
import { StyledDataTable } from '../styles/DataTable.styled';
import { DataGrid } from '@mui/x-data-grid';

const Datatable = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'firstName', headerName: 'First name', width: 140 },
        { field: 'lastName', headerName: 'Last name', width: 140 },
        {
            field: 'amount',
            headerName: 'Price',
            type: 'number',
            width: 90,
        },
        { field: 'date', headerName: 'Date', width: 160},
        { field: 'isPaid', headerName: 'Paid', width: 160},
        { field: 'status', headerName: 'Status', width: 160},
    ];
      
  const rows = [
    {id: 1,
      firstName: 'Sargine',
      lastName: 'Pinili',
      date: '2022-10-27',
      amount: 120,
      isPaid: true,
      status:"Pending",
      cycleStaus:"Ready for pick-up",
    },
    {id: 2,
      firstName: 'Natalie Shane',
      lastName: 'Aninon',
      date: '2022-10-27',
      amount: 240,
      isPaid: true,
      status:"Completed",
      cycleStaus:"Picked-up",
    },
    {id: 3,
      firstName: 'Ezzer Dave',
      lastName: 'Camal',
      date: '2022-10-27',
      amount: 440,
      isPaid: true,
      status:"Pending",
      cycleStaus:"Washing",
    },
    {id: 4,
      firstName: 'Adrian',
      lastName: 'Cardosa',
      date: '2022-10-27',
      amount: 340,
      isPaid: true,
      status:"Pending",
      cycleStaus:"Drying",
    },
  ]

    return (
        <StyledDataTable>
            <div className="dataTable">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
            </div>
        </StyledDataTable>
    );
}

export default Datatable;
