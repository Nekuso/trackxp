import React from 'react';
import { StyledDataTable } from '../styles/DataTable.styled';
import { DataGrid } from '@mui/x-data-grid';
import { dataColumns, dataRows } from '../dataTableSource';

const Datatable = () => {

    return (
        <StyledDataTable>
            <div className="dataTable">
            <DataGrid
                className="dataGrid"
                rows={dataRows}
                columns={dataColumns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                sx={{
                    boxShadow: 2,
                    border: 2,
                    borderColor: 'primary.light',
                    '& .MuiDataGrid-cell:hover': {
                        color: 'primary.main',
                    },
                }}
            />
            </div>
        </StyledDataTable>
    );
}

export default Datatable;
