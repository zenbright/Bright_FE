import {Button} from '../../../components/ui/button';
import React from 'react';
import {Mail} from 'lucide-react';
import PropTypes from 'prop-types';

function GoogleButton() {
  const redirectGoogleOAuth = () => {
    window.open('http://127.0.0.1:4000/bright-backend/api/auth/google', '_self');
  };

  return (
    <Button
      onClick={redirectGoogleOAuth}
      className=" w-full h-8 rounded px-5 py-2.5
                text-black text-sm bg-white
                font-medium hover:bg-gray-300
                text-center inline-flex items-center mb-2 border border-gray-400"
    >
      <Mail className="mr-2 h-4 w-4" />
      Sign in with Google
    </Button>
  );
}

GoogleButton.propTypes = {
  onClick: PropTypes.func,
};

export default GoogleButton;
