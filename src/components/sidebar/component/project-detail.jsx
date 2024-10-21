import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { FaUsersViewfinder } from 'react-icons/fa6';
import { GiProgression } from 'react-icons/gi';
import { MdOutlineDesignServices } from 'react-icons/md';
import { MdOutlineReport } from 'react-icons/md';
import { VscOpenPreview } from 'react-icons/vsc';

function ProjectdDetail({ project, onClose }) {
  const listStyle =
    'text-sm font-medium text-foreground align-middle hover:bg-foreground h-8 rounded-md pt-1 hover:text-background flex items-center';
  const iconStyle = 'h-5 w-5 mb-[2px] mx-2';
  return (
    <div className="">
      <button
        onClick={onClose}
        className="group/item mt-2 flex flex-row items-center text-sm font-medium text-foreground hover:underline"
      >
        <span>
          <FaArrowRight
            className="mr-3 flex h-3 w-3 items-center fill-foreground"
            style={{ transform: 'rotate(180deg)' }}
          />
        </span>
        All Project
      </button>
      <h1 className="mb-3 ml-2 mt-3 text-lg font-bold text-foreground">
        {project}
      </h1>
      <ul className="space-y-2">
        <li className={listStyle}>
          <span>
            <VscOpenPreview className={iconStyle} />
          </span>
          Overview
        </li>
        <li className={listStyle}>
          <span>
            <MdOutlineDesignServices className={iconStyle} />
          </span>
          Design View
        </li>
        <li className={listStyle}>
          <span>
            <GiProgression className={iconStyle} />
          </span>
          In Progress
        </li>
        <li className={listStyle}>
          <span>
            <FaUsersViewfinder className={iconStyle} />
          </span>
          Member
        </li>
        <li className={listStyle}>
          <span>
            <MdOutlineReport className={iconStyle} />
          </span>
          Reporting
        </li>
      </ul>
    </div>
  );
}
ProjectdDetail.propTypes = {
  project: PropTypes.node,
  onClose: PropTypes.func,
};
export default ProjectdDetail;
