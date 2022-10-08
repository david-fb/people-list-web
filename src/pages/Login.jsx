import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../services/api/auth';
import { userLogIn } from '../reducers/userSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const res = await logIn(username, password);
    dispatch(
      userLogIn({
        accessToken: res.access,
        refreshToken: res.refresh,
      })
    );
    navigate('/');
  };

  return (
    <main className="Login">
      <form className="Login__form" onSubmit={handleSubmit}>
        <h1>Inicia sesión</h1>
        <label>
          Usuario:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Contraseña:
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Iniciar sesión</button>
      </form>
    </main>
  );
}
