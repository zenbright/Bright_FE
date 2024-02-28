/* eslint-disable react/prop-types */
import {Header} from './header';
import {TypewriterEffectSmooth} from '@/components/ui/typewriter-effect';
import {Button} from '@/components/ui/button';
import Background from '../assets/bg-light.svg';
import {OverlayScrollbarsComponent} from 'overlayscrollbars-react';
import {MissionGroup} from './mission';
import Meeting from '../assets/meeting.png';
import BrightLogo from '@/assets/images/app-logo/logomini-dark.svg';
import {Copyright} from 'lucide-react';
import {useRef} from 'react';
import {useEffect} from 'react';

export const Page = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.clientHeight;
      const contentContainer = document.getElementById('content-container');
      if (contentContainer) {
        contentContainer.style.paddingTop = `${headerHeight}px`;
        contentContainer.style.marginBottom = `${headerHeight}px`;
      }
    }
  }, []);

  const words = [
    {
      text: 'Get',
    },
    {
      text: 'things',
    },
    {
      text: 'done',
    },
    {
      text: 'with',
    },
    {
      text: 'Bright.',
      className: 'text-yellow-500 dark:text-blue-500',
    },
  ];

  return (
    <div
      style={
        {backgroundImage: `url(${Background})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
        }
      }
      defer
    >
      <Header ref={headerRef}/>

      <OverlayScrollbarsComponent id="content-container" className={`max-h-screen`}>
        <div className='flex justify-center items-center flex-col mt-16'>
          <div className='font-semibold text-xl'>The complete project management solution</div>
          <TypewriterEffectSmooth words={words} />
          <div className=' text-center max-w-96 font-semibold text-md'>Boost team collaboration and achieve project goals with our intuitive tools.
          </div>

          <div className='flex gap-3 mt-7'>
            <Button>Request a demo</Button>
            <Button variant='ghost' className='border-2'>FAQ</Button>
          </div>
        </div>

        <div className='flex mt-14 px-6 flex-col gap-28 mb-20'>
          <MissionGroup />

          <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-6'>
              <div className='font-bold text-4xl'>
              Start your free trial of Bright.
              </div>
              <div className='text-lg max-w-[550px] font-normal'>
Tired of juggling projects and feeling overwhelmed? Go ahead, unleash your brilliance! Bright is a free project management tool with all the features you need to organize your work, collaborate effectively, and achieve your goals. Start today and see what you can accomplish!
              </div>
            </div>

            <img className='h-64 rounded-lg' src={Meeting} />
          </div>

          <div className='flex flex-col items-center font-semibold text-slate-400 gap-1 h-48'>
            <img src={BrightLogo} className=' h-20'/>
            <div className='flex text-lg'>
              ZenBright Co. 2024
              <Copyright className='h-3 w-3' />
            </div>


            <div className='flex' >
              <Button variant='ghost' className=' hover:bg-transparent'>Terms & Conditions</Button>
              <Button variant='ghost' className=' hover:bg-transparent'>Privacy Policy</Button>
            </div>
          </div>
        </div>
      </OverlayScrollbarsComponent>
    </div>
  );
};
