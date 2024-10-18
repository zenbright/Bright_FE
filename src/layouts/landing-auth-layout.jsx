import { Toaster } from '@/components/ui/toaster';
import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export const LandingAuthLayout = () => {


  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');
  useEffect(() => {
    // Nếu đã đăng nhập và không phải đang ở trang /landing, chuyển hướng đến dashboard
    if (token && location.pathname === '/') {
      navigate('/user/dashboard');
    }
  }, [token, location, navigate]);

  return (
    <div>
      <Outlet />
      <Toaster />
    </div>
  );
};
