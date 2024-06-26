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
} from '@/components/ui/alert-dialog';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { setLoginStatus } from '../../../features/auth/utils/authSlice';

function LogoutButton({ text, children }) {
  const dispatch = useDispatch();
  const isUserAuthenticated = useSelector(
    state => state.userLoginStatus.isAuthenticated
  );

  const handleLogout = () => {
    if (isUserAuthenticated) {
      localStorage.setItem('isUserAuthenticated', 'false');
      dispatch(setLoginStatus(false));
      window.location.replace('/auth');
    }
  };

  return (
    <div
      id={text}
      className="dropdown flex w-full items-center nav-pl
        transition-all relative h-10 cursor-pointer rounded-md group/item"
    >
      <AlertDialog>
        <AlertDialogTrigger className="p-3 transition-all group-hover:w-[90%] h-full flex items-center gap-0 group-hover:gap-3 group-hover/item:bg-rose-500 rounded-md group is-hovered mb-8">
          <div className="dropdown-content flex transition-all group-[.is-hovered]: group-hover/item:fill-white ">
            {children}
          </div>
          <div
            className="font-medium  md:text-sm opacity-0  group-hover:opacity-100 duration-0
                transition-all overflow-hidden invisible group-hover:visible w-0 group-hover:w-full flex items-center
                group-[.is-hovered]: group-hover/item:text-white
                "
          >
            {text}
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>You are about to signout</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone and will require you to login again.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                handleLogout();
              }}
            >
              Continue
            </AlertDialogAction>
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
