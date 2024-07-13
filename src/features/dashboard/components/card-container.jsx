/* eslint-disable no-unused-vars */
import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineTask } from 'react-icons/md';
import { MdPeopleOutline } from 'react-icons/md';
import { MdOutlineAssignmentLate } from 'react-icons/md';

import '../styles/style.css';

const Card = ({ title, icon, count, percentage }) => {
  return (
    <div className="w-1/4 h-27 bg-background flex flex-col py-4 px-2 items-center border-[1px] rounded-2xl">
      <div className="flex w-full items-center justify-between px-3">
        <p className="text-sm font-medium">{title}</p>
        {icon &&
          React.createElement(icon, { color: '#505050', className: 'w-4 h-4' })}
      </div>
      <div className="flex w-full justify-start pl-3 pt-1">
        <h2 className="text-3xl font-extrabold">{count}</h2>
      </div>
      <div className="flex w-full justify-start pl-3">
        <p className="text-sm font-light">{percentage}</p>
      </div>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="flex justify-between w-full gap-2 cursor-default">
      <Card
        title="Tasks Completed"
        icon={MdOutlineTask}
        count="+10"
        percentage="+18.1% from last month"
      />
      <Card
        title="Task Assigned"
        icon={MdOutlineAssignmentLate}
        count="+15"
        percentage="+15% from last month"
      />
      <Card
        title="Joined Projects"
        icon={MdPeopleOutline}
        count="+10"
        percentage="+10% from last month"
      />
      <Card
        title="New Notification"
        icon={IoMdNotificationsOutline}
        count="+99"
        percentage="+44% from last month"
      />
    </div>
  );
};

export default CardContainer;
