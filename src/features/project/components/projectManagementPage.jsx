import React from 'react';
import PropTypes from 'prop-types';
import ProjectBreadCrumbs from './breadcrumbs';
import Divider from '../../../components/general/divider';
import {MemberList} from './memList';
import {CreationDate} from './dateCreation';
import {Button} from '@/components/ui/button';
import {ShieldMinus, Heart, Settings, CircleDot} from 'lucide-react';
import BoardTabGroup from './boardSelect';
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

export const Page = () => {
  return (
    <div className='p-10 w-full bg-slate-50'>
      <div>
        <ProjectBreadCrumbs projectType='SOFTWARE' projectOwner='MUDOKER' />

        <div className=' flex justify-between items-center'>
          <h1 className='text-5xl font-bold text-slate-700 mb-6 mt-7'>
            Bright
          </h1>

          <div className='flex gap-4'>
            <Button className='bg-rose-500'>
              <Heart className="mr-2 h-4 w-4" /> Favorred
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

      <div className='mb-4 flex items-center h-10 gap-4'>
        <CreationDate />
        <Divider
          width='1.5px' height='100%' color='rgba(0,0,0,0.20'/>
        <MemberList />
        <Divider
          width='1.5px' height='100%' color='rgba(0,0,0,0.1'/>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className='text-rose-500 bg-white hover:bg-slate-200/75'><ShieldMinus className='mr-2'/> Private</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Make Project Public ?</AlertDialogTitle>
              <AlertDialogDescription>
            This action will change the visibility settings of the project.Please note that this action expose your project. Proceed with caution.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className='text-rose-600 hover:text-white'>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </div>

      <Divider height='0.75px'/>
      <BoardTabGroup />
    </div>
  );
};

Page.propTypes = {
  title: PropTypes.string,
};
