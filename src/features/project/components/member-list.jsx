/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import userDefaultProfile from '@/assets/images/user-profile-default.svg';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';

const sampleMembers = [
  {name: 'John Doe', imageUrl: userDefaultProfile},
  {name: 'Jane Smith', imageUrl: userDefaultProfile},
  {name: 'Michael Johnson', imageUrl: userDefaultProfile},
  {name: 'Michael Johnson', imageUrl: userDefaultProfile},
  {name: 'Michael Johnson', imageUrl: userDefaultProfile},
  {name: 'Michael Johnson', imageUrl: userDefaultProfile},
];

export const MemberList = ({members = sampleMembers, width = 9, height = 9}) => {
  // Check if the number of members is less than 5
  const shouldRenderLink = members.length > 3;

  return (
    <div className='flex'>
      <div className="flex -space-x-4 rtl:space-x-reverse mr-3">
        {members.slice(0, 3).map((member, index) => (
          <Avatar
            key={index}
            className={`w-${width} h-${height} rounded-full`} >
            <AvatarImage src={member.imageUrl} alt={member.name} />
            <AvatarFallback>BR</AvatarFallback>
          </Avatar>
        ))}

        {shouldRenderLink && (
          <a
            className={`flex items-center justify-center w-${width} h-${height} text-xs font-medium text-white bg-gray-600
            rounded-full hover:bg-gray-600 z-10`}
            href="#" >
           +{members.length - 3}
          </a>
        )}

        {members.length == 0 && (
          <div className=' font-light text-sm'> No Assignee </div>
        )}
      </div>
    </div>

  );
};

MemberList.propTypes = {
  members: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
      }),
  ),
  width: PropTypes.number,
  height: PropTypes.number,
};
