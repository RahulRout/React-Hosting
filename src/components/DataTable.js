import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import props from 'prop-types'

const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
    { id: 4, col1: 'Material-UI', col2: 'is Amazing' },
    { id: 5, col1: 'Material-UI', col2: 'is Amazing' },
];

const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
    { field: 'col3', headerName: 'Column 3', width: 150 },
    { field: 'col4', headerName: 'Column 4', width: 150 },
    { field: 'col5', headerName: 'Column 5', width: 150 },
];

export default function App() {
    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid style={{ backgroundColor: 'white' }} rows={rows} columns={columns} />
        </div>
    );
}