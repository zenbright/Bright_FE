import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function NavItem({ text, children, onClick, select = false }) {
  return (
    <NavLink to={`/user/${text.toLowerCase()}`}>
      <div
        id={text}
        className="dropdown nav-pl group/item relative flex h-10 w-full cursor-pointer items-center rounded-md transition-all"
        onClick={() => onClick(text)}
      >
        <div
          className={`flex h-[90%] w-fit rounded-md text-sm group-hover:w-[90%] ${select ? 'bg-foreground fill-white text-white duration-0' : 'bg-background group-hover/item:bg-hovering'}`}
        >
          <div
            className={`dropdown-content flex items-center justify-center px-2 py-1.5 ${select ? 'fill-background duration-200' : 'fill-foreground group-hover/item:fill-black'}`}
          >
            {children}
          </div>
          <div
            className={`hidden font-medium duration-0 group-hover:flex group-hover:items-center group-hover:justify-center ${select ? 'text-muted' : 'group-hover/item:text-black'}`}
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
