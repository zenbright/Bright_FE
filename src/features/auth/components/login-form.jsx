/* eslint-disable max-len */
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { setTheme } from '@/features/theme/utils/themeSlice';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { Button } from '../../../components/ui/button';
import axios from '../../../config/service/axios';
import useAuth from '../../../hooks/useAuth';
import { SIGN_IN } from '../assets/strings';
import { PASSWORD_INPUT_VALIDATOR } from '../assets/strings';
import { setLoginStatus } from '../utils/authSlice';

const formShcema = z.object({
  email: z.string({ required_error: SIGN_IN.REQUIRED }).email(),
  password: z
    .string({ required_error: PASSWORD_INPUT_VALIDATOR.REQUIRED })
    .min(6, { message: PASSWORD_INPUT_VALIDATOR.SHORT })
    .max(50, { message: PASSWORD_INPUT_VALIDATOR.LONG }),
  remember: z.boolean().default(false).optional(),
});

function Loginform() {
  const dispatch = useDispatch();
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  // login button spinner
  const [spinning, setSpinning] = useState(false);

  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = async e => {
    e.preventDefault();
    try {
      setSpinning(true);
      const response = await axios({
        method: 'post',
        url: '/auth/bright/login',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          account: account,
          password: password, // This is the body part
        },
      });
      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.role;
      setAccount('');
      setPassword('');
      setAuth({ account, password, roles, accessToken });

      navigate(from, { replace: true });
      // set login state to true
      dispatch(setLoginStatus(true));
      setTimeout(() => {
        setSpinning(false);
      }, 2000);
    } catch (error) {
      console.error('failed', error);
      setSpinning(false);
    }
  };

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const codeParam = urlSearchParams.get('code');
    if (codeParam) {
      const onGitHubCallback = async () => {
        const code = codeParam;
        try {
          const response = await axios.post(
            'http://3.27.142.116:4000/bright-backend/api/auth/git',
            { code }
          );
          console.log(response);
          return response.data;
        } catch (error) {
          console.error('failed', error);
        }
      };
      onGitHubCallback(codeParam);
    }
  }, []);

  const form = useForm({
    resolver: zodResolver(formShcema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = () => {
    console.log('Sign in complete');
  };

  const onError = error => {
    console.log(error);
  };

  return (
    <div className="flex flex-col space-y-2 text-center gap-3">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {SIGN_IN.TITLE}
        </h1>

        <p className="text-sm text-muted-foreground">{SIGN_IN.DES}</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onError)}
          className="flex gap-3 flex-col"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    value={account}
                    placeholder={'Account Email'}
                    autoComplete="email"
                    onChangeCapture={e => setAccount(e.currentTarget.value)}
                    className="border border-black/20 focus:border-transparent"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    value={password}
                    autoComplete="current-password"
                    placeholder={'Password'}
                    onChangeCapture={e => setPassword(e.currentTarget.value)}
                    className="border border-black/30 focus:border-transparent"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full h-8 rounded px-5 py-2.5 text-black text-sm bg-white font-medium  hover:bg-gray-200 text-center inline-flex items-center border border-gray-400"
            onClick={handleLogin}
            disabled={spinning}
          >
            {spinning ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span className="please-wait-text">Please wait...</span>
              </>
            ) : (
              'Sign in'
            )}
          </Button>
        </form>

        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <FormField
              control={form.control}
              name="remember"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Remember me
                  </FormLabel>

                  <FormItem>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                </FormItem>
              )}
            />
          </div>

          <a
            href="#"
            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            {'Forgot password?'}
          </a>
        </div>
      </Form>
    </div>
  );
}

export default Loginform;
