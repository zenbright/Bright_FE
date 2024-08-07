import { axiosPost } from '../../../config/service/axios.ts';

export const signup = async (account, password, fname, dateOfBirth) => {
  try {
    const response = await axiosPost('auth/bright/signup', {
      account,
      password,
      fname,
      dateOfBirth,
    });
    console.log(response);
    return response.data;

  } catch (error) {
    if (error.response) {
      throw error.response;
    } else {
      throw new Error('Unexpected error');
    }
  }
};

export const login = async (account, password) => {
  try {
    const response = await axiosPost('auth/bright/login', {
      account,
      password,
    });

    const userId = response.payload.userData._id;
    const deviceToken = await getDeviceToken();

    await axiosPost('api/auth/save-device-token', {
      deviceToken,
      userId,
    });

    return response.payload;
  } catch (error) {
    console.error(error);
  }
};
