import {axiosPost} from '@';

const login = async (account, password) => {
  try {
    const response = await axiosPost('bright-backend/api/auth/bright/login', {account, password});
    return response.data;
  } catch (error) {
    console.error(error);
  };
};

export default login;
