import React from 'react';
import {signup} from '../utils/service';
import {useState} from 'react';
import {BirthdayPicker} from './birthday-picker';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {SIGN_UP} from '../assets/strings';

function Signupform() {
  const [account, setFname] = useState('');
  const [fullname, setLname] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const post = await signup(account, password, fullname, email, dob);
      console.log('success', post);
    } catch (error) {
      console.error('failed', error);
    }
  };

  return (
    <div className='flex flex-col space-y-2 text-center' >
      <div className='flex flex-col space-y-2 text-center'>
        <h1 className="text-2xl font-semibold tracking-tight">
          {SIGN_UP.TITLE}
        </h1>
        <p className="text-sm text-muted-foreground">
          {SIGN_UP.DES}
        </p>
      </div>

      <div className='flex flex-cols-2 gap-2'>
        <Input type="text"
          value = {account}
          placeholder = {'First Name'}
          onChange = {(e) => setFname(e.target.value)}
          className='border border-black/30'
        />

        <Input type="text"
          value = {fullname}
          placeholder = {'Last Name'}
          onChange = {(e) => setLname(e.target.value)}
          className='border border-black/30'
        />
      </div>

      <BirthdayPicker date={dob} setDate={setDob} />

      <Input type="email"
        value = {email}
        placeholder = {'Email Address'}
        onChange = {(e) => setEmail(e.target.value)}
        className='border border-black/30'
      />

      <Input type="password"
        value = {password}
        placeholder = {'Password'}
        onChange = {(e) => setPassword(e.target.value)}
        className='border border-black/30'
      />

      <Input type="password"
        value = {cpassword}
        placeholder = {'Confirm your password'}
        onChange = {(e) => setCPassword(e.target.value)}
        className='border border-black/30'
      />

      <Button
        variant="outline"
        className=" w-full h-9 rounded px-5 py-2.5 text-black text-sm bg-white font-medium hover:bg-gray-300 text-center inline-flex items-center border border-gray-400"
        onClick={handleSignUp}
      >
        {'Sign up'}
      </Button>
    </div>
  );
}

export default Signupform;
