import PropTypes from 'prop-types';

function UserImageName({text, image}){
    return(
        <div id={text} className='dropdown flex w-full justify-center items-center gap-0
        transition-all relative h-10
        '>
            <div className="w-[100%] py-2 flex justify-items-center group-hover/item:bg-blue-600 group-hover/item:w-[90%] rounded-md group is-hovered">

                <div className='fixed top-2 dropdown-content w-[6vw] place-content-center flex transition-all'>
                    <img src={image} alt="" className="h-10 w-10 rounded-full border-2 cursor-pointer"/>
                </div>
                <div className='font-medium relative text-sm md:text-sm opacity-0 duration-200 group-hover:opacity-100  
                transition-all transition-300 overflow-hidden invisible group-hover:visible w-0 left-[6vw] group-hover:w-full flex items-center
                '>
                    {text}
                </div>
            </div>
        </div>
    )
}

UserImageName.propTypes = {
    text: PropTypes.string,
    image: PropTypes.string
}

export default UserImageName