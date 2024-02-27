/* eslint-disable max-len */
import {MessagePreviewTab} from '../components/previewTab';
import image from '../../../assets/images/rmitlogo.png';
import {useState} from 'react';
import {MessageContent} from './message-content';
import messageNew from '../assets/writing.png';
import {MESSAGE_TAB_WIDTH, NAV_BAR_WIDTH} from '../../../lib/constants/size.global';

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

  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchPhrase(value);
  };

  const MessageList = () => {
    const filteredList = Array.from({length: 10}, (_, i) => (
      <MessagePreviewTab
        key={i}
        onClick={() => {
          setSelectedMessage(i);
          setSelectedUserMessage(`Mudoker ${i}`);
        }}
        isSelected={selectedMessage === i}
        sentTime={'12:00 PM'}
        userName={`Mudoker ${i}`}
        profileImage={image}
        message={'Helloooooooooooooooooooooooooooooooooo'}
      />
    )).filter((message) => searchPhrase === '' || isContain(message.props.userName, searchPhrase));

    if (filteredList.length === 0) {
      return (
        <div className="flex items-center justify-center">
          <p className="text-center p-5 font-medium opacity-60">No results found</p>
        </div>

      );
    }
    return filteredList;
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Nav bar */}
      <div className="h-screen bg-black" style={{width: `${NAV_BAR_WIDTH}`}} />

      {/* Message section */}
      <div className="flex-col border-r h-screen" style={{width: `${MESSAGE_TAB_WIDTH}`}}>
        <div className="text-3xl font-medium p-4 flex items-center justify-between h-20">
          <h1>Message</h1>
          <button type="button" className="w-6 h-6">
            <img src={messageNew} alt="writing" />
          </button>
        </div>

        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-200 h-10 rounded-lg py-2 px-4 outline-none w-full mx-2 mb-1"
            onChange={handleSearchInputChange}
          />
        </div>

        {/* Make the message list scrollable */}
        <div className="overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200" style={{maxHeight: 'calc(100vh - 124px)'}}>
          <MessageList />
        </div>
      </div>

      {/* Message Content */}
      <div style={{width: '72vw'}}>
        <MessageContent selectedMessage={selectedMessage} onlineStatus={false} userName={selectedUserMessage} />
      </div>
    </div>
  );
};
