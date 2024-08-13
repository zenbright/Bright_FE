import {useLoginMutation} from 'src/features/auth/api';

export const signup = async (account, password, fname, email, dateOfBirth) => {
  try {
    const body = {
      account,
      password,
      fname,
      email,
      dateOfBirth,
    };
    return {data}= useLoginMutation(body);
  } catch (error) {
    throw error.response.data;
  }
};

/* export const login = async (account, password) => {
  try {
    const response = await axiosPost('api/auth/bright/login', {
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
} */;
