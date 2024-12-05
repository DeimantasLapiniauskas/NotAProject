import axios from "axios";
import { url } from "../components/url";
const postData = async (input) => {
  const response = await axios.post(url(), input);
  return response.data;
};
export default postData;
