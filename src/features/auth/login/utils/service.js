import { axiosPost } from "@/config/service/axios.js";

const login = async (account, password) => {
  try {
    const response = await axiosPost("bright-backend/api/auth/bright/login", {
      account,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getCookie = (name) => {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const setCookie = (name, value, days) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
};

// Get the access token from the cookie
const accessToken = getCookie('accessToken');

export default login;
