import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

import PropTypes from 'prop-types';
import {BRIGHT_EMAIL} from '../../config/constants/strings.global';

export function UnderDevDialog({isOpen = false, setIsOpen}) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='font-bold text-2xl'>Coming soon</AlertDialogTitle>
          <AlertDialogDescription>
           This feature is under development and not yet available for use. We&apos;ll let you know when it&apos;s ready!
          </AlertDialogDescription>
          <AlertDialogDescription className='flex'>
           Contact us at: <div className=' text-amber-500 ml-2 hover:cursor-pointer'>{BRIGHT_EMAIL}</div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => {
            setIsOpen(false);
          }}>Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

UnderDevDialog.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
