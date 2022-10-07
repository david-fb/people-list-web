/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

// const rows = [
//   { id: 1, col1: 'Hello', col2: 'World' },
//   { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
//   { id: 3, col1: 'MUI', col2: 'is Amazing' },
//   { id: 4, col1: 'MUI', col2: 'is Amazing' },
//   { id: 5, col1: 'MUI', col2: 'is Amazing' },
//   { id: 6, col1: 'MUI', col2: 'is Amazing' },
//   { id: 7, col1: 'MUI', col2: 'is Amazing' },
// ];

const columns = [
  //   { field: 'id', headerName: 'Column 1', width: 150 },
  { field: 'document_type', headerName: 'Tipo de Documento', width: 150 },
  { field: 'document', headerName: 'Documento', width: 150 },
  { field: 'names', headerName: 'Nombres', width: 150 },
  { field: 'surnames', headerName: 'Apellidos', width: 150 },
  { field: 'hobbie', headerName: 'Hobbie', width: 150 },
  {
    field: 'action',
    headerName: 'Acciones',
    renderCell: (params) => (
      <div>
        <button onClick={() => console.log(params.row.id)}>Delete</button>
        <button onClick={() => console.log(params.row.id)}>Edit</button>
      </div>
    ),
    width: 150,
  },
];

export default function Table({ peopleData }) {
  const [pageSize, setPageSize] = useState(5);
  return (
    <section>
      <button>Agregar</button>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={peopleData} columns={columns} rowsPerPageOptions={[5, 10, 25]} pageSize={pageSize} onPageSizeChange={(newPageSize) => setPageSize(newPageSize)} />
      </div>
    </section>
  );
}
