import React from 'react';
import { StyledDataTable } from '../styles/DataTable.styled';
import { DataGrid } from '@mui/x-data-grid';
import { dataColumns, dataRows } from '../dataTableSource';
import { Link } from 'react-router-dom';

const Datatable = () => {

    const actionColumn =[
        {field: 'action', 
            headerName: 'Action', 
            headerAlign: "center",
            width: 160,
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
                    rows={dataRows}
                    columns={dataColumns.concat(actionColumn)}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                    // checkboxSelection
                    sx={{
                        boxShadow: 2,
                        // border: 2,
                        // borderColor: 'primary.light',
                        // '& .MuiDataGrid-cell:hover': {
                        //     color: 'primary.main',
                        // }
                    }}
                    // disableColumnMenu
                />
            </div>
        </StyledDataTable>
    );
}

export default Datatable;
