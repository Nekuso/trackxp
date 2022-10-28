export const dataColumns = [
  { field: 'id', headerName: 'ID', width: 50 },
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
  { field: 'status', headerName: 'Status', width: 160,
    cellRender: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      )

    }
  },
];

export const dataRows = [
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