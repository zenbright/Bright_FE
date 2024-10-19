import { faker } from '@faker-js/faker';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useState } from 'react';



import image from '../assets/image.png';
import { MessagePreviewTab } from '../components/message-preview-tab';
import { MessageContent } from './message-content';


export const MessagePage = () => {
  const [selectedMessage, setSelectedMessage] = useState(-1);
  const [selectedUserMessage, setSelectedUserMessage] = useState('');
  const [searchPhrase, setSearchPhrase] = useState('');

  const isContain = (str, search) => {
    const normalizedStr = str.toLowerCase();
    const normalizedSearch = search.toLowerCase();
    for (const char of normalizedSearch) {
      if (normalizedStr.indexOf(char) === -1) {
        return false;
      }
    }
    return true;
  };

  const handleSearchInputChange = event => {
    const value = event.target.value;
    setSearchPhrase(value);
  };

  const MessageList = () => {
    const filteredList = Array.from({ length: 10 }, (_, i) => (
      <MessagePreviewTab
        key={i}
        onClick={() => {
          setSelectedMessage(i);
          setSelectedUserMessage(`Mudoker ${i}`);
        }}
        isSelected={selectedMessage === i}
        sentTime={'12:00 PM'}
        userName={faker.internet.userName()}
        profileImage={faker.image.avatar()}
        message={'Helloooooooooooooooooooooooooooooooooo'}
      />
    )).filter(
      message =>
        searchPhrase === '' || isContain(message.props.userName, searchPhrase)
    );

    if (filteredList.length === 0) {
      return (
        <div className="flex items-center justify-center">
          <p className="text-center p-5 font-medium opacity-60">
            {'No results found'}
          </p>
        </div>
      );
    }
    return filteredList;
  };

  return (
    <div className="flex w-screen overflow-hidden">
      {/* Message section */}
      <div className="flex flex-col border-r h-screen">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-100/80 hover:bg-gray-200/80 h-10 rounded-md mt-5 px-4 outline-none mx-2 mb-1 text-sm"
          onChange={handleSearchInputChange}
        />

        <OverlayScrollbarsComponent
          element="div"
          options={{ scrollbars: { autoHide: 'auto' } }}
          defer
          className="flex-1 overflow-auto"
        >
          <MessageList />
        </OverlayScrollbarsComponent>
      </div>

      {/* Message Content */}
      <div className="w-full h-screen overflow-auto">
        <MessageContent
          selectedMessage={selectedMessage}
          onlineStatus={false}
          userName={selectedUserMessage}
        />
      </div>
    </div>
  );
};
