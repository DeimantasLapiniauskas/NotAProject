import axios from "axios";
import { url } from "../components/url";
export const getAllData = async () => {
  const response = await axios.get(url());

  return response.data;
};

export const getOneData = async (id) => {
  const response = await axios.get(url());
  console.log(response.data[id]);
  
 return await response.data[id];
};
