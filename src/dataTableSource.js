export const dataColumns = [
  { field: "id", headerName: "ORDER ID", flex: 1 },

  {
    field: "name",
    headerName: "Name",
    width: 140,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
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
    headerName: "Ordered Date",
    headerAlign: "center",
    align: "center",
    flex: 2,
    headerClassname: "date__header",
    cellClassName: "date__cell",
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
    id: 1000000,
    firstName: "Sargine",
    lastName: "Pinili",
    date: "2022-10-28",
    contact: "09123456789",
    isPaid: "Paid",
    status: "Pending",
    amount: 140,
    cycleStaus: "Ready for pick-up",
    particulars: [
      {
        name: "Wash Loads",
        quantity: 1,
        price: 70,
      },
      {
        name: "Dry Loads",
        quantity: 1,
        price: 70,
      },
      {
        name: "Ariel",
        quantity: 0,
        price: 0,
      },
      {
        name: "Breeze",
        quantity: 2,
        price: 9,
      },
      {
        name: "Downy",
        quantity: 2,
        price: 8,
      },
      {
        name: "Surf",
        quantity: 0,
        price: 8,
      },
      {
        name: "Color Safe Sachet",
        quantity: 1,
        price: 10,
      },
      {
        name: "Color Safe Bottle",
        quantity: 0,
        price: 10,
      },
      {
        name: "Plastic Bag",
        quantity: 0,
        price: 0,
      },
      {
        name: "Drop-Off (Folding)",
        quantity: 1,
        price: 20,
      },
    ],
  },
  {
    id: 1000001,
    firstName: "Natalie Shane",
    lastName: "Aninon",
    date: "2022-10-22",
    amount: 240,
    isPaid: "Paid",
    status: "Completed",
    cycleStaus: "Picked-up",
  },
  {
    id: 1000002,
    firstName: "Ezzer Dave",
    lastName: "Camal",
    date: "2022-10-26",
    amount: 440,
    isPaid: "Pending",
    status: "Completed",
    cycleStaus: "Washing",
  },
  {
    id: 1000003,
    firstName: "Adrian",
    lastName: "Cardosa",
    date: "2022-10-29",
    amount: 340,
    isPaid: "Paid",
    status: "Pending",
    cycleStaus: "Drying",
  },
  {
    id: 1000004,
    firstName: "Kaihzan-Nixxo",
    lastName: "Jamilla",
    date: "2022-10-23",
    amount: 100,
    isPaid: "Paid",
    status: "Pending",
    cycleStaus: "Drying",
  },
  {
    id: 1000005,
    firstName: "Nekuso",
    lastName: "Castaneda",
    date: "2022-10-30",
    amount: 300,
    isPaid: "Pending",
    status: "Completed",
    cycleStaus: "Ready-for-pick-up",
  },
  {
    id: 1000006,
    firstName: "Logan",
    lastName: "Grace",
    date: "2022-10-26",
    amount: 220,
    isPaid: "Pending",
    status: "Pending",
    cycleStaus: "Ready-for-pick-up",
  },
  {
    id: 1000007,
    firstName: "Mona",
    lastName: "Grace",
    date: "2022-10-30",
    amount: 120,
    isPaid: "Pending",
    status: "Pending",
    cycleStaus: "Ready-for-pick-up",
  },
];
