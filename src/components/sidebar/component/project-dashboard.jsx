import { useState } from 'react';

import FilterIcon from '../assets/images/filter.svg?react';
import NotFound from '../assets/images/notfound.svg?react';
import ProjectIcon from '../assets/images/picon.svg?react';
import { SAMPLE_PROJECT } from '../test/data/project';
import ProjectDetail from './project-detail';

const projects = SAMPLE_PROJECT;

function ProjectDashboard() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchProject, setSearchProject] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState({});

  const groupedProjects = projects.reduce((acc, project) => {
    acc[project.category] = acc[project.category] || [];
    acc[project.category].push(project.name);
    return acc;
  }, {});

  const filteredProjects = Object.entries(groupedProjects).reduce(
    (acc, [category, items]) => {
      if (selectedCategory === 'All' || category === selectedCategory) {
        const filteredItems = items.filter(item =>
          item.toLowerCase().includes(searchProject.toLowerCase())
        );
        if (filteredItems.length > 0) {
          acc[category] = filteredItems;
        }
      }
      return acc;
    },
    {}
  );

  const handleProjectClick = project => {
    setSelectedProject(project);
  };

  const resetSelectedProject = () => {
    setSelectedProject(null);
    setSearchProject('');
    setSelectedCategory('All');
  };

  const handleShowMoreClick = category => {
    setShowAllCategories(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const categoryOptions = ['All', ...Object.keys(groupedProjects)];

  return (
    <div className="flyInLeftToRight group-none no-scrollbar visible flex h-full w-[19.5vw] flex-col justify-between overflow-x-scroll rounded-r-md border-r-2 bg-background px-2 pt-2">
      {selectedProject === null ? (
        <>
          <div>
            {Object.entries(filteredProjects).map(([category, items]) => (
              <div key={category} className="isSelected group">
                <h2 className="top-0 text-base font-semibold text-foreground">
                  {category}
                </h2>
                <ul role="list" className="">
                  {items
                    .slice(0, showAllCategories[category] ? items.length : 3)
                    .map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleProjectClick(item)}
                        className="hover/item:text- listItem group/select flex h-8 flex-row rounded-md pl-3 pt-1 align-middle text-base font-medium duration-100 group-[.isSelected]:hover/item:bg-foreground"
                      >
                        <span className="mb-0.5 mr-2 flex items-center">
                          <ProjectIcon className="h-4 w-4 fill-foreground group-hover/select:fill-background"></ProjectIcon>
                        </span>
                        <p className="item flex items-center text-sm text-foreground group-hover/select:text-background">
                          {item}
                        </p>
                      </li>
                    ))}
                </ul>
                {items.length > 3 && (
                  <button
                    onClick={() => handleShowMoreClick(category)}
                    className="mx-auto mt-2 block text-sm text-foreground hover:underline"
                  >
                    {showAllCategories[category] ? 'Show Less' : 'Show More'}
                  </button>
                )}
              </div>
            ))}
          </div>

          {Object.keys(filteredProjects).length === 0 && (
            <div className="top-50 flex flex-col place-content-center items-center">
              <NotFound className="m-5 h-20 w-20 fill-slate-700 opacity-20"></NotFound>
            </div>
          )}

          <div className="sticky bottom-0 flex max-w-full flex-row space-x-1 bg-background p-2">
            <div className="w-full">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block h-[35px] w-full rounded-lg border border-gray-300 bg-gray-50 p-1 indent-7 text-sm text-gray-900 focus:outline-none"
                placeholder="Search"
                required
                onChange={e => setSearchProject(e.target.value)}
              />
            </div>
            <div className="group/filter relative flex items-center rounded-lg p-2 hover:bg-foreground">
              <FilterIcon
                className="h-5 w-5 cursor-pointer fill-foreground group-hover/filter:fill-background"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              {isDropdownOpen && (
                <select
                  value={selectedCategory}
                  onChange={e => {
                    setSelectedCategory(e.target.value);
                    setIsDropdownOpen(false);
                  }}
                  className="absolute right-0 mb-[70px] h-6 rounded-sm bg-slate-200 text-sm text-black backdrop-blur-sm"
                >
                  {categoryOptions.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
        </>
      ) : (
        <ProjectDetail
          project={selectedProject}
          onClose={resetSelectedProject}
        ></ProjectDetail>
      )}
    </div>
  );
}

export default ProjectDashboard;
