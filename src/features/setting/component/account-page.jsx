import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {ACCOUNT} from '../test/data/strings';


const formShcema = z.object({
  old_password: z.string().trim()
      .min(6),
  new_password: z.string({
    required_error: ACCOUNT.NEW_PASSWORD_REQUIRED,
  })
      .trim()
      .min(6),
  re_confirm_password: z.string({
    required_error: ACCOUNT.CONFIRM_PASSWORD_REQUIRED,
  })
      .trim()
      .min(6),
}).refine((data) => data.new_password === data.re_confirm_password, {
  message: 'New password and confirm password must be match',
  path: ['re_confirm_password'],
});

function Account() {
  const form = useForm({
    resolver: zodResolver(formShcema),
    defaultValues: {
      old_password: 'mudoker',
      new_password: 'mujoker123',
      re_confirm_password: 'mujoker123',
    },
  });

  const onSubmit = () => {
    console.log('Submitted');
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <div className="container-ns flex flex-col w-[75vw] overflow-auto">
      <div className="z-30 mx-3 text-lg font-bold top-0 p-2 border-b-[1px] border-slate-300 group sticky bg-white">
                Account
      </div>
      <div className="flex flex-col">
        <div className="m-3 border-b-[1px] p-2">
          <p className="font-semibold">Change Password</p>
        </div>
        <div className="mx-3 p-2 space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit({onSubmit, onError})}>
              <FormField
                control={form.control}
                name="old_password"
                render={({field}) => (
                  <FormItem className="flex flex-col">
                    <div className="flex flex-row items-center justify-between w-[40vw] mt-2">
                      <FormLabel className="font-semibold text-base">Old password</FormLabel>
                      <FormControl>
                        <Input placeholder="Old password" {...field} type="password" className="w-[350px]" />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="new_password"
                render={({field}) => (
                  <FormItem className="flex flex-col">
                    <div className="flex flex-row items-center justify-between w-[40vw] mt-2">
                      <FormLabel className="font-semibold text-base">New password</FormLabel>
                      <FormControl>
                        <Input placeholder="New password" {...field} type="password" className="w-[350px]" />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="re_confirm_password"
                render={({field}) => (
                  <FormItem className="flex flex-col">
                    <div className="flex flex-row items-center justify-between w-[40vw] mt-2">
                      <FormLabel className="font-semibold text-base">Confirm new password</FormLabel>
                      <FormControl>
                        <Input placeholder="Confirm new password" {...field} type="password" className="w-[350px]" />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="mt-3">Update</Button>
            </form>
          </Form>
        </div>
        <div className="m-3 border-b-[1px] p-2">
          <p className="font-semibold text-rose-600">Delete Account</p>
        </div>
        <div className="mx-3 p-2 space-y-4">
          <p>Once you delete your account, there is no going back. Please be certain.</p>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-rose-600 hover:bg-rose-500">Delete your account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your
                                    account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}

export default Account;
