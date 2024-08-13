import Meteors from '@/components/ui/meteors';
import React from 'react';

export const MissionGroup = () => {
  // eslint-disable-next-line react/prop-types
  const FeaturedButton = ({ title, des }) => {
    return (
      <div>
        <div className=" w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-slate-100 border border-slate-200  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl mb-4 relative z-30 text-black">
              {title}
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-30">
              {des}
            </p>

            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-black">
              Explore
            </button>

            {/* Meaty part - Meteor effect */}
            <Meteors number={10} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="font-bold text-5xl self-center text-black">
        Our Missions
      </div>
      <div className=" font text-lg font-semibold max-w-xl text-center text-black">
        {
          'Through collaboration and expertise, we provide the tools and resources you need to achieve your goals.'
        }
      </div>

      <div className="flex gap-8 mt-4">
        <FeaturedButton
          title="For Project Managers"
          des="Seamless management for individuals and enterprises. Achieve peak productivity."
        />

        <FeaturedButton
          title="For Freelancers"
          des="Work smarter, not harder. Manage your projects efficiently and stay organized with our flexible tools."
        />

        <FeaturedButton
          title="For Educators & Trainers"
          des="Manage courses effectively and achieve learning goals with our easy-to-use tools."
        />

        <FeaturedButton
          title="For Remote Teams"
          des="Connect and collaborate effortlessly to stay on top of projects even when working miles apart."
        />
      </div>
    </div>
  );
};
