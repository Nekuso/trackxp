import React, { useEffect, useState } from 'react';
import { StyledDataTable } from '../styles/DataTable.styled';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { dataColumns } from '../dataTableSource';
import { Link } from 'react-router-dom';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import {db} from "../firebase";
import {motion} from "framer-motion";

const Datatable = ({handleDeleteNotification}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        
        // LISTEN (REALTIME)
        const unsub = onSnapshot(
          collection(db, "orders"),
          (snapShot) => {
            let list = [];
            snapShot.docs.forEach((doc) => {
              list.push({ id: doc.id, ...doc.data() });
            });
            setData(list);
          },
          (error) => {
            console.log(error);
          }
        );
    
        return () => {
          unsub();
        };
    }, []);
    
    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "orders", id));

        }catch(err) {
            console.log(err)
        }
        setData(data.filter((item)=> item.id !== id))
        handleDeleteNotification();
    }
    
    const actionColumn =[
        {field: 'action', 
            headerName: 'Action', 
            headerAlign: "center",
            width: 160,
            disableExport: true,
            renderCell: (params) => {
            return (
                <div className="cell__action">
                    <Link to={params.row.orderId.toString()} className="view__button">View</Link>
                    <div className="delete__button" onClick={() => handleDelete(params.row.id)}>Delete</div>
                </div>
            )}
        }
    ]

    const viewVariants = {
        initialHidden: {
          opacity: 0,
          y: 6
        },
        initialVisible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.8,
            duration: .5,
            transition: {
                type: "spring",
                stiffness: 80,
            }
          }
        }
    }

    return (
        <StyledDataTable>
            <motion.div className="dataTable"
                variants={viewVariants}
                initial="initialHidden"
                animate="initialVisible"
                exit="initialHidden"
            >
                <DataGrid
                    className="dataGrid"
                    rows={data}
                    columns={dataColumns.concat(actionColumn)}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                    density={"compact"}
                    // checkboxSelection
                    sx={{
                        // borderRadius: ".5rem",
                        p: "10px",
                        // boxShadow: 2,
                        // border: 2,
                        // borderColor: 'primary.light',
                        // '& .MuiDataGrid-cell:hover': {
                        //     color: 'primary.main',
                        // }
                    }}
                    // disableColumnMenu
                    // autoHeight
                    components={{ Toolbar: GridToolbar }}
                    disableExportMenu={true}
                    componentsProps={{ toolbar: { csvOptions: { fields: ['name', 'total', "dateCreated", "payment", "cycleStatus"] } } }}
                />
            </motion.div>

            
        </StyledDataTable>
    );
}

export default Datatable;
