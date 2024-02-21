import { axiosPost } from "@/config/service/axios.js";
import { getDeviceToken } from "../getDeviceToken";

const login = async (account, password) => {
  try {
    const response = await axiosPost("api/auth/bright/login", {
      account,
      password,
    });
    const userId = response.payload.userData._id;
    const deviceToken = await getDeviceToken();
    await axiosPost("api/auth/save-device-token", {
      deviceToken,
      userId,
    });
    return response.payload;
  } catch (error) {
    console.error(error);
  }
};

export default login;
