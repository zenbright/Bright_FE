import PropTypes from 'prop-types';

export const MessageBlock = ({ content = '' }) => {
    return (
        <span className='rounded-lg bg-blue-500 p-3 text-white' style={{ maxWidth: 200 }}>
            {content}
        </span>
    );
};

MessageBlock.propTypes = {
    content: PropTypes.string.isRequired
};
