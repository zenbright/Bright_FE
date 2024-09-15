import { Button } from '@/components/ui/button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Notfoundpage() {
  const isUserAuthenticated = useSelector(
    state => state.userLoginStatus.isAuthenticated
  );

  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (isUserAuthenticated) {
      return navigate('/user/dashboard');
    }
    navigate('/');
  };

  return (
    <div className="bg-not_found_background w-full">
      <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-lg mx-auto text-center">
          <p className="p-3 text-sm text-foreground rounded-full bg-transparent dark:bg-gray-800 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-20 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </p>

          <p className="mb-2 text-4xl tracking-tight font-bold lg:text-4xl text-primary-600 dark:text-primary-500">
            {'404 Not found'}
          </p>

          <p className="mt-4 font-semibold text-gray-500/70 dark:text-gray-400">
            {
              'We searched high and low, but couldn’t find what you’re looking for. Let’s find a better place for you to go.'
            }
          </p>

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span>Go back</span>
            </Button>
            <Button variant="link" onClick={handleHomeClick}>
              Take me home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
