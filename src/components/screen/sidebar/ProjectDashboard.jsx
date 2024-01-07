import { useState } from "react";
import ProjectDetail from './ProjectDetail'
import { FaFilter } from "react-icons/fa";


const projects = [
    { category: "Software", name: "Facebook" },
    { category: "Software", name: "Youtube" },
    { category: "Software", name: "Twitch" },
    { category: "Hardware", name: "Intel" },
    { category: "Hardware", name: "AMD" },
    { category: "Hardware", name: "Apple" },
    { category: "Other", name: "Bright" },
    { category: "Other", name: "FPT" },
    { category: "Other", name: "Kien" }
]

function ProjectDashboard() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [searchProject, setSearchProject] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const groupedProjects = projects.reduce((acc, project) => {
        acc[project.category] = acc[project.category] || [];
        acc[project.category].push(project.name);
        return acc;
    }, {});

    const filteredProjects = Object.entries(groupedProjects).reduce((acc, [category, items]) => {
        if (selectedCategory === "All" || category === selectedCategory) {
            const filteredItems = items.filter(item => item.toLowerCase().includes(searchProject.toLowerCase()));
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
        setSearchProject("")
        setSelectedCategory("All")
    };

    const categoryOptions = ["All", ...Object.keys(groupedProjects)];

    return (
        <div className=" group-none flex-1 relative h-full bg-slate-300 w-[19.5vw] expand-in p-2 z-30">
            {selectedProject === null ? (
                <>
                    {Object.entries(filteredProjects).map(([category, items]) => (
                        <div key={category}>
                            <h2 className="sticky top-0 text-base ">{category}</h2>
                            <ul role="list" className="list-disc list-inside">
                                {items.map((item, index) => (
                                    <li key={index} onClick={() => handleProjectClick(item)}
                                    className="group/item text-base font-medium align-middle hover:bg-green-200 h-8 rounded-md pl-5 pt-1">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="fixed bottom-2 flex flex-row w-fit">
                        <div className="">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block h-[35px] p-4 ps-10 text-sm
                            text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                            focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                                placeholder="Search"
                                required
                                onChange={(e) => setSearchProject(e.target.value)}
                            />
                        </div>
                        <div className="group/item relative p-2 flex items-center rounded-lg hover:bg-orange-200">
                            <FaFilter onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className=" cursor-pointer w-5 h-5"></FaFilter>
                            {isDropdownOpen && (
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => {
                                        setSelectedCategory(e.target.value)
                                        setIsDropdownOpen(false)
                                    }
                                    }
                                    className="absolute right-0 mb-[70px] backdrop-blur-sm rounded-sm h-6 bg-slate-400"
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
    )
}

export default ProjectDashboard