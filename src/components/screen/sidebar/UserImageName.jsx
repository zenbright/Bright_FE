function UserImageName({text, image}){
    return(
        <div id="navItem" className='flex p-1 w-full place-content-center gap-0 group-hover:gap-2
        transition-all items-center relative h-10 
        '>
            <div className='w-[6vw] place-content-center flex flex-none transition-all cursor-pointer'>
                <img src={image} alt=""  className="h-10 w-15 rounded-full border-2"/>
            </div>
            <div className='font-medium relative text-sm md:text-base opacity-0 -left-18 group-hover:left-0 duration-500 group-hover:opacity-100  
            transition-all transition-300 overflow-hidden invisible group-hover:visible w-0 group-hover:w-full
            '>
                {text}
            </div>
        </div>
    )
}

export default UserImageName