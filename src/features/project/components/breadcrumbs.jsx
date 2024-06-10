import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRight } from 'lucide-react';

const ProjectBreadCrumbs = ({
  projectType = 'Software',
  projectOwner = 'MUDOKER',
}) => {
  return (
    <div className="flex items-center pt-2 text-slate-500/60 text-xs font-bold">
      <button className="text-slate-500/60 hover:text-gray-500 focus:outline-none">
        PROJECTS
      </button>

      <ChevronRight className="w-5 h-5" />

      <button className="text-slate-500/60 hover:text-gray-500 focus:outline-none">
        {projectType}
      </button>

      <ChevronRight className="w-5 h-5" />

      <button className="text-slate-500/60 hover:text-gray-500 focus:outline-none">
        {projectOwner}
      </button>
    </div>
  );
};

ProjectBreadCrumbs.propTypes = {
  projectType: PropTypes.string,
  projectOwner: PropTypes.string,
};

export default ProjectBreadCrumbs;
