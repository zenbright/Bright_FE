/* eslint-disable no-unused-vars */
import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineTask } from 'react-icons/md';
import { MdPeopleOutline } from 'react-icons/md';
import { MdOutlineAssignmentLate } from 'react-icons/md';

import '../styles/style.css';

const CardContainer = () => {
  return (
    <div className="flex justify-between w-full gap-2">
      <div className=" w-1/4 h-27 bg-background cursor-default flex flex-col py-4 px-2 items-center border-[1px] rounded-2xl">
        <div className="flex w-full items-center justify-between px-3">
          <p className="text-sm font-medium">{'Tasks Completed'}</p>
          <MdOutlineTask color="#505050" className="w-4 h-4" />
        </div>
        <div className="flex w-full justify-start pl-3 pt-1">
          <h2 className="text-3xl font-extrabold">{'+10'}</h2>
        </div>
        <div className="flex w-full justify-start pl-3">
          <p className="text-sm font-light">{'+18.1% from last month'}</p>
        </div>
      </div>

      <div className=" w-1/4 h-27 bg-background cursor-default card-hover flex flex-col py-4 px-2 items-center border-[1px] rounded-2xl">
        <div className="flex w-full items-center justify-between px-3">
          <p className="text-sm font-medium">{'Task Assigned'}</p>
          <MdOutlineAssignmentLate color="#505050 " className="w-4 h-4" />
        </div>
        <div className="flex w-full justify-start pl-3 pt-1">
          <h2 className="text-3xl font-extrabold">{'+15'}</h2>
        </div>
        <div className="flex w-full justify-start pl-3">
          <p className="text-sm font-light">{'+15% from last month'}</p>
        </div>
      </div>

      <div className=" w-1/4 h-27 bg-background cursor-pointer card-hover flex flex-col py-4 px-2 items-center border-[1px] rounded-2xl">
        <div className="flex w-full items-center justify-between px-3">
          <p className="text-sm font-medium">{'Joined Projects'}</p>
          <MdPeopleOutline color="#505050 " className="w-4 h-4" />
        </div>
        <div className="flex w-full justify-start pl-3 pt-1">
          <h2 className="text-3xl font-extrabold">{'+10'}</h2>
        </div>
        <div className="flex w-full justify-start pl-3">
          <p className="text-sm font-light">{'+10% from last month'}</p>
        </div>
      </div>

      <div className=" w-1/4 h-27 bg-background cursor-pointer card-hover flex flex-col py-4 px-2 items-center border-[1px] rounded-2xl">
        <div className="flex w-full items-center justify-between px-3">
          <p className="text-sm font-medium">{'New Notification'}</p>
          <IoMdNotificationsOutline color="#505050 " className="w-4 h-4" />
        </div>
        <div className="flex w-full justify-start pl-3 pt-1">
          <h2 className="text-3xl font-extrabold">{'+99'}</h2>
        </div>
        <div className="flex w-full justify-start pl-3">
          <p className="text-sm font-light">{'+44% from last month'}</p>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
