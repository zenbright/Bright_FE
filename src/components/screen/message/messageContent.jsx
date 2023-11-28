import PropTypes from 'prop-types';
import messageBubbleIcon from '../../../assets/images/speech-bubble.png';

export const MessageContent = ({ selectedMessage }) => {
    if (typeof selectedMessage === 'number' && selectedMessage === -1) {
        return (
            <div className="flex flex-col items-center justify-center">
                <img src={messageBubbleIcon} alt="Bubble icon" className="w-20 h-20 opacity-20 mb-4" />
                <h1 className="text-3xl opacity-20 font-medium">Start a conversation</h1>
            </div>
        );
    } else {
        return (
            <div>
                Hello World
            </div>
        );
    }
};

MessageContent.propTypes = {
    selectedMessage: PropTypes.number,
};
