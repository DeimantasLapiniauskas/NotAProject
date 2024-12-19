import axios from "axios";
const url = import.meta.env.VITE_API_URL;
if (!url) {
  console.error("API URL is not defined! Check your .env file.");
}

export const getAll = async (endpoint) => {
  const res = await axios.get(`${url}/${endpoint}`);

  return res.data;
};
export const getOne = async (endpoint, id) => {
  const res = await axios.get(`${url}/${endpoint}/${id}`);

  return res.data;
}