import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import { getAll } from '../services/api/person';
import { useSelector, useDispatch } from 'react-redux';
import { selectRefreshToken, userLogOut } from '../reducers/userSlice';
import Table from '../components/Table';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import LogOutIcon from '../assets/LogOutIcon';

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
      <nav className="App__nav">
        <button onClick={() => dispatch(userLogOut())}>
          Log Out <LogOutIcon />{' '}
        </button>
      </nav>
      <section className="App__content">
        <h1>Lista de Personas</h1>
        <Table peopleData={people} refreshPeople={handleGetPeople} />
        <ToastContainer />
      </section>
    </main>
  );
}

export default App;
