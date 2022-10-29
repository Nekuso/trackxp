export const dataColumns = [
  { field: "id", headerName: "ID", width: 50 },

  { field: "Name", 
    headerName: "Name", 
    flex: 1,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
    
  {
    field: "amount",
    headerName: "Price",
    type: "number",
    headerAlign: "center",
    flex: 1,
    align: "center",
  },
  {
    field: "date",
    headerName: "Date",
    headerAlign: "center",
    align: "center",
    flex: 1,
  },

  {
    field: "isPaid",
    headerName: "Paid",
    headerAlign: "center",
    align: "center",
    flex: 1,
    
  },

  {
    field: "status",
    headerName: "Status",
    headerAlign: "right",
    align: "right",
    flex: 1,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const dataRows = [
  {
    id: 1,
    firstName: "Sargine",
    lastName: "Pinili",
    date: "2022-10-27",
    amount: 120,
    isPaid: true,
    status: "Pending",
    cycleStaus: "Ready for pick-up",
  },
  {
    id: 2,
    firstName: "Natalie Shane",
    lastName: "Aninon",
    date: "2022-10-27",
    amount: 240,
    isPaid: true,
    status: "Completed",
    cycleStaus: "Picked-up",
  },
  {
    id: 3,
    firstName: "Ezzer Dave",
    lastName: "Camal",
    date: "2022-10-27",
    amount: 440,
    isPaid: false,
    status: "Pending",
    cycleStaus: "Washing",
  },
  {
    id: 4,
    firstName: "Adrian",
    lastName: "Cardosa",
    date: "2022-10-27",
    amount: 340,
    isPaid: true,
    status: "Pending",
    cycleStaus: "Drying",
  },
];
