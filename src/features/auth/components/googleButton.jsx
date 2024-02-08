import {Button} from '../../../components/ui/button';
import React from 'react';
import {Mail} from 'lucide-react';
import PropTypes from 'prop-types';

function GoogleButton() {
  const redirectGoogleOAuth = () => {
    window.open('http://127.0.0.1:4000/bright-backend/api/auth/google', '_self');
  };

  // useEffect(() => {
  //   const getUser = async () => {
  //     fetch('http://127.0.0.1:4000/bright-backend/api/auth/success', {
  //       method: 'GET',
  //       credentials: 'include',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Credentials': true,
  //       },
  //     })
  //         .then((response) => {
  //           if (response.status === 200) return response.json();
  //           throw new Error('failed to authenticate user');
  //         })
  //         .then((data) => {
  //           console.log(data);
  //         });
  //   };
  //   getUser();
  // }, []);

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
