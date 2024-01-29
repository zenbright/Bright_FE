import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from "react";

import messageBubbleIcon from '../../assets/images/speech-bubble.png';
import phoneIcon from '../../assets/images/phone-solid.svg';
import rmitIcon from '../../assets/images/rmitlogo.png';
import videoCallIcon from '../../assets/images/video-solid.svg';
import informationIcon from '../../assets/images/circle-info-solid.svg';
import plusIcon from '../../assets/images/plus.png';
import uploadImageIcon from '../../assets/images/photo.png';
import micIcon from '../../assets/images/microphone.png'
import sendIcon from '../../assets/images/send.png'
import smileIcon from '../../assets/images/smile.png';

import { MESSAGE_CONTENT_WIDTH } from '../../lib/constants/size.global';
import { MessageBubble } from './messageBubble';
import { Message } from "./message.class";
import { MESSAGE_HEADER_HEIGHT } from '../../lib/constants/size.global';
import { SAMPLE_MESSAGE } from '../../lib/data/message.sample';

export const MessageContent = ({ selectedMessage, onlineStatus, userName = 'User 1' }) => {
    const [userMessageInput, setUserMessageInput] = useState('');
    const [userMessage, setMessageList] = useState([]);
    const [isPageLoad, setIsPageLoad] = useState(false);

    const messagesEndRef = useRef(null);

    useEffect(() => {
        setMessageList(SAMPLE_MESSAGE);
        console.log(messagesEndRef.current)
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [isPageLoad, userMessage]);

    useEffect(() => {
        setMessageList(SAMPLE_MESSAGE);
        scrollToBottom();
    }, [selectedMessage]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView?.({
            behavior: 'smooth',
            block: 'end',
        });
    }

    const onHandleSendMessage = () => {
        if (userMessageInput.trim() !== '') {
            const newMessage = new Message(userMessageInput, new Date(), 'Quoc Doan');
            setMessageList((prevMessages) => [...prevMessages, newMessage]);
            setUserMessageInput('');
        }
    };

    const MessageList = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {userMessage.map((message, index) => (
                    <MessageBubble
                        key={index}
                        content={message.content}
                        isUserMessage={message.isUserMessage}
                    />
                ))}
                <div ref={(view) => { messagesEndRef.current = view; setIsPageLoad(true) }} />
            </div>
        );
    };

    if (typeof selectedMessage === 'number' && selectedMessage === -1) {
        return (
            <div className="h-screen flex flex-col items-center justify-center">
                <img src={messageBubbleIcon} alt="Bubble icon" className="w-20 h-20 opacity-20 mb-4" />
                <h1 className="text-3xl opacity-20 font-medium">Start a conversation</h1>
            </div>
        );
    } else {
        return (
            <div className='h-screen flex flex-col justify-between'>
                {/* Header */}
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
                        <button className='w-6 h-6 mr-8'>
                            <img src={phoneIcon} alt="user avatar" />
                        </button>

                        <button className='w-6 h-6 mr-8'>
                            <img src={videoCallIcon} alt="user avatar" />
                        </button>

                        <button className='w-6 h-6 mr-2'>
                            <img src={informationIcon} alt="user avatar" />
                        </button>
                    </div>
                </div>

                {/* Message List */}
                <div className='overflow-auto scrollbar-thin scrollbar-thumb-gray-200' style={{ marginTop: `${MESSAGE_HEADER_HEIGHT}` }}>
                    <MessageList />
                </div>

                {/* Control Bar */}
                <div className='flex items-center justify-start mb-3 mt-2 ml-4'>
                    <button className='flex items-center'>
                        <img src={plusIcon} className='w-5 h-5' />
                    </button>
                    <button className='flex items-center ml-4 mr-4'>
                        <img src={uploadImageIcon} className='w-5 h-5' />
                    </button>
                    <button className='flex items-center mr-4'>
                        <img src={smileIcon} className='w-5 h-5' />
                    </button>
                    <button className='flex items-center'>
                        <img src={micIcon} className='w-5 h-5' />
                    </button>

                    <input
                        type="text"
                        placeholder="Aa..."
                        value={userMessageInput}
                        onChange={(e) => setUserMessageInput(e.target.value)}
                        className="bg-gray-200 bg-opacity-70 h-9 rounded-lg py-2 px-4 outline-none w-4/5 ml-4"
                    />

                    <button className='flex items-center ml-6' onClick={onHandleSendMessage}>
                        <img src={sendIcon} className='w-6 h-6' />
                    </button>
                </div>

            </div>
        );
    }
};

MessageContent.propTypes = {
    selectedMessage: PropTypes.number,
    onlineStatus: PropTypes.bool,
    userName: PropTypes.string,
    messageList: PropTypes.array,
};
