/* eslint-disable react/prop-types */
import BrightLogo from '@/assets/images/app-logo/logomini-dark.svg';
import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { BRIGHT_EMAIL } from '@/config/constants/strings.global';
import { Copyright } from 'lucide-react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useRef } from 'react';
import { useEffect } from 'react';

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

export const Page = () => {
  const headerRef = useRef(null);

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
    <div className='bg-black'>
      <Header ref={headerRef} />

      {/* Contents */}
      <OverlayScrollbarsComponent
        id="content-container"
        className={`max-h-screen`}
        defer
      >
        <div className="mt-10 flex flex-col items-center justify-center gap-5">
          <div className="text-3xl font-semibold text-black">
            {INTRODUCTION.LANDING_PAGE.SHORT}
          </div>

          <TypewriterEffectSmooth words={WELCOME_TEXT} />

          <div className="max-w-[630px] text-center text-xl text-gray-500">
            <span
              dangerouslySetInnerHTML={{
                __html: INTRODUCTION.LANDING_PAGE.LONG.replace(
                  /(Streamline|boost|deliver)/g,
                  "<span class='font-bold text-black'>$1</span>"
                ),
              }}
            />
          </div>

          <div className="mt-8 flex gap-3">
            <Button className="text-md mr-1 bg-black p-6 text-white hover:bg-gray-800">
              Subscribe
            </Button>
            <Button
              variant="ghost"
              className="text-md p-6 text-black hover:bg-transparent hover:font-semibold hover:text-black hover:underline"
            >
              FAQ
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2 font-semibold text-slate-500">
            {'Contact us at: '}

            <div className="font-bold text-black hover:cursor-pointer hover:underline">
              {`${BRIGHT_EMAIL}`}
            </div>

            {'/'}

            <div className="flex gap-4">
              <img src={Github} className="w-6 hover:cursor-pointer" />
              <img src={Facebook} className="w-6 hover:cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="mb-20 mt-48 flex flex-col gap-28 px-6">
          <MissionGroup />

          <div className="mx-9 flex items-center justify-between">
            <div className="flex flex-col gap-6">
              <div className="text-5xl font-bold text-black">
                {PROMOTION_TEXT.FREE_TRIAL_TITLE}
              </div>

              <div className="flex max-w-xl flex-col text-lg font-normal text-black">
                <div>{PROMOTION_TEXT.FREE_TRIAL_DES}</div>
              </div>
            </div>

            <img className="h-72 rounded-lg" src={Meeting} />
          </div>

          <div className="flex h-48 flex-col items-center gap-1 font-semibold text-slate-400">
            <img src={BrightLogo} className="h-20" />

            <div className="flex text-lg font-thin">
              {TRADEMARK.COMPANY}
              <Copyright className="h-3 w-3" />
            </div>

            <div className="flex">
              <Button variant="ghost" className="hover:bg-transparent">
                Terms & Conditions
              </Button>
              <Button variant="ghost" className="hover:bg-transparent">
                Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </OverlayScrollbarsComponent>
    </div>
  );
};
