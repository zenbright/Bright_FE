/* eslint-disable react/prop-types */
import {OverlayScrollbarsComponent} from 'overlayscrollbars-react';
import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {useRef} from 'react';
import {useState} from 'react';
import {SAMPLE_ATTACHMENT_LIST} from './test/values';
import {File, AudioLines} from 'lucide-react';
import {Input} from '@/components/ui/input';
import {Plus} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {RESULT_NOT_FOUND} from '../../../../../config/constants/strings.global';

// Image preview
const ImagePreview = ({attachment}) => (
  <img src={attachment.url} className='w-28 h-full rounded-md' alt={attachment.title} />
);

// Video preview
const VideoPreview = ({attachment}) => (
  <video controls className='w-28 h-full rounded-md' preload="metadata">
    <source src={attachment.url} type={attachment.mimeType} />
    Your browser does not support the video tag.
  </video>
);

// Document Preview
const DocsPreview = () => {
  return (
    <div className='w-28 h-full rounded-md bg-gray-300 flex items-center justify-center flex-col text-gray-500 text-center gap-1' >
      <File className='w-10 h-10' />
      <div className='font-semibold text-xs'>Document</div>
    </div>
  );
};

// Audio Preview
const AudioPreview = () => {
  return (
    <div className='w-28 h-full rounded-md bg-gray-300 flex items-center justify-center flex-col text-gray-500' >
      <AudioLines className='w-10 h-10 ' />
      <div className='font-bold'>Audio</div>
    </div>
  );
};

export const AttachmentList = ({attachments = SAMPLE_ATTACHMENT_LIST}) => {
  const attachmentListRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(window.innerHeight);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [filteredList, setFilteredList] = useState(attachments);

  // Calculate remaining height
  useEffect(() => {
    const updateMaxHeight = () => {
      const attachmentListElement = document.getElementById('attachment-list');
      if (attachmentListElement) {
        const rect = attachmentListElement.getBoundingClientRect();
        const remainingHeight = window.innerHeight - rect.top;
        setMaxHeight(remainingHeight);
      }
    };

    updateMaxHeight();

    window.addEventListener('resize', updateMaxHeight);

    return () => {
      window.removeEventListener('resize', updateMaxHeight);
    };
  }, []);

  // Searching
  useEffect(() => {
    const filteredList = attachments.filter((attachment) => attachment.title.toLowerCase().includes(searchPhrase));

    setFilteredList(filteredList);
  }, [searchPhrase]);

  return (
    <div>
      {/* Search bar */}
      <div className='flex justify-between'>
        <Input
          className='mb-2 w-72 border-gray-400/80'
          type="text"
          placeholder="search for a file..."
          value={searchPhrase}
          onChange={(e) => {
            setSearchPhrase(e.target.value);
          }}/>

        <Button className='border-gray-400/80' variant="outline" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <OverlayScrollbarsComponent
        element="div"
        options={{scrollbars: {autoHide: 'move'}}}
        style={{maxHeight: `${maxHeight}px`}}
        ref={attachmentListRef}
        id="attachment-list"
      >
        <div className='flex flex-col gap-2 mb-2'>
          {
            filteredList.length === 0 &&
           <div className='flex self-center mt-2 font-semibold text-gray-800'>{RESULT_NOT_FOUND}</div>
          }

          {filteredList.length > 0 &&
          filteredList.map((attachment, index) => (
            <div
              onClick={() => {
                window.location.href = attachment.url;
              }}
              key={index}
              className='hover:bg-slate-100 h-20 rounded-md flex gap-4 font-bold hover:cursor-pointer'>
              {/* Preview */}
              {
                attachment.mimeType.startsWith('image/') ? (
                <ImagePreview attachment={attachment} />
                ) : attachment.mimeType.startsWith('video/') ? (
                <VideoPreview attachment={attachment} />
                ) : attachment.mimeType.startsWith('audio/') ? (
                <AudioPreview />
                ) : (
                <DocsPreview />
                )
              }

              {/* Metadata */}
              <div className='text-xs text-gray-400 font-normal'>
                <div className='font-semibold text-base text-black'>{attachment.title}</div>
                <div>{attachment.mimeType}</div>
                <div>Uploaded: {attachment.date}</div>
                <div>By {attachment.uploadedBy}</div>
              </div>
            </div>
          ))}
        </div>
      </OverlayScrollbarsComponent>
    </div>
  );
};

AttachmentList.propTypes = {
  attachments: PropTypes.arrayOf(PropTypes.object),
};
