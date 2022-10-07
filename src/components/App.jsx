import React from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>People List</h1>
      <Link to="/login">Home</Link>
    </div>
  );
}

export default App;
