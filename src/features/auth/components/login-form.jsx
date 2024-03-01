/* eslint-disable max-len */
import React, {useState} from 'react';
import {login} from '../utils/service';
import {setCookie} from '@';
import {Input} from '@/components/ui/input';
import {Button} from '../../../components/ui/button';
import {Checkbox} from '@/components/ui/checkbox';
import {useEffect} from 'react';
import {SIGN_IN} from '../assets/strings';

function Loginform() {
  const [account, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(account, password);
      setCookie('accessToken', response.accessToken, 30);
    } catch (error) {
      console.error('failed', error);
    }
  };

  useEffect( () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const codeParam = urlSearchParams.get('code');
    if (codeParam) {
      const onGitHubCallback = async () => {
        const code = codeParam;
        try {
          const response = await axios.post('http://3.27.142.116:4000/bright-backend/api/auth/git',
              {code});
          console.log(response);
          return response.data;
        } catch (error) {
          console.error('failed', error);
        };
      };
      onGitHubCallback(codeParam);
    }
  }, []);

  return (
    <div className="flex flex-col space-y-2 text-center gap-3">
      <div className='flex flex-col space-y-2 text-center'>
        <h1 className="text-2xl font-semibold tracking-tight">
          {SIGN_IN.TITLE}
        </h1>
        <p className="text-sm text-muted-foreground">
          {SIGN_IN.DES}
        </p>
      </div>

      <form className='flex gap-3 flex-col'>
        <Input
          type="email"
          value={account}
          placeholder={'Account Email'}
          onChange={(e) => setEmail(e.target.value)}
          className='border border-black/30'
        />

        <Input
          type="password"
          value={password}
          placeholder={'Password'}
          onChange={(e) => setPassword(e.target.value)}
          className='border border-black/30'
        />

        <Button
          onClick={handleLogin}
          className="w-full h-8 rounded px-5 py-2.5 text-black text-sm bg-white font-medium  hover:bg-gray-200 text-center inline-flex items-center border border-gray-400">
            Sign in
        </Button>
      </form>

      <div className="flex items-center justify-between space-x-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember Me
          </label>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
          Forgot password?
        </a>
      </div>
    </div>
  );
}

export default Loginform;
