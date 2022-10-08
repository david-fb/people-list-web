import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../services/api/auth';
import { userLogIn } from '../reducers/userSlice';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          password:
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Log In</button>
      </form>
    </div>
  );
}
