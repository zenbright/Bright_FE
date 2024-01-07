function NavItem({ text, children }) {
    return (
        <div id="navItem" className='dropdown flex p-2 w-full place-content-center gap-0 group-hover:gap-2
        transition-all items-center relative h-10 cursor-pointer hover:bg-green-200 rounded-md 
        '>
            <div className='dropdown-content w-[6vw] place-content-center flex flex-none transition-all group-none'>
                {children}
            </div>
            <div className='font-medium relative text-sm md:text-base opacity-0 -left-18 hover:left-0 duration-500 group-hover:opacity-100  
            transition-all transition-100 overflow-hidden invisible group-hover:visible w-0 group-hover:w-full
            '>
                {text}
            </div>
        </div>
    )
}

export default NavItem