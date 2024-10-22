/* eslint-disable react/prop-types */
import BrightLogo from '@/assets/images/app-logo/logomini-dark.svg';
import { Button } from '@/components/ui/button';
import { Compare } from '@/components/ui/compare';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { BRIGHT_EMAIL } from '@/config/constants/strings.global';
import { AuroraBackground } from '@components/ui/aurora-background';
import { FlipWords } from '@components/ui/flip-words';
import { PlaceholdersAndVanishInput } from '@components/ui/placeholders-and-vanish-input';
import { DiscordLogoIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { Copyright } from 'lucide-react';
import { GithubIcon } from 'lucide-react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useRef } from 'react';
import { useEffect } from 'react';

import PMbad from '../assets/pm-bad.png';
import {
  INTRODUCTION,
  PROMOTION_TEXT,
  TRADEMARK,
  WELCOME_TEXT,
} from '../assets/strings';
import AICard from './ai-integration';
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
    <div className="bg-black">
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
              {'Enter your email to join our innovative platform'}
            </div>

            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />

            <div className="gap-2font-monument relative mt-5 flex items-center text-sm text-neutral-200">
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
                <DiscordLogoIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* Feature Section */}
      <div className="bg-black">
        <div className="mt-5 flex flex-col items-center gap-5">
          <div className="mb-5 font-monument text-3xl font-bold text-neutral-200">
            {'Why Zen Bright?'}
          </div>

          <div>
            <MissionGroup />
          </div>

          <div className="mb-20 mt-20 font-monument text-3xl font-bold text-neutral-200">
            {"What's else?"}
          </div>

          <div className="grid w-full grid-cols-2 items-center px-32 font-monument text-2xl text-neutral-200">
            <div className="font-monument text-2xl text-neutral-200">
              {'Project Management Simplified'}

              <div className="mt-7 text-neutral-300">
                {
                  'Organize your tasks, assign deadlines, and track progress effortlessly.'
                }
              </div>
            </div>

            <div className="flex h-[60vh] w-full items-center justify-center px-1 [perspective:800px] [transform-style:preserve-3d] md:px-8">
              <div
                style={{
                  transform: 'rotateX(15deg) translateZ(80px)',
                }}
                className="mx-auto h-1/2 w-3/4 rounded-3xl bg-neutral-100 p-1 dark:border-neutral-800 dark:bg-neutral-900 md:h-3/4"
              >
                <Compare
                  firstImage={PMbad}
                  secondImage="https://assets.aceternity.com/linear-dark.png"
                  firstImageClassName="object-cover object-left-top w-full"
                  secondImageClassname="object-cover object-left-top w-full"
                  className="h-full w-full rounded-[22px] md:rounded-lg"
                  slideMode="hover"
                  autoplay={true}
                />
              </div>
            </div>
          </div>

          <div className="grid w-full grid-cols-2 items-center px-32 font-monument text-2xl text-neutral-200">
            <AICard />
            <div className="font-monument text-2xl text-neutral-200">
              {'AI-Powered Insights'}

              <div className="mt-7 text-neutral-300">
                {
                  'Automate your workflows and receive intelligent project recommendations with integrated AI.'
                }
              </div>
            </div>
          </div>

          <div className="mt-5 flex h-[400px] flex-col items-center gap-5" />
        </div>
      </div>
    </div>
  );
};
