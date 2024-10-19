import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import PropTypes from 'prop-types';

export const MessagePreviewTab = ({
  profileImage,
  userName,
  message,
  sentTime,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`flex items-center py-2.5 px-3 ${isSelected ? 'bg-gray-500 bg-opacity-20' : ''}`}
      onClick={onClick}
    >
      {/* User Avatar */}
      <Avatar className="w-11 h-11">
        <AvatarImage src={profileImage} />
        <AvatarFallback>{userName.slice(0, 2)}</AvatarFallback>
      </Avatar>

      <div className="ml-3 flex-1 w-44">
        {/* Username */}
        <div className="flex items-center justify-between">
          <p className="font-semibold text-black/70 max-w-28 truncate text-sm">
            {userName}
          </p>
          {/* Time */}
          <p className="text-black/40 text-xs">{sentTime}</p>
        </div>

        {/* Message content */}
        <p className="text-black/40 mt-1 truncate text-xs">{message}</p>
      </div>
    </div>
  );
};

MessagePreviewTab.propTypes = {
  profileImage: PropTypes.string,
  isSelected: PropTypes.bool,
  userName: PropTypes.string,
  message: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  sentTime: PropTypes.string,
};
