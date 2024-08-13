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
          tabIndex="0"
          className={`p-3 transition-all group-hover:w-[90%] h-full flex items-center group-hover:gap-3
             rounded-md group is-hovered ${select ? 'bg-foreground fill-white text-white duration-0' : 'bg-background group-hover/item:bg-hovering'} duration-0`}
        >
          <div
            className={`dropdown-content flex transition-all ${select ? 'fill-background duration-200' : 'fill-foreground group-[.is-hovered]: group-hover/item:fill-black'}`}
          >
            {children}
          </div>

          <div
            className={`font-medium mt-0.5 md:text-sm opacity-0 group-hover:opacity-100 duration-0
                transition-all overflow-hidden invisible group-hover:visible w-0 group-hover:w-full flex items-center
                ${select ? 'text-muted' : 'group-[.is-hovered]: group-hover/item:text-black'}`}
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
