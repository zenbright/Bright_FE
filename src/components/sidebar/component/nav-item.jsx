import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function NavItem({ text, children, onClick, select = false }) {
  return (
    <NavLink to={`/user/${text.toLowerCase()}`}>
      <div
        id={text}
        className="dropdown flex w-full items-center nav-pl transition-all relative h-10 cursor-pointer rounded-md group/item"
        onClick={() => onClick(text)}
      >
        <div
          className={`flex group-hover:w-[90%] h-[90%] rounded-md w-fit text-sm
          ${select ? 'bg-foreground fill-white text-white duration-0' : 'bg-background group-hover/item:bg-hovering'}`}
        >
          <div
            className={`dropdown-content flex justify-center items-center px-2 py-1.5
            ${select ? 'fill-background duration-200' : 'fill-foreground group-hover/item:fill-black'}`}
          >
            {children}
          </div>
          <div
            className={`font-medium  hidden group-hover:flex group-hover:justify-center group-hover:items-center duration-0
            ${select ? 'text-muted' : 'group-hover/item:text-black'}`}
          >
            {text}
          </div>
        </div>
      </div>
    </NavLink>
  );
}

NavItem.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  select: PropTypes.bool,
};

export default NavItem;