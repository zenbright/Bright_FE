import {useState} from 'react';
import ProjectDetail from './ProjectDetail';
import FilterIcon from '../assets/images/filter.svg?react';
import ProjectIcon from '../assets/images/picon.svg?react';
import NotFound from '../assets/images/notfound.svg?react';
import {SAMPLE_PROJECT} from '../test/data/project';
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

  const filteredProjects = Object.entries(groupedProjects).reduce((acc, [category, items]) => {
    if (selectedCategory === 'All' || category === selectedCategory) {
      const filteredItems = items.filter((item) => item.toLowerCase().includes(searchProject.toLowerCase()));
      if (filteredItems.length > 0) {
        acc[category] = filteredItems;
      }
    }
    return acc;
  }, {});

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const resetSelectedProject = () => {
    setSelectedProject(null);
    setSearchProject('');
    setSelectedCategory('All');
  };

  const handleShowMoreClick = (category) => {
    setShowAllCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const categoryOptions = ['All', ...Object.keys(groupedProjects)];

  return (
    <div className="z-50 px-2 group-none overflow-x-scroll no-scrollbar relative rounded-r-md h-full bg-white border-r-2 w-[19.5vw] pt-2 flex flex-col justify-between">
      {selectedProject === null ? (
                <>
                  <div >
                    {Object.entries(filteredProjects).map(([category, items]) => (
                      <div key={category} className="group isSelected">
                        <h2 className="top-0 text-base text-blue-600 ">{category}</h2>
                        <ul role="list" className="">
                          {items.slice(0, showAllCategories[category] ? items.length : 3).map((item, index) => (
                            <li key={index} onClick={() => handleProjectClick(item)}
                              className="text-base font-medium align-middle group-[.isSelected]:hover/item:bg-blue-600
                                            hover/item:text-white hover/item:duration-100 h-8 rounded-md pl-3 pt-1 duration-100 flex flex-row listItem">
                              <span className="flex items-center mb-0.5 mr-2"><ProjectIcon className="w-4 h-4 fill-black listIcon"></ProjectIcon></span>
                              <p className="flex items-center text-sm item text-black listIcon">{item}</p>
                            </li>
                          ))}
                        </ul>
                        {items.length > 3 && (
                          <button onClick={() => handleShowMoreClick(category)} className="text-sm text-blue-600 block mx-auto mt-2 hover:underline">
                            {showAllCategories[category] ? 'Show Less ▲' : 'Show More ▼'}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  {Object.keys(filteredProjects).length === 0 && (
                    <div className="flex place-content-center top-50 flex-col items-center">
                      <NotFound className="w-20 h-20 m-5 fill-slate-700 opacity-20"></NotFound>
                    </div>

                  )}

                  <div className="space-x-1 sticky bottom-0 p-2 bg-white flex flex-row max-w-full">
                    <div className="w-full">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                      </div>
                      <input type="search" id="default-search" className="block h-[35px] p-1 indent-7 text-sm
                            text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-full
                            focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                      placeholder="Search"
                      required
                      onChange={(e) => setSearchProject(e.target.value)}
                      />
                    </div>
                    <div className="relative p-2 flex items-center rounded-lg hover:bg-blue-600 filteredBar">
                      <FilterIcon className="fill-black cursor-pointer h-5 w-5 filterdIcon"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      />
                      {isDropdownOpen && (
                        <select
                          value={selectedCategory}
                          onChange={(e) => {
                            setSelectedCategory(e.target.value);
                            setIsDropdownOpen(false);
                          }
                          }
                          className="text-sm text-black absolute right-0 mb-[70px] backdrop-blur-sm rounded-sm h-6 bg-slate-200"
                        >
                          {categoryOptions.map((category, index) => (
                            <option key={index} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>)
                      }
                    </div>
                  </div>
                </>
            ) : (
                <ProjectDetail project={selectedProject} onClose={resetSelectedProject}></ProjectDetail>
            )}
    </div>
  );
}

export default ProjectDashboard;
