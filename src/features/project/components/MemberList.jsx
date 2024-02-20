/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import userDefaultProfile from '@/assets/images/user-profile-default.svg';

const sampleMembers = [
  {name: 'John Doe', imageUrl: userDefaultProfile},
  {name: 'Jane Smith', imageUrl: userDefaultProfile},
  {name: 'Michael Johnson', imageUrl: userDefaultProfile},
];

export const MemberList = ({members = sampleMembers, width = 8, height = 8}) => {
  // Check if the number of members is less than 5
  const shouldRenderLink = members.length < 5;

  return (
    <div className='flex'>
      <div className="flex -space-x-4 rtl:space-x-reverse mr-5">
        {members.map((member, index) => (
          <img
            key={index}
            className={`w-${width} h-${height} border-2 border-white rounded-full dark:border-gray-800`}
            src={member.imageUrl}
            alt={member.name}
          />
        ))}

        {shouldRenderLink && (
          <a
            className={`flex items-center justify-center w-${width} h-${height} text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800 z-10`}
            href="#"
          >+{5 - members.length}</a>
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
