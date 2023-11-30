import PropTypes from 'prop-types';
import messageBubbleIcon from '../../../assets/images/speech-bubble.png';
import phoneIcon from '../../../assets/images/phone.png';
import rmitIcon from '../../../assets/images/rmitlogo.png';
import videoCallIcon from '../../../assets/images/videocall.png';
import informationIcon from '../../../assets/images/3dots.png';
import { MESSAGE_CONTENT_WIDTH } from '../../../constants/size.global';

export const MessageContent = ({ selectedMessage, onlineStatus, userName = 'User 1' }) => {
    if (typeof selectedMessage === 'number' && selectedMessage === -1) {
        return (
            <div className="h-screen flex flex-col items-center justify-center">
                <img src={messageBubbleIcon} alt="Bubble icon" className="w-20 h-20 opacity-20 mb-4" />
                <h1 className="text-3xl opacity-20 font-medium">Start a conversation</h1>
            </div>
        );
    } else {
        return (
            <div>
                <div style={{ width: `${MESSAGE_CONTENT_WIDTH}` }} className='flex items-center top-0 absolute border-b ml-4 h-20 align-baseline'>
                    <div className='relative w-12 h-12 rounded-full'>
                        <img src={rmitIcon} alt="user avatar" className='w-full h-full object-cover' />
                        <span className={`absolute rounded-full ${onlineStatus ? 'bg-green-400' : 'bg-gray-400'} w-3 h-3 bottom-0 right-0 mb-0.5 mr-1`} />
                    </div>

                    <div className='h-11 ml-1'>
                        <h1 className="text-xl font-medium h-6">{userName}</h1>
                        <h1 className="flex items-center">
                            {onlineStatus ? 'Online now' : 'Offline'}
                        </h1>
                    </div>

                    <div className='ml-auto'>
                        <button className='w-7 h-7 mr-6'>
                            <img src={phoneIcon} alt="user avatar" />
                        </button>

                        <button className='w-7 h-7 mr-6'>
                            <img src={videoCallIcon} alt="user avatar" />
                        </button>

                        <button className='w-7 h-7 mr-2'>
                            <img src={informationIcon} alt="user avatar" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

MessageContent.propTypes = {
    selectedMessage: PropTypes.number,
    onlineStatus: PropTypes.bool,
    userName: PropTypes.string,
};
