import {
  TASK_CREATION_DES,
  TITLE_INPUT_VALIDATOR,
  TITLE_DES_INPUT_VALIDATOR,
  END_DATE_INPUT_VALIDATOR,
  TAGS_INPUT_VALIDATOR,
} from '../../assets/strings';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import PropTypes from 'prop-types';
import {differenceInDays, format} from 'date-fns';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {Calendar} from '@/components/ui/calendar';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {CreatableMultiSelectDropdown} from './creatable-multiselect-menu';
import {CalendarPlus} from 'lucide-react';
import {Textarea} from '@/components/ui/textarea';
import {useState} from 'react';
import {useEffect} from 'react';
import {Task, TaskTag} from '../../utils/class';

// Define form schema
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
}, {message: END_DATE_INPUT_VALIDATOR.ERROR});

const TaskCreationForm = ({isOpen, setIsOpen, onSubmit, colId, task, onDelete}) => {
  const [endDateError, setEndDateError] = useState(null);
  const [tagError, setTagError] = useState(null);
  const initialSelectedTags = task ? task.tags.map((tag) => TaskTag.toString(tag)) : [];
  const [selectedTags, setSelectedTags] = useState(initialSelectedTags);

  // Create form hook with schema
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: task ? task.title : '',
      description: task ? task.des ? task.des : '' : '',
      startDate: task ? task.startDate : new Date(),
    },
  });

  // Reset empty tag error on selected
  useEffect(() => {
    setTagError(null);
  }, [selectedTags]);

  // Handle form submit
  const onValid = (values) => {
    // Constraint: must be selected at least 1 tag
    if (selectedTags.length === 0) {
      setTagError(TAGS_INPUT_VALIDATOR.SHORT);
      return;
    }

    // Create new or edit existing
    if (!task) {
      onSubmit(colId, values.title, values.description, values.startDate, values.endDate, selectedTags);
    } else {
      task.update(values.title, values.description, values.startDate, values.endDate, selectedTags);
    }

    setIsOpen(false);
  };

  // Handle failed to submit
  const onInValid = (error) => {
    console.log(error);

    // If error related to endDate
    if (error[''] && error[''].message) {
      setEndDateError(error[''].message);
    }
  };

  // Reset error on date changed
  const handleEndDateChange = () => {
    setEndDateError(undefined);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Create new task</DialogTitle>
          <DialogDescription>
            {TASK_CREATION_DES}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onValid, onInValid)} className=" space-y-4">
            {/* Task title */}
            <FormField
              control={form.control}
              name="title"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Title *</FormLabel>
                  <FormControl>
                    <Input placeholder="Design homepage" {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Task Description */}
            <FormField
              control={form.control}
              name="description"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea className="max-h-40" placeholder="Follow design on Figma" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Date Seletection */}
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
                            className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
                            variant={'outline'} >
                            {field.value ? ( format(field.value, 'PPP') ) : ( <span>Pick a date</span> )}
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
                )} />

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
                            className={`w-full pl-3 text-left font-normal ${!field.value && 'text-muted-foreground'}`}
                            variant={'outline'} onClick={() => handleEndDateChange()} >
                            {field.value ? ( format(field.value, 'PPP') ) : ( <span>Pick a date</span> )}
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

                    {endDateError &&
                      <FormMessage error="true">{endDateError}</FormMessage>
                    }
                  </FormItem>
                )} />
            </div>

            <FormField
              control={form.control}
              name="selectedTags"
              render={({field}) => (
                <FormItem className='flex flex-col justify-between'>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <CreatableMultiSelectDropdown
                      selectedTags={selectedTags}
                      setSelectedTags={setSelectedTags}
                    />
                  </FormControl>

                  {tagError && (
                    <FormMessage error="true">{
                      tagError}
                    </FormMessage>
                  )}
                </FormItem>
              )} />

            <div className='flex flex-col gap-2 items-center'>
              <Button className='w-full' type="submit">{task ? 'Update' : 'Submit'}</Button>

              {/* Remove current task */}
              {task && (
                <Button
                  className=' w-fit hover:underline text-red-500 hover:text-rose-600'
                  variant="link"
                  onClick={() => onDelete(task.id)}>
                  {'Delete'}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default TaskCreationForm;

TaskCreationForm.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  onSubmit: PropTypes.func,
  colId: PropTypes.string,
  task: PropTypes.instanceOf(Task),
  onDelete: PropTypes.func,
};
