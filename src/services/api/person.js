import { END_POINTS } from '.';
import { refreshToken } from './auth';
import axios from 'axios';

export const getAll = async (token) => {
  const { access } = await refreshToken(token);
  const res = await axios.get(END_POINTS.person.getAll(), {
    headers: { Authorization: `Bearer ${access}` },
  });
  return res.data;
};

export const getById = async (token, id) => {
  const { access } = await refreshToken(token);
  const res = await axios.get(END_POINTS.person.getById(id), {
    headers: { Authorization: `Bearer ${access}` },
  });
  return res.data;
};

export const updateById = async (token, id, changes) => {
  const { access } = await refreshToken(token);
  const res = await axios.post(
    END_POINTS.person.updateById(id),
    { changes },
    {
      headers: { Authorization: `Bearer ${access}` },
    }
  );
  return res.data;
};

export const deleteById = async (token, id) => {
  const { access } = await refreshToken(token);
  const res = await axios.delete(END_POINTS.person.deleteById(id), {
    headers: { Authorization: `Bearer ${access}` },
  });
  return res.status;
};
