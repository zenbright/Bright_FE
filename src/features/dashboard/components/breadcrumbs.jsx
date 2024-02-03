import React from 'react';
import PropTypes from 'prop-types';
import {ChevronRight} from 'lucide-react';

const ProjectBreadCrumbs = ({projectType = 'Software', projectOwner = 'MUDOKER'}) => {
  return (
    <div className="flex items-center py-2 text-slate-400" style={{fontSize: 10}}>
      <button className="text-slate-400 hover:text-gray-500 focus:outline-none">
        PROJECTS
      </button>
      <ChevronRight className="w-3 h-3" />
      <button className="text-slate-400 hover:text-gray-500 focus:outline-none">
        {projectType}
      </button>
      <ChevronRight className="w-3 h-3" />
      <button className="text-slate-400 hover:text-gray-500 focus:outline-none">
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
