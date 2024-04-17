/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/style.css';
import {MdOutlineTask} from 'react-icons/md';
import {MdPeopleOutline} from 'react-icons/md';
import {IoMdNotificationsOutline} from 'react-icons/io';


const CardContainer= () => {
  return (
    <div className='flex justify-between w-full'>
      <div className="w-[245px] h-[80px] bg-white cursor-pointer card-hover flex pl-1 pr-3 items-center border-[1px] rounded-md">
        <div className='px-4 py-5 text-3xl rounded-md bg-black bg-opacity-5'>
          <MdOutlineTask color='#505050'/>
        </div>
        <div className='p-4'>
          <p>Tasks Completed</p>
          <h2 className='text-3xl font-semibold'>10</h2>
        </div>
      </div>
      <div className="w-[245px] h-[80px] bg-white cursor-pointer card-hover flex pl-1 pr-3 items-center border-[1px] rounded-md">
        <div className='px-4 py-5 text-3xl rounded-md bg-black bg-opacity-5'>
          <MdPeopleOutline color='#505050'/>
        </div>
        <div className='pl-4 items-center'>
          <p>Joined Projects</p>
          <h2 className='text-3xl font-semibold'>10</h2>
        </div>
      </div>
      <div className="w-[245px] h-[80px] bg-white  cursor-pointer card-hover flex pl-1 pr-3 items-center border-[1px] rounded-md">
        <div className='px-4 py-5 text-3xl rounded-md bg-black bg-opacity-5'>
          <IoMdNotificationsOutline color='#505050'/>
        </div>
        <div className='pl-3 justify-center '>
          <p>New Notification</p>
          <h2 className='text-3xl font-semibold'>10</h2>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
