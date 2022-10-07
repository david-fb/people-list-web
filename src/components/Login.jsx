import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../services/api/auth';
import { userLogIn, userLogOut, selectIsUserLoggedIn } from '../reducers/userSlice';
import { Link } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('test');
  const [password, setPassword] = useState('test');

  const isLoggedIn = useSelector(selectIsUserLoggedIn);
  const dispatch = useDispatch();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const res = await logIn(username, password);
    dispatch(
      userLogIn({
        accessToken: res.access,
        refreshToken: res.refresh,
      })
    );
    console.log(res.access);
    console.log(isLoggedIn);
  };

  return (
    <div>
      <Link to="/">Home</Link>
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
      <p>{username}</p>
      <p>{password}</p>
      <p>isLoggedIn: {String(isLoggedIn)}</p>
      <button onClick={() => dispatch(userLogOut())}>Log Out</button>
    </div>
  );
}
