import PropTypes from 'prop-types';

import {FaArrowRight} from 'react-icons/fa';
import {VscOpenPreview} from 'react-icons/vsc';
import {MdOutlineDesignServices} from 'react-icons/md';
import {GiProgression} from 'react-icons/gi';
import {FaUsersViewfinder} from 'react-icons/fa6';
import {MdOutlineReport} from 'react-icons/md';

function ProjectdDetail({project, onClose}) {
  const listStyle = 'text-sm font-medium text-black align-middle hover:bg-blue-600 h-8 rounded-md pt-1 hover:text-white flex items-center';
  const iconStyle = 'h-5 w-5 mb-[2px] mx-2';
  return (
    <div className=''>
      <button onClick={onClose} className="mt-2 font-medium text-sm group/item flex flex-row hover:underline items-center text-black">
        <span>
          <FaArrowRight className="flex w-3 h-3 items-center mr-3 fill-black" style = {{transform: 'rotate(180deg)'}} />
        </span>
                All Project
      </button>
      <h1 className="text-lg font-bold mt-3 mb-3 ml-2 text-black">{project}</h1>
      <ul className="space-y-2">
        <li className={listStyle}><span><VscOpenPreview className={iconStyle}/></span>Overview</li>
        <li className={listStyle}><span><MdOutlineDesignServices className={iconStyle}/></span>Design View</li>
        <li className={listStyle}><span><GiProgression className={iconStyle}/></span>In Progress</li>
        <li className={listStyle}><span><FaUsersViewfinder className={iconStyle}/></span>Member</li>
        <li className={listStyle}><span><MdOutlineReport className={iconStyle}/></span>Reporting</li>
      </ul>
    </div>
  );
}
ProjectdDetail.propTypes = {
  project: PropTypes.node,
  onClose: PropTypes.func,
};
export default ProjectdDetail;
