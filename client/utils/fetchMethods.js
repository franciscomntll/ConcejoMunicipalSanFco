import axios from "axios";
const instance = axios.create({ baseURL: "http://localhost:4000" });
export const fetchQuery = async (route, method) => {
  try {
    return await instance[method](route);
  } catch (error) {
    console.log(error);
  }
};
