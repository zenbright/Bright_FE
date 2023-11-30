import PropTypes from 'prop-types';

export const MessageBubble = ({ content = '' }) => {
    return (
        <span className='rounded-lg bg-blue-500 p-3 text-white' style={{ maxWidth: 200 }}>
            {content}
        </span>
    );
};

MessageBubble.propTypes = {
    content: PropTypes.string.isRequired
};
