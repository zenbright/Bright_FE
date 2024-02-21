import React from 'react';
import SignupButton from './SignupButton';
import {FacebookButton, GithubButton, GoogleButton, InputComponent} from '../..';
import signup from '../utils/service';
import {useState} from 'react';
import {DatePickerDemo} from './date';

function Signupform() {
  const [account, setFname] = useState('');
  const [fullname, setLname] = useState('');
  const [date] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const post = await signup(account, password, fullname, email, date);
      console.log('success', post);
    } catch (error) {
      console.error('failed', error);
    }
  };

  return (
    <div className='flex flex-col space-y-2 text-center' >
      <div className='flex flex-cols-2 gap-2'>
        <InputComponent type="text"
          value = {account}
          placeholder = {'First Name'}
          onChange = {(e) => setFname(e.target.value)}
        />
        <InputComponent type="text"
          value = {fullname}
          placeholder = {'Last Name'}
          onChange = {(e) => setLname(e.target.value)}
        />
      </div>
      <DatePickerDemo />
      <InputComponent type="email"
        value = {email}
        placeholder = {'Email Address'}
        onChange = {(e) => setEmail(e.target.value)}
      />
      <InputComponent type="password"
        value = {password}
        placeholder = {'Password'}
        onChange = {(e) => setPassword(e.target.value)}
      />
      <InputComponent type="password"
        value = {cpassword}
        placeholder = {'Confirm your password'}
        onChange = {(e) => setCPassword(e.target.value)}
      />
      <div className="">
        <SignupButton onClick={handleSignUp}/>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
                        Or sign up with
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

export default Signupform;
