/* eslint-disable react/prop-types */
import BrightLogo from '@/assets/images/app-logo/logomini-dark.svg';
import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { BRIGHT_EMAIL } from '@/config/constants/strings.global';
import { AuroraBackground } from '@components/ui/aurora-background';
import { FlipWords } from '@components/ui/flip-words';
import { PlaceholdersAndVanishInput } from '@components/ui/placeholders-and-vanish-input';
import { motion } from 'framer-motion';
import { Copyright } from 'lucide-react';
import { GithubIcon } from 'lucide-react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { DiscordLogoIcon } from '@radix-ui/react-icons';
import Background from '../assets/bg-light.svg';
import Facebook from '../assets/ic_facebook.svg';
import Github from '../assets/ic_github.svg';
import Meeting from '../assets/meeting.png';
import {
  INTRODUCTION,
  PROMOTION_TEXT,
  TRADEMARK,
  WELCOME_TEXT,
} from '../assets/strings';
import { Header } from './header';
import { MissionGroup } from './mission';

const words = [
  'project management tool',
  'coding platform',
  'modern workplace',
  'real-time collaboration',
  'workflow automation system',
];

const placeholders = [
  'Boost productivity with a modern workspace.',
  'Effortless real-time collaboration.',
  'Streamline your project management.',
  'Automate workflows with ease.',
  'Seamless remote team collaboration.',
];

export const Page = () => {
  const headerRef = useRef(null);

  const handleChange = e => {
    console.log(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    console.log('submitted');
  };

  // Used to igmore the headers on sroll
  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.clientHeight;
      const contentContainer = document.getElementById('content-container');
      if (contentContainer) {
        contentContainer.style.paddingTop = `${headerHeight}px`;
        contentContainer.style.marginBottom = `${headerHeight}px`;
      }
    }
  });

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="h-full w-full"
      >
        <Header ref={headerRef} />

        <div className="mt-20 flex flex-col items-center gap-2 font-extralight text-neutral-200 md:text-4xl lg:text-xl">
          <div className="mx-auto text-xl font-normal text-neutral-500">
            {'The complete'}
            <FlipWords words={words} />
            {'for developers.'}
          </div>

          <TypewriterEffectSmooth words={WELCOME_TEXT} />

          <div className="mt-1 max-w-[630px] text-center text-xl font-semibold text-neutral-500">
            <span
              dangerouslySetInnerHTML={{
                __html: INTRODUCTION.LANDING_PAGE.LONG.replace(
                  /(Streamline|boost|deliver)/g,
                  match =>
                    `<span class='text-[#ffda7d] font-bold'>${match}</span>`
                ),
              }}
            />
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center font-monument text-neutral-200">
          <div className="mb-5 font-monument">
            {"Enter your email to join our innovative platform"}
          </div>

          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />

          <div className="relative mt-5 flex items-center gap-2 font-monument text-sm text-neutral-200">
            {'Connect with us at: '}
            <Button
              className="hover:bg-white/10 hover:text-white"
              size="icon"
              variant="ghost"
              onClick={() => {
                window.open('https://github.com/zenbright/');
              }}
            >
              <GithubIcon />
            </Button>

            <Button
              className="hover:bg-white/10 hover:text-white"
              size="icon"
              variant="ghost"
              onClick={() => {
                window.open('https://www.facebook.com/zenbright/');
              }}
            >
              <DiscordLogoIcon className='w-6 h-6' />
            </Button>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};
