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
  const isUserAuthenticated = useSelector(state => state.userLoginStatus.token);

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
      className="dropdown nav-pl group/item relative flex h-10 w-full cursor-pointer items-center rounded-md transition-all"
    >
      <AlertDialog>
        <AlertDialogTrigger className="is-hovered group mb-8 flex h-full items-center gap-0 rounded-md p-0.5 group-hover:w-[90%] group-hover:gap-3 group-hover/item:bg-rose-600/90">
          {/* <div className="fill-foreground dropdown-content flex transition-all group-[.is-hovered]: group-hover/item:fill-white ">
            {children}
          </div>
          <div
            className="font-medium  md:text-sm opacity-0  group-hover:opacity-100 duration-0
                transition-all overflow-hidden invisible group-hover:visible w-0 group-hover:w-full flex items-center
                group-[.is-hovered]: group-hover/item:text-white
                "
          >
            {text}
          </div> */}
          <div
            className={`flex h-[90%] w-fit rounded-md text-sm group-hover:w-[90%]`}
          >
            <div className="group-[.is-hovered]: flex items-center justify-center fill-foreground px-2 py-1.5 group-hover/item:fill-white">
              {children}
            </div>
            <div
              className={`group-[.is-hovered]: hidden font-medium duration-0 group-hover:flex group-hover:items-center group-hover:justify-center group-hover/item:text-white`}
            >
              {text}
            </div>
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
