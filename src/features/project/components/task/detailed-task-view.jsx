import TabGroup from '@/components/general/tab-group';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { format } from 'date-fns';
import { Plus } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import tinycolor from 'tinycolor2';

import { TASK_DETAILED_TABS } from '../../assets/values';
import { Task, TaskTag } from '../../utils/class';
import { MemberList } from '../member-list';
import { AttachmentList } from './detailed-task-view/attachment-list';
import { TaskDiscussion } from './detailed-task-view/task-discussion';
import { TaskTodos } from './detailed-task-view/task-todos';
import { TaskTagCreationForm } from './task-tag-creation-form';

export const DetailedTaskView = ({
  isShowTaskDetailed,
  setIsShowTaskDetailed,
  task,
}) => {
  const [isOpenTashTagCreationForm, setIsOpenTaskTagCreationForm] = useState(false);
  const [tagList, setTagList] = useState(task.tags);
  const [tabSelectedIndex, setTabSelectedIndex] = useState(0);
  const task_detail_views = [
    <TaskDiscussion />,
    <TaskTodos />,
    <AttachmentList />,
  ];

  useEffect(() => {
    // Convert Map to array of entries
    const tagEntries = Array.from(tagList.entries());

    // Get the last entry (key-value pair)
    const lastAddedTagEntry = tagEntries[tagEntries.length - 1];

    // Extract the tag value from the entry
    const lastAddedTag = lastAddedTagEntry[1];

    console.log('lastAddedTag', lastAddedTag);
    const newTag = new TaskTag(task.id, lastAddedTag.value, lastAddedTag.color);

    // setTagList([...tagList, newTag]);
  }, [tagList]);

  return (
    <Sheet open={isShowTaskDetailed} onOpenChange={setIsShowTaskDetailed}>
      <SheetContent className="h-full flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">{task.title}</SheetTitle>
          <SheetDescription className="text-md">{task.des}</SheetDescription>
        </SheetHeader>

        {/* Headers */}
        <div className="text-sm mt-3 flex flex-col gap-4 flex-1">
          {/* Task brief */}
          <div className="flex items-center gap-11">
            {'Assignee'}
            <MemberList width={6} height={6} />
          </div>

          <div className="flex items-center gap-12">
            {'Timeline'}
            <div className="font-semibold text-gray-500">
              {`${format(task.startDate, 'MM/dd/yyyy')}`}{' '}
              {task.endDate && `- ${format(task.endDate, 'MM/dd/yyyy')}`}
            </div>
          </div>

          <div className="flex gap-2 items-center">
            {'Tags'}
            <div className="ml-16 gap-2 flex flex-wrap">
              {tagList &&
                tagList.map(tag => (
                  <Badge
                    key={tag.id}
                    style={{
                      backgroundColor: tinycolor(tag.color).lighten(50),
                      color: tinycolor(tag.color),
                    }}
                    className="h-6 mr-1 mb-1"
                  >
                    {tag.title}
                  </Badge>
                ))}

              <Plus
                className="w-6 h-6 text-gray-500/60 bg-gray-300/40 p-1.5 rounded-md hover:bg-gray-300/50 hover:cursor-pointer hover:text-black"
                onClick={() => {
                  setIsOpenTaskTagCreationForm(true);
                }}
              />
            </div>
          </div>

          {/* Inner tabs */}
          <TabGroup
            tableNames={TASK_DETAILED_TABS}
            selected={tabSelectedIndex}
            setSelected={setTabSelectedIndex}
          />

          <div className="flex-1">{task_detail_views[tabSelectedIndex]}</div>
        </div>

        {isOpenTashTagCreationForm && (
          <TaskTagCreationForm
            isOpen={isOpenTashTagCreationForm}
            onOpenChange={setIsOpenTaskTagCreationForm}
            labelTitle={'Add new tag'}
            tagList={tagList}
            setTagList={setTagList}
          />
        )}
      </SheetContent>
    </Sheet>
  );
};

DetailedTaskView.propTypes = {
  isShowTaskDetailed: PropTypes.bool,
  setIsShowTaskDetailed: PropTypes.func,
  task: PropTypes.instanceOf(Task),
};
