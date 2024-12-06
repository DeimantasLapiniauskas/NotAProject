import axios from "axios";
const url = "/data/data.json";
export const getAllData = async () => {
  const response = await axios.get(url);
  // console.log(response.data.videos);
  return response.data.videos;
  
};

export const getOneData = async (id) => {
const response = await axios.get(url+'/'+id);
return response.data;
}