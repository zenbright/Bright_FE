/* eslint-disable react/prop-types */
import BrightLogo from '@/assets/images/app-logo/logomini-dark.svg';
import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { BRIGHT_EMAIL } from '@/config/constants/strings.global';
import { Copyright } from 'lucide-react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useRef } from 'react';
import { useEffect, useState } from 'react';

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

    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Header ref={headerRef} />

      {/* Contents */}
      <OverlayScrollbarsComponent
        id="content-container"
        className={`max-h-screen`}
        defer
      >
        <div className=" flex justify-center items-center flex-col gap-5 mt-10">
          <div className="font-semibold text-3xl text-black">
            {INTRODUCTION.LANDING_PAGE.SHORT}
          </div>

          <TypewriterEffectSmooth words={WELCOME_TEXT} />

          <div className="text-center max-w-[630px] text-xl text-gray-500">
            <span
              dangerouslySetInnerHTML={{
                __html: INTRODUCTION.LANDING_PAGE.LONG.replace(
                  /(Streamline|boost|deliver)/g,
                  "<span class='font-bold text-black'>$1</span>"
                ),
              }}
            />
          </div>

          <div className="flex gap-3 mt-8">
            <Button className="p-6 text-md mr-1 text-white bg-black hover:bg-gray-800">Subscribe</Button>
            <Button
              variant="ghost"
              className="p-6 text-md hover:font-semibold hover:underline hover:bg-transparent text-black hover:text-black"
            >
              FAQ
            </Button>
          </div>

          <div className="flex items-center gap-2 mt-8 font-semibold text-slate-500">
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

        <div className="flex mt-48 px-6 flex-col gap-28 mb-20">
          <MissionGroup />

          <div className="flex justify-between mx-9  items-center">
            <div className="flex flex-col gap-6">
              <div className="font-bold text-5xl text-black">
                {PROMOTION_TEXT.FREE_TRIAL_TITLE}
              </div>

              <div className="text-lg max-w-xl font-normal flex flex-col text-black">
                <div>{PROMOTION_TEXT.FREE_TRIAL_DES}</div>
              </div>
            </div>

            <img className="h-72 rounded-lg" src={Meeting} />
          </div>

          <div className="flex flex-col items-center font-semibold text-slate-400 gap-1 h-48">
            <img src={BrightLogo} className=" h-20" />

            <div className="flex text-lg font-thin">
              {TRADEMARK.COMPANY}
              <Copyright className="h-3 w-3" />
            </div>

            <div className="flex">
              <Button variant="ghost" className=" hover:bg-transparent">
                Terms & Conditions
              </Button>
              <Button variant="ghost" className=" hover:bg-transparent">
                Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </OverlayScrollbarsComponent>
    </div>
  );
};
