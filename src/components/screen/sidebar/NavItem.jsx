import React from 'react'


function NavItem({text, children}) {
  
  return (
    <div id="navItem" className='flex p-1 w-full place-content-center gap-0 group-hover:gap-2 transition-all items-center relative h-10'>
      <div className='w-[4vw] place-content-center-center flex flex-none transition-all'>
        {children}
      </div>
      <div className='relative text-sm md:text-base opacity-0 -left-18 group-hover:left-0 group-hover:opacity-100  
       transition-all transition-300 overflow-hidden invisible group-hover:visible w-0 group-hover:w-full
      '>
        {text}
      </div>
    </div>
  )
}

// NavItem.propTypes = {
//   open: PropTypes.o
// }

export default NavItem