import { faker } from '@faker-js/faker';
import { format } from 'date-fns';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useMemo, useState } from 'react';

import { MessagePreviewTab } from '../components/message-preview-tab';
import { MessageContent } from './message-content';

const FakeMessages = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  userName: faker.internet.userName(),
  profileImage: faker.image.avatar(),
  message: faker.lorem.sentence(),
  sentTime: faker.date.recent(),
}));

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

  const filteredList = useMemo(() => {
    return FakeMessages.filter(
      message =>
        searchPhrase === '' || isContain(message.userName, searchPhrase)
    ).map(message => (
      <MessagePreviewTab
        key={message.id}
        onClick={() => {
          setSelectedMessage(message.id);
          setSelectedUserMessage(message.userName);
        }}
        isSelected={selectedMessage === message.id}
        sentTime={format(message.sentTime, 'hh:mm a')}
        userName={message.userName}
        profileImage={message.profileImage}
        message={message.message}
      />
    ));
  }, [searchPhrase, selectedMessage]);

  return (
    <div className="flex w-screen overflow-hidden">
      {/* Message section */}
      <div className="flex flex-col border-r h-screen w-1/4">
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
          {filteredList.length === 0 ? (
            <div className="flex items-center justify-center w-full">
              <p className="text-center font-medium opacity-60 w-full mt-4">
                {'No results found'}

                {/* Placeholder */}
                <MessagePreviewTab
                  key={''}
                  onClick={() => {
                    setSelectedMessage('');
                    setSelectedUserMessage('');
                  }}
                  isSelected={''}
                  sentTime={''}
                  userName={''}
                  profileImage={''}
                  message={''}
                />
              </p>
            </div>
          ) : (
            filteredList
          )}
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
