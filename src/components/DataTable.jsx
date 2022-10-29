import React from 'react';
import { StyledDataTable } from '../styles/DataTable.styled';
import { DataGrid } from '@mui/x-data-grid';
import { dataColumns, dataRows } from '../dataTableSource';

const Datatable = () => {


    const actionColumn =[
        {field: 'action', 
            headerName: 'Action', 
            flex:1 , 
            width: 100,
            headerAlign: "center",
            renderCell: () => {
            return (
                <div className="cell__action">
                    <div className="view__button">View</div>
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
                    checkboxSelection
                    sx={{
                        boxShadow: 2,
                        // border: 2,
                        // borderColor: 'primary.light',
                        // '& .MuiDataGrid-cell:hover': {
                        //     color: 'primary.main',
                        // }
                    }}
                />
            </div>
        </StyledDataTable>
    );
}

export default Datatable;
