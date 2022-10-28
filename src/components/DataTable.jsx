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
            />
            </div>
        </StyledDataTable>
    );
}

export default Datatable;
