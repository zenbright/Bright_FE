/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/style.css';
import {MdOutlineTask} from 'react-icons/md';
import {HiOutlineUserGroup} from 'react-icons/hi';
import {IoMdNotificationsOutline} from 'react-icons/io';


const CardContainer= () => {
  return (
    <div className='flex justify-between w-full'>
      <div className="w-[250px] h-[110px] bg-white text-black cursor-pointer card-hover flex p-3 items-center border-[1px] rounded-md">
        <div className='px-4 py-5 text-3xl rounded-md bg-green-400 bg-opacity-70'>
          <MdOutlineTask color="green"/>
        </div>
        <div className='p-4'>
          <h2 className='text-3xl'>10</h2>
          <p>Tasks Completed</p>
        </div>
      </div>
      <div className="w-[250px] h-[110px] bg-white text-black cursor-pointer card-hover flex p-3 items-center border-[1px] rounded-md">
        <div className='px-4 py-5 text-3xl rounded-md bg-amber-200 bg-opacity-70'>
          <HiOutlineUserGroup color='amber'/>
        </div>
        <div className='p-4 items-center'>
          <h2 className='text-3xl'>10</h2>
          <p>Joined Projects</p>
        </div>
      </div>
      <div className="w-[250px] h-[110px] bg-white text-black cursor-pointer card-hover flex p-3 items-center border-[1px] rounded-md">
        <div className='px-4 py-5 text-3xl rounded-md bg-blue-400 bg-opacity-70'>
          <IoMdNotificationsOutline color='blue'/>
        </div>
        <div className='p-4 justify-center'>
          <h2 className='text-3xl'>10</h2>
          <p>New Notification</p>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
