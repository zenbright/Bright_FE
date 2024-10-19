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
      className={`flex items-start px-4 py-3 ${isSelected ? 'bg-gray-500 bg-opacity-20' : ''}`}
      onClick={onClick}
    >
      {/* User Avatar */}
      <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={profileImage}
          alt="User Avatar"
        />
      </div>

      <div className="ml-3 flex-1 w-44">
        {/* Username */}
        <div className="flex items-center justify-between">
          <p className="font-semibold">{userName}</p>
          {/* Time */}
          <p className="text-black/50 text-sm">{sentTime}</p>
        </div>

        {/* Message content */}
        <p className="text-black/50 mt-1 truncate text-sm">{message}</p>
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
