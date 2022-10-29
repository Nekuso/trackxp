export const dataColumns = [
  { field: "id", headerName: "ORDER ID", flex: 1 },

  { field: "name", 
    headerName: "Name",
    width: 150,
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
    headerName: "Payment",
    headerAlign: "center",
    align: "center",
    flex: 1,
    
  },

  {
    field: "status",
    headerName: "Status",
    headerAlign: "right",
    align: "right",
    width: 120,
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
    isPaid: "Paid",
    status: "Pending",
    cycleStaus: "Ready for pick-up",
  },
  {
    id: 2,
    firstName: "Natalie Shane",
    lastName: "Aninon",
    date: "2022-10-27",
    amount: 240,
    isPaid: "Paid",
    status: "Completed",
    cycleStaus: "Picked-up",
  },
  {
    id: 3,
    firstName: "Ezzer Dave",
    lastName: "Camal",
    date: "2022-10-27",
    amount: 440,
    isPaid: "Pending",
    status: "Completed",
    cycleStaus: "Washing",
  },
  {
    id: 4,
    firstName: "Adrian",
    lastName: "Cardosa",
    date: "2022-10-27",
    amount: 340,
    isPaid: "Paid",
    status: "Pending",
    cycleStaus: "Drying",
  },
  
];
