import { Message } from "./message";
import image from '../../../assets/images/rmitlogo.png';
import { useState } from "react";
import { MessageContent } from "./messageContent";
import messageNew from '../../../assets/images/writing.png';

export const MessageView = () => {
    const [selectedMessage, setSelectedMessage] = useState(-1);

    const MessageList = () => {
        const list = Array.from({ length: 10 }, (_, i) => (
            <Message key={i} onClick={() => setSelectedMessage(i)} isSelected={selectedMessage === i} sentTime={'12:00 PM'} userName={`Mudoker + ${i}`} profileImage={image} message={'Helloooooooooooooooooooooooooooooooooo'} />
        ));
        return list;
    };

    return (
        <div className="flex h-screen">
            {/* Nav bar */}
            <div className="w-1/12 h-screen bg-black" />

            {/* Message section */}
            <div className="flex-col border-r h-screen">
                <div className="text-3xl font-medium p-4 flex items-center justify-between h-20">
                    <h1>Message</h1>
                    <button type="button" className="w-6 h-6">
                        <img src={messageNew} alt="writing" />
                    </button>
                </div>

                {/* Make the message list scrollable */}
                <div className="overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200" style={{ maxHeight: 'calc(100vh - 80px)' }}>
                    <MessageList />
                </div>
            </div>

            {/* Message Content */}
            <div className="flex w-screen items-center justify-center">
                <MessageContent selectedMessage={selectedMessage} />
            </div>
        </div>
    );
};