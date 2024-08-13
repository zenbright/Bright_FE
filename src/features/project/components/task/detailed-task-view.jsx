import TabGroup from '@/components/general/tab-group';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { format } from 'date-fns';
import { Plus } from 'lucide-react';
import { Pencil } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import tinycolor from 'tinycolor2';

import { TASK_DETAILED_TABS } from '../../assets/values';
import { Task } from '../../utils/class';
import { MemberList } from '../member-list';
import { AttachmentList } from './detailed-task-view/attachment-list';
import { TaskDiscussion } from './detailed-task-view/task-discussion';
import { TaskTodos } from './detailed-task-view/task-todos';
import TaskCreationForm from './task-creation-form';
import { TaskTagCreationForm } from './task-tag-creation-form';

export const DetailedTaskView = ({
  isShowTaskDetailed,
  setIsShowTaskDetailed,
  task,
}) => {
  const [isOpenTashTagCreationForm, setIsOpenTaskTagCreationForm] =
    useState(false);
  const [tagList, setTagList] = useState(task.tags);
  const [isReloadInnerTabs, setIsReloadInnerTabs] = useState(false);
  const [tabSelectedIndex, setTabSelectedIndex] = useState(0);
  const [isShowTaskEditForm, setIsShowTaskEditForm] = useState(false);

  const task_detail_views = [
    <TaskDiscussion
      isReload={isReloadInnerTabs}
      onReloadTrigger={setIsReloadInnerTabs}
    />,
    <TaskTodos />,
    <AttachmentList
      isReload={isReloadInnerTabs}
      onReloadTrigger={setIsReloadInnerTabs}
    />,
  ];

  const handleDeleteTag = tagId => {
    // Remove the tag from the tagList
    const newTagList = tagList.filter(tag => tag.id !== tagId);

    // Update the tagList
    setTagList(newTagList);

    // Update the task
    task.removeTag(tagId);

    setIsReloadInnerTabs(true);
  };

  useEffect(() => {
    const tagEntries = Array.from(tagList.entries());

    const lastEntry = tagEntries[tagEntries.length - 1];

    if (typeof lastEntry[1] !== 'string') return;
    const newTag = task.createTagfromString(lastEntry[1]);

    // remove the last entry from the tagList
    tagList.pop();

    // Update the new tagList
    setTagList([...tagList, newTag]);

    // Update the task
    task.addTag(newTag);

    setIsReloadInnerTabs(true);
  }, [tagList]);

  return (
    <Sheet open={isShowTaskDetailed} onOpenChange={setIsShowTaskDetailed}>
      {isShowTaskEditForm && (
        <TaskCreationForm
          isCreateNewTask={isShowTaskEditForm}
          isOpen={isShowTaskEditForm}
          onOpenChange={setIsShowTaskEditForm}
          isInEditView={true}
          taskToBeEditted={task}
        />
      )}

      <SheetContent className="h-full flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold flex items-center justify-between">
            <div>{task.title}</div>
            <div>
              <Button
                variant="ghost"
                className="flex gap-2 text-black/60"
                onClick={() => setIsShowTaskEditForm(true)}
              >
                {'Edit'}
                <Pencil className="w-4 h-4" />
              </Button>
            </div>
          </SheetTitle>
          <SheetDescription className="text-md">{task.des}</SheetDescription>
        </SheetHeader>

        {/* Headers */}
        <div className="text-sm mt-3 flex flex-col gap-4 flex-1">
          {/* task brief */}
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
                  <DropdownMenu key={tag.id}>
                    <DropdownMenuTrigger>
                      <Badge
                        key={tag.id}
                        className={`h-6 mr-1`}
                        style={{
                          backgroundColor: tinycolor(tag.color).lighten(50),
                          color: tinycolor(tag.color),
                        }}
                      >
                        {tag.title}
                      </Badge>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-44">
                      <DropdownMenuItem
                        className="text-red-400 hover:text-red-400"
                        onClick={() => handleDeleteTag(tag.id)}
                      >
                        {'Delete'}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
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

          <div className="flex-1 h-full mb-2">
            {task_detail_views[tabSelectedIndex]}
          </div>
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
