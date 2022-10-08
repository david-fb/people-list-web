/* eslint-disable react/prop-types */
import React, { forwardRef, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectRefreshToken, userLogOut } from '../reducers/userSlice';
import { createPerson, updateById } from '../services/api/person';

import '../styles/ModalUser.css';

const ModalUser = forwardRef((props, ref) => {
  const accessToken = useSelector(selectRefreshToken);
  const dispatch = useDispatch();

  const form = useRef();

  const { isEdit, handleClose, refreshPeople } = props;
  const person = props.person ?? {};
  const title = isEdit ? 'Actualizar' : 'Agregar';

  const [errors, setErrors] = useState({});

  const handleSubmit = async (evt) => {
    setErrors({});
    evt.preventDefault();
    const formData = new FormData(form.current);

    const personData = {
      document_type: formData.get('document_type'),
      document: formData.get('document'),
      names: formData.get('names'),
      surnames: formData.get('surnames'),
      hobbie: formData.get('hobbie'),
    };

    try {
      if (isEdit) {
        await updateById(accessToken, person.id, personData);
        refreshPeople();
        handleClose();
      } else {
        await createPerson(accessToken, personData);
        refreshPeople();
        handleClose();
      }
    } catch (error) {
      if (error.response) {
        setErrors(error.response.data);
      } else {
        dispatch(userLogOut());
      }
    }
  };

  return (
    <div tabIndex={props.tabIndex} onFocus={props.onFocus} ref={ref} className="ModalUser">
      <button className="CloseButton" onClick={handleClose}>
        Close
      </button>
      <h2>{title}</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="inputsContainer">
          <label>
            Tipo de Documento:
            <select name="document_type" defaultValue={person.document_type} required>
              <option value="CC">Cédula de Ciudadanía</option>
              <option value="CE">Cédula de Extranjera</option>
              <option value="TI">Tarjeta de Identidad</option>
              <option value="PA">Pasaporte</option>
            </select>
          </label>
          <label>
            Documento:
            <input type="number" name="document" defaultValue={person.document} required />
          </label>
          <label>
            Nombres:
            <input type="text" name="names" defaultValue={person.names} required />
          </label>
          <label>
            Apellidos:
            <input type="text" name="surnames" defaultValue={person.surnames} required />
          </label>
          <label>
            Hobbie:
            <input type="text" name="hobbie" defaultValue={person.hobbie} required />
          </label>
        </div>
        <div>Error: {Object.keys(errors).map((key) => errors[key].map((item, index) => <p key={`error-${index}`}>{item}</p>))}</div>
        <div className="buttonsContainer">
          <button onClick={handleClose} type="button">
            Cancelar
          </button>
          <button>Guardar</button>
        </div>
      </form>
    </div>
  );
});

ModalUser.displayName = 'ModalUser';

export default ModalUser;
