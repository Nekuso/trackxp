import React, { useEffect, useState } from 'react';
import { StyledDataTable } from '../styles/DataTable.styled';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { dataColumns, dataRows } from '../dataTableSource';
import { Link } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import {db} from "../firebase"
import OrderDataServices from "../order.services"

const Datatable = () => {
    const [data, setData] = useState([]);

    onSnapshot(collection(db, "orders"), (snapshot) => {
        let orderData= [];
        snapshot.docs.forEach((doc) => {
            orderData.push({ ...doc.data(), id: doc.id });
        })
        setData(orderData);
    });
    
    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "orders", id));

        }catch(err) {
            console.log(err)
        }
        setData(data.filter((item)=> item.id !== id))
        
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
                    <Link to={"Single"} className="view__button">View</Link>
                    <div className="delete__button" onClick={() => handleDelete(params.row.id)}>Delete</div>
                </div>
            )
    }}]

    return (
        <StyledDataTable>
            <div className="dataTable">
                <DataGrid
                    className="dataGrid"
                    rows={data}
                    columns={dataColumns.concat(actionColumn)}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
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

                    
                />
            </div>

            
        </StyledDataTable>
    );
}

export default Datatable;
