/* eslint-disable max-len */
import React from 'react';
import InputComponent from './InputComponent';
import LoginButton from './LoginButton';
import GithubButton from './GitHubButton';
import GoogleButton from './googleButton';
import FacebookButton from './FacebookButton';
import login from '../utils/service';
import {useState} from 'react';

function Loginform() {
  const [account, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const post = await login(account, password);
      console.log('success', post);
    } catch (error) {
      console.error('failed', error);
    }
  };

  return (
    <div className='flex flex-col space-y-2 text-center' >
      <form>
        <InputComponent type="email"
          value = {account}
          placeholder = {'Account Email'}
          onChange = {(e) => setEmail(e.target.value)}
        />
        <InputComponent type="password"
          value = {password}
          placeholder = {'Password'}
          onChange = {(e) => setPassword(e.target.value)}
        />
        <div className="">
          <LoginButton onClick={handleLogin}/>
        </div>
      </form>
      <div className="flex items-center justify-between space-x-2">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""
            />
          </div>
          <div className="ml-2 text-sm ">
            <label htmlFor="remember" className="text-gray-700 font-medium dark:text-gray-300">Remember me</label>
          </div>
        </div>
        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
          </span>
        </div>
      </div>
      <div>
        <GithubButton />
        <GoogleButton />
        <FacebookButton />
      </div>
    </div>
  );
}

export default Loginform;
