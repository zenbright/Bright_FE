import axios from 'axios';

const BE_BASE_PATH = 'http://127.0.0.1:4000/api/v1';

// export const axiosPost = async (endpoint = '', body = {}) => {
//   const apiRoute = BE_BASE_PATH + endpoint;
//   try {
//     const response = await axios.post(apiRoute, body);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

export default axios.create({
  baseURL: BE_BASE_PATH
});

export const axiosPrivate = axios.create({
  baseURL: BE_BASE_PATH,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});
