import PropTypes from 'prop-types';

export const MessagePreview = ({ profileImage, userName, message, sentTime, isSelected, onClick }) => {
    return (
        <div className={`flex items-start p-4 ${isSelected ? 'bg-gray-500 bg-opacity-20' : ''}`} onClick={onClick}>
            {/* User Avatar */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={profileImage}
                    alt="User Avatar"
                />
            </div>

            <div className="ml-3 flex-1 w-60">
                {/* Username */}
                <div className="flex items-center justify-between">
                    <p className="font-bold text-lg">{userName}</p>
                    {/* Time */}
                    <p className="text-gray-500">{sentTime}</p>
                </div>

                {/* Message content */}
                <p className="text-gray-800 mt-1 truncate">{message}</p>
            </div>
        </div>
    );
};

MessagePreview.propTypes = {
    profileImage: PropTypes.string,
    isSelected: PropTypes.bool,
    userName: PropTypes.string,
    message: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    sentTime: PropTypes.string,
};
