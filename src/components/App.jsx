import React, { useState } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import { getAll } from '../services/api/person';
import { useSelector, useDispatch } from 'react-redux';
import { selectRefreshToken, userLogOut } from '../reducers/userSlice';

function App() {
  const accessToken = useSelector(selectRefreshToken);
  const dispatch = useDispatch();
  const [people, setPeople] = useState([]);

  const handleGetPeople = async () => {
    try {
      const res = await getAll(accessToken);
      console.log(res);
      setPeople(res);
    } catch (error) {
      dispatch(userLogOut());
    }
  };

  return (
    <div className="App">
      <h1>People List</h1>
      <Link to="/login">Home</Link>
      <button onClick={handleGetPeople}>Get List</button>
      {people.map((person) => (
        <p key={person.id}>{person.hobbie}</p>
      ))}
    </div>
  );
}

export default App;
