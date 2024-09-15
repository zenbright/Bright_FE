import PropTypes from 'prop-types';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';


function UserImageName({text, image}) {
  return (
    <div id={text} className='pl-3 dropdown flex w-full gap-6 transition-all relative h-12'>
      <div className="cursor-pointer h-12 w-[100%] flex justify-items-center align-middle hover/item:bg-slate-300 op hover/item:bg-opacity-20 hover/item:w-[95%] rounded-md group is-hovered">

        <div className='fixed top-2 justify-center items-center dropdown-content w-[6vw] place-content-center flex transition-all'>
          <Avatar className="mt-1 h-10 w-10 mr-8 rounded-full border-2 cursor-pointer">
            <AvatarImage src={image} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className='font-medium relative text-sm md:text-sm opacity-0 duration-200 group-hover:opacity-100
                transition-all transition-300 overflow-hidden invisible group-hover:visible w-0 left-[5vw] group-hover:w-full flex items-center
            '>
          {text}
        </div>
      </div>
    </div>
  );
}

UserImageName.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
};

export default UserImageName;
