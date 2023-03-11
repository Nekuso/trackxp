import { React, useState } from "react";
import { StyledDataTable } from "../styles/DataTable.styled";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { dataColumns } from "../dataTableSource";
import { Link } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { motion } from "framer-motion";

const Datatable = ({ handleDeleteNotification, queryData, setQueryData }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "orders", id));
    } catch (err) {
      console.log(err);
    }
    setQueryData(queryData.filter((item) => item.id !== id));
    handleDeleteNotification();
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      width: 160,
      disableExport: true,
      renderCell: (params) => {
        return (
          <div className="cell__action">
            <Link to={params.row.orderId.toString()} className="view__button">
              View
            </Link>
            <div
              className="delete__button"
              onClick={() => handleDelete(params.row.id)}
            >
              Cancel
            </div>
          </div>
        );
      },
    },
  ];

  const viewVariants = {
    initialHidden: {
      opacity: 0,
      y: 6,
    },
    initialVisible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.5,
        transition: {
          type: "spring",
          stiffness: 80,
        },
      },
    },
  };

  return (
    <StyledDataTable>
      <motion.div
        className="search__container"
        variants={viewVariants}
        initial="initialHidden"
        animate="initialVisible"
        exit="initialHidden"
      >
        <input
          className="search__input"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="INPUT ORDER ID"
        />
      </motion.div>
      <motion.div
        className="dataTable"
        variants={viewVariants}
        initial="initialHidden"
        animate="initialVisible"
        exit="initialHidden"
      >
        <DataGrid
          className="dataGrid"
          rows={queryData}
          columns={dataColumns.concat(actionColumn)}
          pageSize={15}
          rowsPerPageOptions={[15]}
          density={"compact"}
          sx={{
            p: "10px",
          }}
          initialState={{
            sorting: {
              sortModel: [{ field: "orderId", sort: "desc" }],
            },
          }}
          filterModel={{
            items: [
              {
                columnField: "orderId",
                operatorValue: "contains",
                value: searchValue,
              },
            ],
          }}
          components={{ Toolbar: GridToolbar }}
          disableExportMenu={true}
          componentsProps={{
            toolbar: {
              csvOptions: {
                fields: [
                  "name",
                  "total",
                  "dateCreated",
                  "payment",
                  "cycleStatus",
                ],
              },
            },
          }}
        />
      </motion.div>
    </StyledDataTable>
  );
};

export default Datatable;
