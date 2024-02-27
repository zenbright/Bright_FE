import {Button} from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import {Input} from '@/components/ui/input';
import PropTypes from 'prop-types';
import {TASK_CREATION_DES, TITLE_INPUT_VALIDATOR, TITLE_DES_INPUT_VALIDATOR, END_DATE_INPUT_VALIDATOR} from '../../assets/strings';
import {differenceInDays, format} from 'date-fns';

// Form
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {Calendar} from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import {CalendarPlus} from 'lucide-react';
import {Textarea} from '@/components/ui/textarea';
import {useState} from 'react';

const formSchema = z.object({
  title: z.string().trim()
      .min(2, {message: TITLE_INPUT_VALIDATOR.SHORT})
      .max(50),
  description: z.string()
      .min(0, {message: TITLE_DES_INPUT_VALIDATOR.SHORT})
      .max(200, {message: TITLE_DES_INPUT_VALIDATOR.LONG}),
  startDate: z.date({
    required_error: 'A start date is required.',
  }),
  endDate: z.date().optional(),
}).refine((data) => {
  if (data.endDate !== undefined && data.endDate !== null) {
    return differenceInDays(data.endDate, data.startDate) >= 0;
  }
  return true;
}, {
  message: END_DATE_INPUT_VALIDATOR.ERROR,
});


const TaskCreationForm = ({isCreateNewTask, setIsCreateNewTask, createTask, colId}) => {
  const [endDateError, setEndDateError] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      startDate: new Date(),
    },
  });

  const onSubmit = (values) => {
    createTask(colId, values.title, values.description, values.startDate, values.endDate);
    setIsCreateNewTask(false);
  };

  const onError = (error) => {
    setEndDateError(error[''].message);
  };

  const handleEndDateChange = () => {
    setEndDateError(undefined);
  };

  return (
    <Dialog open={isCreateNewTask} onOpenChange={setIsCreateNewTask}>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Create new task</DialogTitle>
          <DialogDescription>
            {TASK_CREATION_DES}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit, onError)} className=" space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Title *</FormLabel>
                  <FormControl>
                    <Input placeholder="Design homepage" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea className="max-h-40" placeholder="Follow design on Figma" {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='flex justify-between w-full gap-2'>
              <FormField
                control={form.control}
                name="startDate"
                render={({field}) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Start Date *</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
                          >
                            {field.value ? (
                  format(field.value, 'PPP')
                ) : (
                  <span>Pick a date</span>
                )}
                            <CalendarPlus className="ml-3 h-4 w-4 opacity-50" />
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
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="endDate"
                render={({field}) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>End Date (Optional)</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'} onClick={() => handleEndDateChange()}
                            className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
                          >
                            {field.value ? (
                  format(field.value, 'PPP')
                ) : (
                  <span>Pick a date</span>
                )}
                            <CalendarPlus className="ml-3 h-4 w-4 opacity-50" />
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
                    {endDateError && (
                      <FormMessage error="true">{endDateError}</FormMessage>
                    )}
                  </FormItem>
                )}
              />
            </div>
            <Button className='w-full' type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default TaskCreationForm;

TaskCreationForm.propTypes = {
  isCreateNewTask: PropTypes.bool,
  setIsCreateNewTask: PropTypes.func,
  createTask: PropTypes.func,
  colId: PropTypes.string,
};
