import axios from 'axios';

const BE_ROUTE = 'http://13.54.70.178:4000/';

export const AXIOS_POST = async (endpoint = '', body = {}) => {
  const apiRoute = BE_ROUTE + endpoint;
  try {
    const response = await axios.post(apiRoute, body);
    return response.data;
  } catch (error) {
    throw error.response.data;
  };
};
