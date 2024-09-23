import { ChevronRight } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react';

const ProjectBreadCrumbs = ({
  projectType = 'Software',
  projectOwner = 'MUDOKER',
}) => {
  return (
    <div className="flex items-center pt-2 text-project_text text-xs font-bold">
      <button className="text-project_text hover:text-gray-500 focus:outline-none">
        PROJECTS
      </button>

      <ChevronRight className="w-5 h-5" />

      <button className="text-project_text hover:text-gray-500 focus:outline-none">
        {projectType}
      </button>

      <ChevronRight className="w-5 h-5" />

      <button className="text-project_text hover:text-gray-500 focus:outline-none">
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
