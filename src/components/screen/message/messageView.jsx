import { Message } from "./message";
import image from '../../../assets/images/rmitlogo.png';
import { useState } from "react";
import { MessageContent } from "./messageContent";
import messageNew from '../../../assets/images/writing.png';

export const MessageView = () => {
    const [selectedMessage, setSelectedMessage] = useState(-1);

    const MessageList = () => {
        const list = Array.from({ length: 10 }, (_, i) => (
            <Message key={i} onClick={() => setSelectedMessage(i)} isSelected={selectedMessage == i ? true : false} sentTime={'12:00 PM'} userName={`Mudoker + ${i}`} profileImage={image} message={'Helloooooooooooooooooooooooooooooooooo'} />
        ));
        return list;
    };

    return (
        <div className="flex">
            {/* Nav bar */}
            <div className="w-1/12 h-100 bg-black"/>

            <div className="flex-col flex-shrink-0 border-r">
                <div className="text-3xl font-medium p-4 flex items-center justify-between">
                    <h1>Message</h1>
                    <button type="button" className="w-6 h-6">
                        <img src={messageNew} alt="writing" />
                    </button>
                </div>

                {/* Message list */}
                <MessageList />
            </div>

            <div className="flex w-screen items-center justify-center h-screen">
                <MessageContent selectedMessage={selectedMessage} />
            </div>
        </div>
    );
};
