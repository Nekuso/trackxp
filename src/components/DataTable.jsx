import React, { useEffect, useState } from 'react';
import { StyledDataTable } from '../styles/DataTable.styled';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { dataColumns, dataRows } from '../dataTableSource';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import {db} from "../firebase"

const Datatable = () => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            let list = [];
            try {
                const querySnapshot = await getDocs(collection(db, "orders"));
                querySnapshot.forEach((doc)=> {
                    list.push({ id: doc.id, ...doc.data()});
                });
                setData(list);
            } catch(err) {
                console.log(err)
            }
        }
        fetchData();
    },[])

    const actionColumn =[
        {field: 'action', 
            headerName: 'Action', 
            headerAlign: "center",
            width: 160,
            disableExport: true,
            renderCell: () => {
            return (
                <div className="cell__action">
                    <Link to={"Single"} className="view__button">View</Link>
                    <div className="delete__button">Delete</div>
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
