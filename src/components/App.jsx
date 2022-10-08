import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import { getAll } from '../services/api/person';
import { useSelector, useDispatch } from 'react-redux';
import { selectRefreshToken, userLogOut } from '../reducers/userSlice';
import Table from './Table';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  const accessToken = useSelector(selectRefreshToken);
  const dispatch = useDispatch();
  const [people, setPeople] = useState([]);

  const handleGetPeople = async () => {
    try {
      const res = await getAll(accessToken);
      setPeople(res);
    } catch (error) {
      dispatch(userLogOut());
    }
  };

  useEffect(() => {
    handleGetPeople();
  }, []);

  return (
    <main className="App">
      <nav>
        <button onClick={() => dispatch(userLogOut())}>Log Out</button>
      </nav>
      <h1>Lista de Personas</h1>
      <Table peopleData={people} refreshPeople={handleGetPeople} />
      <ToastContainer />
    </main>
  );
}

export default App;
