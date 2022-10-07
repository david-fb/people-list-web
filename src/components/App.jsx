import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import { getAll } from '../services/api/person';
import { useSelector, useDispatch } from 'react-redux';
import { selectRefreshToken, userLogOut } from '../reducers/userSlice';
import Table from './Table';

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
    <div className="App">
      <h1>People List</h1>
      <Link to="/login">Home</Link>
      <button onClick={handleGetPeople}>Get List</button>
      <Table peopleData={people} />
    </div>
  );
}

export default App;
