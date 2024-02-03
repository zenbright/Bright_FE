import React from 'react';
import PropTypes from 'prop-types';
import ProjectBreadCrumbs from './breadcrumbs';

export const Page = ({title = 'MUDOKER'}) => {
  return (
    <div className='ml-3'>
      <ProjectBreadCrumbs projectType='SOFTWARE' projectOwner='MUDOKER' />
    </div>
  );
};

Page.propTypes = {
  title: PropTypes.string,
};
