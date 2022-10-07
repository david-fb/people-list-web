import axios from 'axios';
import { END_POINTS } from '.';

export const logIn = async (username, password) => {
  console.log(END_POINTS.logIn());
  const res = await axios.post(END_POINTS.logIn(), { username, password });
  return res.data;
};
