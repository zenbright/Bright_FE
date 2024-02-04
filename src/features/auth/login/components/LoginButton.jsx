import React from 'react';
import {Button} from '../../../../components/ui/button';
import PropTypes from 'prop-types';


function LoginButton({onClick}) {
  return (
    <Button
      onClick={onClick}
      className=" w-full h-8 rounded px-5 py-2.5
                        text-black text-sm bg-white
                        font-medium  hover:bg-gray-300
                        text-center inline-flex items-center border border-gray-400">
            Sign in
    </Button>
  );
}

LoginButton.propTypes = {
  onClick: PropTypes.func,
};

export default LoginButton;
