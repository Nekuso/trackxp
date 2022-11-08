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
    field: "price",
    headerName: "Price",
    type: "number",
    headerAlign: "center",
    flex: 1,
    align: "center",
  },
  {
    field: "dateCreated",
    headerName: "Ordered Date",
    headerAlign: "center",
    align: "center",
    flex: 2,
    headerClassname: "date__header",
    cellClassName: "date__cell",
  },
  {
    field: "payment",
    headerName: "Payment",
    headerAlign: "center",
    align: "center",
    flex: 1,
  },
  {
    field: "cycleStatus",
    headerName: "Status",
    headerAlign: "right",
    align: "right",
    width: 120,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.cycleStatus}`}>
          {params.row.cycleStatus}
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
    cycleStatus: "Ready for pick-up",
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
];
