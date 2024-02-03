import React from 'react';
import PropTypes from 'prop-types';
import ProjectBreadCrumbs from './breadcrumbs';
import Divider from '../../../components/general/divider';
import {MemberList} from './memList';
import {CreationDate} from './dateCreation';
import {Button} from '@/components/ui/button';
import {ShieldMinus} from 'lucide-react';
import ButtonGroup from './boardSelect';

export const Page = () => {
  return (
    <div className='p-10 w-full'>
      <div>
        <ProjectBreadCrumbs projectType='SOFTWARE' projectOwner='MUDOKER' />

        <h1 className='text-5xl font-bold text-slate-700 mb-4 mt-6'>
        Bright
        </h1>
      </div>

      <div className='mb-4 flex items-center h-10 gap-4'>
        <CreationDate />
        <Divider
          width='1.5px' height='100%' color='rgba(0,0,0,0.20'/>
        <MemberList />
        <Divider
          width='1.5px' height='100%' color='rgba(0,0,0,0.1'/>
        <Button className='text-rose-500 bg-white hover:bg-slate-200/75'><ShieldMinus className='mr-2'/> Private</Button>
      </div>

      <Divider height='0.75px'/>
      <ButtonGroup />
    </div>
  );
};

Page.propTypes = {
  title: PropTypes.string,
};
