import axios from 'axios';

const BE_BASE_PATH = 'http://localhost:4080/bright-backend/api/';

export const axiosPost = async (endpoint = '', body = {}) => {
  const apiRoute = BE_BASE_PATH + endpoint;
  try {
    const response = await axios.post(apiRoute, body);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
