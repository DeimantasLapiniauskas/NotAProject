import axios from "axios";
const url = "../../../data.json";
export const getAllData = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const getOneData = async (id) => {
const response = await axios.get(url+'/'+id);
return response.data;
}