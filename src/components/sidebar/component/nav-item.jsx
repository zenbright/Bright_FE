import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

function NavItem({text, children, onClick, select = false}) {
  return (
    <NavLink to={`/user/${text.toLowerCase()}`}>
      <div
        id={text}
        className='dropdown flex w-full items-center nav-pl
        transition-all relative h-10 cursor-pointer rounded-md group/item'
        onClick={() => onClick(text)}
      >
        <div
          tabIndex="0"
          className={`p-3 transition-all group-hover:w-[95%] h-full flex items-center group-hover:gap-3
             rounded-md group is-hovered ${ select ? 'bg-blue-600 fill-white text-white duration-0' : 'bg-white group-hover/item:bg-blue-200/30'} duration-0`}
        >

          <div className={`dropdown-content flex transition-all ${select ? 'fill-white' : 'group-[.is-hovered]: group-hover/item:fill-blue-600'}`}>
            {children}
          </div>

          <div className={`font-medium mt-0.5 md:text-sm opacity-0 group-hover:opacity-100 duration-0
                transition-all overflow-hidden invisible group-hover:visible w-0 group-hover:w-full flex items-center
                ${ select ? 'text-white': 'group-[.is-hovered]: group-hover/item:text-blue-600'}`}>
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
