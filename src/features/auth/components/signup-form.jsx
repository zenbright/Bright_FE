import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
// import {signup} from '../utils/service';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { PASSWORD_INPUT_VALIDATOR, SIGN_UP } from '../assets/strings';
import { SIGN_UP_VALIDATOR } from '../assets/strings';
import { BirthdayPicker } from './birthday-picker';

const formSchema = z
  .object({
    firstname: z.string({ required_error: SIGN_UP_VALIDATOR.NAME_REQUIRED }),
    lastname: z.string({ required_error: SIGN_UP_VALIDATOR.NAME_REQUIRED }),
    email: z.string({ required_error: SIGN_UP_VALIDATOR.EMAIL }).email(),
    password: z
      .string({ required_error: PASSWORD_INPUT_VALIDATOR.REQUIRED })
      .min(6, { message: PASSWORD_INPUT_VALIDATOR.SHORT })
      .max(50, { message: PASSWORD_INPUT_VALIDATOR.LONG }),
    confirm_password: z.string(PASSWORD_INPUT_VALIDATOR.RE_CONFIRM),
    dob: z.date().optional(),
  })
  .refine(data => data.password === data.confirm_password, {
    message: 'New password and confirm password must be match',
    path: ['confirm_password'],
  });

function Signupform() {
  const [account, setFname] = useState('');
  const [fullname, setLname] = useState('');
  const [dob, setDob] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  const handleSignUp = async e => {
    e.preventDefault();

    try {
      // const post = await signup(account, password, fullname, email, dob);
      console.log('success', e);
    } catch (error) {
      console.error('failed', error);
    }
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirm_password: '',
    },
  });

  const onSubmit = () => {
    console.log('Account created');
  };

  const onError = error => {
    console.log(error);
  };

  return (
    <div className="flex flex-col space-y-2 text-center">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {SIGN_UP.TITLE}
        </h1>
        <p className="text-sm text-muted-foreground">{SIGN_UP.DES}</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onError)}
          className="space-y-2"
        >
          <div className="flex flex-cols-2 gap-2">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      value={account}
                      placeholder={'First Name'}
                      onChange={e => setFname(e.target.value)}
                      className="border border-auth_form_border focus:border-transparent"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      value={fullname}
                      placeholder={'Last Name'}
                      onChange={e => setLname(e.target.value)}
                      className="border border-auth_form_border focus:border-transparent"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <BirthdayPicker date={dob} setDate={setDob} />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    value={email}
                    placeholder={'Email Address'}
                    onChange={e => setEmail(e.target.value)}
                    autoComplete={'email'}
                    className="border border-auth_form_border focus:border-transparent"
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
                    placeholder={'Password'}
                    onChange={e => setPassword(e.target.value)}
                    autoComplete={'new-password'}
                    className="border border-auth_form_border focus:border-transparent"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    value={cpassword}
                    placeholder={'Confirm your Password'}
                    onChange={e => setCPassword(e.target.value)}
                    className="border border-auth_form_border focus:border-transparent"
                    autoComplete={'new-password'}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
        <Button
          type="submit"
          variant="outline"
          className=" w-full h-9 rounded px-5 py-2.5 text-black text-sm bg-white font-medium hover:bg-gray-300 text-center inline-flex items-center border border-gray-400"
          onClick={handleSignUp}
        >
          {'Sign up'}
        </Button>
      </Form>
    </div>
  );
}

export default Signupform;
