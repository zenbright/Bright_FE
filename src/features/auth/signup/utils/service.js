import {axiosPost} from '@/config/service/axios.js';

const signup = async (account, password, fname, email, dateOfBirth) => {
  try {
    const response = await axiosPost('api/auth/bright/signup',
        {account, password, fname, email, dateOfBirth});
    return response.data;
  } catch (error) {
    throw error.response.data;
  };
};

export default signup;
