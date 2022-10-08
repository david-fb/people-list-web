/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Modal from '@mui/material/Modal';
import ModalUser from './ModalUser';

export default function Table({ peopleData, refreshPeople }) {
  const [pageSize, setPageSize] = useState(5);

  const [selectedItem, setSelectedItem] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedItem({});
    setIsEdit(false);
  };

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
          <button onClick={() => handleEditClick(params)}>Edit</button>
        </div>
      ),
      width: 150,
    },
  ];

  const handleEditClick = (params) => {
    setSelectedItem(params.row);
    setIsEdit(true);
    handleOpen();
  };

  return (
    <section>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-user" aria-describedby="modal-user-save-edit">
        <ModalUser isEdit={isEdit} handleClose={handleClose} person={selectedItem} refreshPeople={refreshPeople} />
      </Modal>
      <button onClick={handleOpen}>Agregar</button>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={peopleData} columns={columns} rowsPerPageOptions={[5, 10, 25]} pageSize={pageSize} onPageSizeChange={(newPageSize) => setPageSize(newPageSize)} />
      </div>
    </section>
  );
}
