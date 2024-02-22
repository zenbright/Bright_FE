import React from 'react';
import PropTypes from 'prop-types';
import ProjectBreadCrumbs from './ProjectBreadCrumbs';
import Divider from '../../../components/general/divider';
import {MemberList} from './MemberList';
import {CreationDate} from './CreationDate';
import {Button} from '@/components/ui/button';
import {ShieldMinus, Heart, Settings, CircleDot, Plus} from 'lucide-react';
import BoardTabGroup from '@/components/general/TabGroup';
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
import {useState} from 'react';
import {KanbanBoard} from './KanbanBoard';
import {SYSTEM_ALERT} from '../../../config/constants/strings.global';

export const Page = () => {
  const [isFavoured, setFavourite] = useState(false);

  return (
    <div className='px-2 py-1 w-full bg-slate-200/70 h-dvh overflow-auto '>
      <div className='px-4'>
        {/* Project Headers */}
        <ProjectBreadCrumbs projectType='SOFTWARE' projectOwner='MUDOKER' />

        {/* Title + Util Buttons */}
        <div className=' flex justify-between items-center'>
          <h1 className='text-4xl font-bold text-slate-700 mb-2 mt-2'>
            Bright
          </h1>

          <div className='flex gap-4'>
            <Button
              className={isFavoured ? 'bg-rose-500 hover:bg-red-700' : ''}
              onClick={() => {
                setFavourite(!isFavoured);
              }} >
              <Heart className="mr-2 h-4 w-4" /> {isFavoured ? 'Favourred' : 'Favour'}
            </Button>

            <Button variant="outline">
              <CircleDot className="mr-2 h-4 w-4" /> Issues
            </Button>

            <Button variant='outline'>
              <Settings className="mr-2 h-4 w-4" /> Settings
            </Button>
          </div>
        </div>
      </div>

      {/* Creation Date + Member List + Privacy */}
      <div className='mb-2 flex items-center h-10 gap-4 px-4'>
        <CreationDate />
        <Divider
          width='1.5px' height='100%' color='rgba(0,0,0,0.20'/>

        <div className='flex'>
          <MemberList />
          <Button className="h-9" variant="outline">Add member</Button>
        </div>

        <Divider width='1.5px' height='100%' color='rgba(0,0,0,0.1'/>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className='text-rose-500 bg-white hover:bg-slate-200/75 h-9'><ShieldMinus className='mr-2'/>Private</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl font-bold">{SYSTEM_ALERT.PRJ_ALT_ACC_TITLE}</AlertDialogTitle>
              <AlertDialogDescription>
                {SYSTEM_ALERT.PRJ_ALT_ACC_DES}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <Divider height='0.75px'/>

      {/* Board Tab */}
      <div className='flex items-center mt-1 px-4'>
        <BoardTabGroup />

        <Button
          className='hover:bg-slate-300 hover:rounded-full rounded-full ml-4'
          variant="ghost"
          size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Task Management Board */}
      <KanbanBoard />
    </div>
  );
};

Page.propTypes = {
  title: PropTypes.string,
};
