import PropTypes from 'prop-types';
import { useState } from "react";

export const MessageBubble = ({ content = 'hello', isUserMessage = false }) => {
    const bgColor = isUserMessage ? 'bg-blue-500' : 'bg-gray-500';
    const [isRightClicked, setRightClicked] = useState(false);
    const [points, setPoints] = useState({
        x: 0,
        y: 0,
    });

    return (
        <span
            style={{ maxWidth: '300px', wordBreak: 'break-all', overflow: 'hidden', display: 'inline-block', alignSelf: !isUserMessage ? 'flex-start' : 'flex-end' }} className={`mx-4 my-4 p-3 rounded-lg ${bgColor} text-white`}
            onContextMenu={(e) => {
                e.preventDefault();
                setRightClicked(true);
                setPoints({
                    x: e.pageX,
                    y: e.pageY,
                });
                console.log("Right clicked");
            }}
        >
            {content}
            {isRightClicked && (
                <div className="position-relative">
                    <div className="absolute w-200 bg-gray-800 rounded-lg box-border" style={{ top: `${points.y}px`, left: `${points.x}px` }} onMouseLeave={() => setRightClicked(false)}>
                        <ul className="p-2 m-0 list-none">
                            <li className="p-3 hover:bg-black cursor-pointer">Forward</li>
                            <li className="p-3 hover:bg-black cursor-pointer">Delete</li>
                            <li className="p-3 hover:bg-black cursor-pointer">Pin</li>
                        </ul>
                    </div>
                </div>
            )}
        </span>
    );
};

MessageBubble.propTypes = {
    content: PropTypes.string.isRequired,
    isUserMessage: PropTypes.bool.isRequired
};
