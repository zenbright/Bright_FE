import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import PropTypes from 'prop-types';
import {Task} from '../../utils/class';
import {MemberList} from '../member-list';
import {format} from 'date-fns';
import {Badge} from '@/components/ui/badge';
import TabGroup from '@/components/general/tab-group';
import {TASK_DETAILED_TABS} from '../../assets/values';
import {useState} from 'react';
import {AttachmentList} from './detailed-task-view/attachment-list';
import tinycolor from 'tinycolor2';

export const DetailedTaskView = ({isShowTaskDetailed, setIsShowTaskDetailed, task}) => {
  const [tabSelected, setTabSelected] = useState(0);

  return (
    <div>
      <Sheet open={isShowTaskDetailed} onOpenChange={setIsShowTaskDetailed} >
        <SheetContent>
          <SheetHeader>
            <SheetTitle className='text-2xl font-bold'>{task.title}</SheetTitle>
            <SheetDescription className='text-md'>
              {task.des}
            </SheetDescription>
          </SheetHeader>

          {/* Headers */}
          <div className='text-sm mt-3 flex-col flex gap-4'>
            {/* Task brief */}
            <div className='flex items-center gap-11'>
              Assignee
              <MemberList width={6} height={6}/>
            </div>

            <div className='flex items-center gap-12'>
              Timeline
              <div className=''>
                {`${format(task.startDate, 'MM/dd/yyyy')}`} {task.endDate && `- ${format(task.endDate, 'MM/dd/yyyy')}`}
              </div>
            </div>

            <div className='flex gap-16'>
              Tags
              <div className=' ml-2'>
                {task.tags && task.tags.map((tag) => (
                  <Badge
                    key={tag.id}
                    style={{
                      backgroundColor: tinycolor(tag.color).lighten(50),
                      color: tinycolor(tag.color),
                    }}
                    className='h-6 mr-1 mb-1'>
                    {tag.title}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Inner tabs */}
            <TabGroup
              tableNames={TASK_DETAILED_TABS}
              selected={tabSelected}
              setSelected={setTabSelected}/>

            {tabSelected === 2 && <AttachmentList />}
          </div>
        </SheetContent>
      </Sheet>
    </div>

  );
};

DetailedTaskView.propTypes = {
  isShowTaskDetailed: PropTypes.bool,
  setIsShowTaskDetailed: PropTypes.func,
  task: PropTypes.instanceOf(Task),
};
