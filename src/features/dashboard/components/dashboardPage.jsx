import React from 'react';
import PropTypes from 'prop-types';
import ProjectBreadCrumbs from './breadcrumbs';
import HorizontalDivider from '../../../components/general/divider';

export const Page = () => {
  return (
    <div>
      <div className='ml-3'>
        <ProjectBreadCrumbs projectType='SOFTWARE' projectOwner='MUDOKER' />

        <h1 className='text-2xl font-bold text-slate-700 mb-2' style={{fontFamily: 'nunito'}}
        >
        Bright
        </h1>
      </div>

      <HorizontalDivider height='0.75px'/>
    </div>
  );
};

Page.propTypes = {
  title: PropTypes.string,
};
