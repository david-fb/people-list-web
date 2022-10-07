import axios from 'axios';
import { END_POINTS } from '.';

export const logIn = async (username, password) => {
  try {
    const res = await axios.post(END_POINTS.logIn(), { username, password });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const refreshToken = async (token) => {
  if (!token) throw new Error('No Session');
  try {
    const res = await axios.post(END_POINTS.refreshToken(), { refresh: token });
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error('Token expired!');
  }
};
