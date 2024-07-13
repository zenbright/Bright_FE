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
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { z } from 'zod';

import { Button } from '../../../components/ui/button';
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
  const [account, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async e => {
    e.preventDefault();
    try {
      // set login state to true
      dispatch(setLoginStatus(true));
    } catch (error) {
      console.error('failed', error);
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
                    onChange={e => setEmail(e.target.value)}
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
                    onChange={e => setPassword(e.target.value)}
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
          >
            {'Sign in'}
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
