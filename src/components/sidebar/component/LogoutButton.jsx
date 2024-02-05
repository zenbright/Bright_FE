import PropTypes from 'prop-types';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

function LogoutButton({ text, children }) {
  return (
    <div id={text} data-modal-target="default-modal" data-modal-toggle="default-modal"
      className='dropdown flex w-full items-center nav-pl
        transition-all relative h-10 cursor-pointer rounded-md group/item'
    >
      <AlertDialog>
        <AlertDialogTrigger
          className="p-3 transition-all group-hover:w-[90%] h-full flex items-center gap-0 group-hover:gap-3 group-hover/item:bg-red-600 rounded-md group is-hovered"
        >

          <div className='dropdown-content flex transition-all group-[.is-hovered]: group-hover/item:fill-white '>
            {children}
          </div>
          <div className='font-medium  md:text-sm opacity-0  group-hover:opacity-100 duration-0
                transition-all overflow-hidden invisible group-hover:visible w-0 group-hover:w-full flex items-center
                group-[.is-hovered]: group-hover/item:text-white
                '>
            {text}
          </div>

        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you want to logout?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

LogoutButton.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};

export default LogoutButton;
