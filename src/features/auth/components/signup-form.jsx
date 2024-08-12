import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  PASSWORD_INPUT_VALIDATOR,
  SIGN_UP,
  SIGN_UP_VALIDATOR,
} from '../assets/strings';
import { signup } from '../utils/service';
import { BirthdayPicker } from './birthday-picker';
import {SYSTEM_ALERT} from '@/config/constants/strings.global';

const formSchema = z
  .object({
    firstname: z.string({ required_error: SIGN_UP_VALIDATOR.NAME_REQUIRED }),
    lastname: z.string({ required_error: SIGN_UP_VALIDATOR.NAME_REQUIRED }),
    account: z.string({ required_error: SIGN_UP_VALIDATOR.ACCOUNT }),
    password: z
      .string({ required_error: PASSWORD_INPUT_VALIDATOR.REQUIRED })
      .min(6, { message: PASSWORD_INPUT_VALIDATOR.SHORT })
      .max(50, { message: PASSWORD_INPUT_VALIDATOR.LONG }),
    confirm_password: z.string({
      required_error: PASSWORD_INPUT_VALIDATOR.RE_CONFIRM,
    }),
    dob: z.date().optional(),
  })
  .refine(data => data.password === data.confirm_password, {
    message: 'New password and confirm password must match',
    path: ['confirm_password'],
  });

function Signupform() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      account: '',
      password: '',
      confirm_password: '',
      dob: null,
    },
  });

  const handleSignUp = async data => {
    setLoading(true);
    try {
      const fullname = `${data.firstname} ${data.lastname}`;
      const DOB = new Date(data.dob);
      const formattedDob = DOB.toISOString().slice(0, 10);
      // console.log(data.account, data.password, fullname, formattedDob)
      const response = await signup(data.account, data.password, fullname, formattedDob);
      if(response.status === 200){
        toast({
          className: 'text-green-700',
          title: SYSTEM_ALERT.SIGNUP_SUCCESS_TITLE ,
        });
      } else if (response.status === 400) {
        console.log(response.data);
        toast({
          className: 'text-red-600',
          title: SYSTEM_ALERT.SIGNUP_INVALID_CREDENTIALS,
        });
      } else if (response.status === 500) {
        toast({
          className: 'text-red-600',
          title: SYSTEM_ALERT.SIGNUP_SERVER_ERROR,
        });
      }
    } catch (error) {
      toast({
        className: 'text-red-600',
        title: SYSTEM_ALERT.SIGNUP_FAILED_TITLE,
      });
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = data => {
    handleSignUp(data);
  };

  const onError = errors => {
    console.log(errors);
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
                      placeholder={'First Name'}
                      className="border border-auth_form_border focus:border-transparent"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.firstname?.message}
                  </FormMessage>
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
                      placeholder={'Last Name'}
                      className="border border-auth_form_border focus:border-transparent"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.lastname?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>

          <BirthdayPicker
            date={form.watch('dob')}
            setDate={date => form.setValue('dob', date)}
          />

          <FormField
            control={form.control}
            name="account"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder={'Account name'}
                    autoComplete={'account'}
                    className="border border-auth_form_border focus:border-transparent"
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.account?.message}
                </FormMessage>
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
                    placeholder={'Password'}
                    autoComplete={'new-password'}
                    className="border border-auth_form_border focus:border-transparent"
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.password?.message}
                </FormMessage>
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
                    placeholder={'Confirm your Password'}
                    className="border border-auth_form_border focus:border-transparent"
                    autoComplete={'confirm-password'}
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.confirm_password?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="outline"
            className="w-full h-9 rounded px-5 py-2.5 text-black text-sm bg-white font-medium hover:bg-gray-300 text-center inline-flex items-center border border-gray-400"
            disabled={loading}
          >
            {loading && <Loader2 className="mr-3 animate-spin h-4 w-4" />}
            {loading ? 'Signing up...' : 'Sign Up'}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Signupform;
