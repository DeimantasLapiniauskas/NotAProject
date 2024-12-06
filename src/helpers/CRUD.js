import axios from "axios";
const url = `http://localhost:5000`;

export const postOne = async (endpoint, data) => {
  const res = await axios.post(`${url}/${endpoint}`, data);

  return res.data;
};

export const getAll = async (endpoint) => {
  const res = await axios.get(`${url}/${endpoint}`);

  return res.data;
};

export const getOne = async (endpoint, id) => {
  const res = await axios.get(`${url}/${endpoint}/${id}`);

  return res.data;
};

export const patchOne = async (endpoint, id, data) => {
  const res = await axios.patch(`${url}/${endpoint}/${id}`, data);

  return res.data;
};

export const deleteOne = async (endpoint, id) => {
  const res = await axios.delete(`${url}/${endpoint}/${id}`);

  return res.data;
};
