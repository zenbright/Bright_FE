import { FaArrowRight } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { FaUsersViewfinder } from "react-icons/fa6";
import { MdOutlineReport } from "react-icons/md";

function ProjectdDetail({project, onClose}){
    const listStyle = "text-base font-medium align-middle hover:bg-green-200 h-8 rounded-md flex flex-row pt-1"
    const iconStyle = "h-5 w-5 mt-[3px] mr-2 ml-1"
    return(
        <div>
            <button onClick={onClose} className="group/item flex flex-row hover:underline">
                <span>
                    <FaArrowRight className="w-3.5 h-3 mt-[5.5px] mr-3" style = {{transform: 'rotate(180deg)' }} />
                </span>
                All Project
            </button>
            <h1 className="text-lg font-bold mt-3 mb-3 ml-2">{project}</h1>
            <ul className="space-y-2">
                <li className={listStyle}><span><GrOverview className={iconStyle}/></span>Overview</li>
                <li className={listStyle}><span><MdOutlineDesignServices className={iconStyle}/></span>Design View</li>
                <li className={listStyle}><span><GiProgression className={iconStyle}/></span>In Progress</li>
                <li className={listStyle}><span><FaUsersViewfinder className={iconStyle}/></span>Member</li>
                <li className={listStyle}><span><MdOutlineReport className={iconStyle}/></span>Reporting</li>
            </ul>
        </div>
    )
}

export default ProjectdDetail