import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import PropTypes from 'prop-types';

function UserImageName({ text, image }) {
  return (
    <div
      id={text}
      className="dropdown relative flex h-12 w-full gap-6 pl-3 transition-all"
    >
      <div className="op is-hovered group flex h-12 w-[100%] cursor-pointer justify-items-center rounded-md align-middle hover/item:w-[95%] hover/item:bg-slate-300 hover/item:bg-opacity-20">
        <div className="dropdown-content fixed top-2 flex w-[6vw] place-content-center items-center justify-center transition-all">
          <Avatar className="mr-8 mt-1 h-10 w-10 cursor-pointer rounded-full border-2">
            <AvatarImage src={image} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="transition-300 invisible relative left-[5vw] flex w-0 items-center overflow-hidden text-sm font-medium opacity-0 transition-all duration-200 group-hover:visible group-hover:w-full group-hover:opacity-100 md:text-sm">
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
