import {useEffect, useRef, useState} from 'react';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {LinkIcon} from 'lucide-react';
import {CalendarIcon} from '@radix-ui/react-icons';
import {format} from 'date-fns';
import {cn} from '@/lib/utils';
import {Button} from '@/components/ui/button';
import {Calendar} from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import userImage from '../asset/cat.jpg';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import Modal from './modal';
import {PROFILE} from '../test/data/strings';

const formShcema = z.object({
  username: z.string().trim()
      .min(2, {message: PROFILE.SHORT})
      .max(50, {message: PROFILE.USERNAME_LONG}),
  nickname: z.string().trim()
      .max(50, {message: PROFILE.NICKNAME_LONG}),
  bio: z.string()
      .min(0, {message: PROFILE.BIO_SHORT})
      .max(200, {message: PROFILE.BIO_LONG}),
  pronouns: z.string(),
  url: z.string()
      .optional(),
  social_account1: z.string().optional(),
  social_account2: z.string().optional(),
  social_account3: z.string().optional(),
  social_account4: z.string().optional(),
  email_address: z.string()
      .email(),
  phone_number: z.number()
      .optional(),
  country: z.string(),
  dob: z.date(),
});

function Profile() {
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState(Date);
  const [modalOpen, setModalOpen] = useState(false);

  const ref = useRef(null);
  const form = useForm({
    resolver: zodResolver(formShcema),
    defaultValues: {
      username: '',
      nickname: '',
    },
  });

  const onSubmit = () => {
    console.log('Submitted');
  };

  const onError = (error) => {
    console.log(error);
  };

  useEffect(() => {
    console.log(ref);
  }, []);

  return (
    <div className="w-[75vw] overflow-auto no-scrollbar">
      <div className="mx-3 text-lg font-bold p-2 border-b-[1px] border-slate-300 ">
        {'Public Profile'}
      </div>

      <div className='flex'>
        <div className="w-9/12 px-5 py-2 ">
          <Form {...form}>
            <form ref={ref} onSubmit={form.handleSubmit(onSubmit, onError)}>
              <div id="name-container" className="flex gap-7">
                {/* Username */}
                <FormField
                  control={form.control}
                  name="username"
                  render={({field}) => (
                    <FormItem className="w-5/12">
                      <FormLabel className="font-semibold text-md">{'Username'}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Username" {...field}
                          className="h-9 focus:border-transparent" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Nickname */}
                <FormField
                  control={form.control}
                  name="nickname"
                  render={({field}) => (
                    <FormItem className="w-5/12">
                      <FormLabel className="font-semibold text-md">{'Nickname'}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nickname" {...field}
                          className="h-9 focus:border-transparent" />
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
              </div>

              <div id="bio" className="mt-3 w-full" >
                {/* Bio */}
                <FormField
                  control={form.control}
                  name="bio"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-md">{'Bio'}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a little about yourself"
                          className="w-8/12 resize-none focus:border-transparent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div id="url" className="mt-3 w-full">
                {/* URL */}
                <FormField
                  control={form.control}
                  name="url"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel className="text-md font-semibold">{'URL'}</FormLabel>
                      <FormControl>
                        <Input className="w-8/12 h-9 focus:border-transparent" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div id="social-account" className="mt-3 w-full">
                {/* Social Accounts */}
                <FormField
                  control={form.control}
                  name="social_account"
                  render={({field}) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="font-semibold text-md">{'Social Account'}</FormLabel>

                      <FormControl className="flex flex-row gap-y-1 gap-2 pt-1">
                        <div>
                          <LinkIcon className="w-5 h-5 mt-2 mr-2" />
                          <Input
                            placeholder="Link to social profile"
                            className="w-10/12 h-9 focus:border-transparent"
                            {...field} />
                        </div>
                      </FormControl>

                      <FormControl className="flex flex-row gap-y-2 gap-2 pt-1">
                        <div>
                          <LinkIcon className="w-5 h-5 mt-2 mr-2" />
                          <Input
                            placeholder="Link to social profile"
                            className="w-10/12 h-9 focus:border-transparent"
                            {...field} />
                        </div>
                      </FormControl>

                      <FormControl className="flex flex-row gap-y-2 gap-2 pt-1">
                        <div>
                          <LinkIcon className="w-5 h-5 mt-2 mr-2" />
                          <Input
                            placeholder="Link to social profile"
                            className="w-10/12 h-9 focus:border-transparent"
                            {...field} />
                        </div>
                      </FormControl>

                      <FormControl className="flex flex-row gap-y-2 gap-2 pt-1">
                        <div>
                          <LinkIcon className="w-5 h-5 mt-2 mr-2" />
                          <Input
                            placeholder="Link to social profile"
                            className="w-10/12 h-9 focus:border-transparent"
                            {...field} />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div id="personal" className="my-3 mt-3 border-t-[1px] border-slate-300 text-lg font-semibold">
                {'Personal Information'}
              </div>

              <div id="personal-container-1" className="w-full flex flex-row gap-7 mb-3">
                {/* Email Address */}
                <div id="email_address" className="w-5/12">
                  <FormField
                    control={form.control}
                    name="email_address"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-md">{'Email Address'}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Email Address"
                            type="email"
                            className="h-9 focus:border-transparent"
                            {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Country */}
                <div id='country' className="w-5/12">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-md">{'Country'}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValues={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-8/12 h-9 focus:border-transparent">
                              <SelectValue placeholder="Select Your Country" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="vn-VN">{'Vietnam'}</SelectItem>
                            <SelectItem value="us-US">{'United State'}</SelectItem>
                            <SelectItem value="en-EN">{'England'}</SelectItem>
                            <SelectItem value="jp-JP">{'Japan'}</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div id="personal-content-2" className="flex flex-row w-full gap-6">
                <div id="phone_number" className="w-5/12">
                  <FormField
                    control={form.control}
                    name="phone_number"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-md">{'Phone number'}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Phone number"
                            type="number"
                            className="h-9 focus:border-transparent"
                            {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <div id='date-of-birth'>
                  <FormField
                    control={form.control}
                    name="dob"
                    render={({field}) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="font-semibold text-md">{'Date of birth'}</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={'outline'}
                                className={cn(
                                    'w-[240px] h-9 pl-3 text-left font-normal',
                                    !field.value && 'text-muted-foreground',
                                )}
                              >
                                {field.value ? (format(field.value, 'PPP') ) : ( <span>{'Pick a date'}</span> )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>

                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date('1900-01-01')
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button className="mt-3 mb-3 h-9">Update Profile</Button>
            </form>
          </Form>
        </div>

        <div className="w-3/12 relative z-0">
          <button className="relative w-[200px] h-[200px] rounded-full text-white overflow-hidden group mt-10"
            onClick={() => setModalOpen(true)}>
            <img src={userImage} alt="" className='h-50 w-50 rounded-full absolute inset-0 object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-80' />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-black bg-opacity-50">
              <span className="text-xl">{'Edit'}</span>
            </div>
          </button>
        </div>

        {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
      </div>
    </div>
  );
}

export default Profile;
