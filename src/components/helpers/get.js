import axios from "axios";
const url = "http://localhost:5000/videos";
export const getAllData = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const getOneData = async (id) => {
  const response = await axios.get(url + "/" + id);
  return response.data;
};
