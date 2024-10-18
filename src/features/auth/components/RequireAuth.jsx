import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

// Function to decode the JWT token
const decodeToken = (token) => {
  try {
    const base64Url = token.split('.')[1]; // JWT payload is in the second part
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
};

// Function to check if the token is expired
const isTokenExpired = (token) => {
  const decoded = decodeToken(token);
  if (!decoded || !decoded.exp) {
    return true; // If there's no expiration, treat it as expired
  }
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  return decoded.exp < currentTime; // Compare token's expiration time with current time
};

// Protect routes by requiring authentication
export const RequireAuth = () => {
  // Get the token from localStorage
  const token = localStorage.getItem('token');
  // console.log(token);
  // Get the current location
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!token || isTokenExpired(token)) {
      navigate('/auth', { state: { from: location }, replace: true });
    } 
  }, [token, location, navigate]);

  // Render the protected route
  return token ? <Outlet /> : null;
};
