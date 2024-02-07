import {axiosPost} from '@/config/service/axios.js';

const login = async (account, password) => {
  try {
    const response = await axiosPost('api/auth/bright/login', {account, password});
    return response.payload;
  } catch (error) {
    console.error(error);
  }
};

export default login;
