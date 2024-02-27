/* eslint-disable react/prop-types */
import {OverlayScrollbarsComponent} from 'overlayscrollbars-react';
import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {useRef} from 'react';
import {useState} from 'react';
import {SAMPLE_ATTACHMENT_LIST} from './test/values';
import {File, AudioLines} from 'lucide-react';

// Component for rendering an image preview
const ImagePreview = ({attachment}) => (
  <img src={attachment.url} className='w-28 h-full rounded-md' alt={attachment.title} />
);

// Component for rendering a video preview
const VideoPreview = ({attachment}) => (
  <video controls className='w-28 h-full rounded-md' preload="metadata">
    <source src={attachment.url} type={attachment.mimeType} />
    Your browser does not support the video tag.
  </video>
);

const DocsPreview = ({attachment}) => {
  return (
    <div className='w-28 h-full rounded-md bg-gray-300 flex items-center justify-center flex-col text-gray-500 text-center gap-1' >
      <File className='w-10 h-10' />
      <div className='font-bold'>{attachment.mimeType.split('/')[1]}</div>
    </div>
  );
};

const AudioPreview = ({attachment}) => {
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

  useEffect(() => {
    const updateMaxHeight = () => {
      const attachmentListElement = document.getElementById('attachment-list');
      if (attachmentListElement) {
        const rect = attachmentListElement.getBoundingClientRect();
        const remainingHeight = window.innerHeight - rect.top;
        setMaxHeight(remainingHeight);
      }
    };

    updateMaxHeight(); // Initial calculation

    window.addEventListener('resize', updateMaxHeight);

    return () => {
      window.removeEventListener('resize', updateMaxHeight);
    };
  }, []);

  return (
    <OverlayScrollbarsComponent
      element="div"
      options={{scrollbars: {autoHide: 'move'}}}
      style={{maxHeight: `${maxHeight}px`}}
      ref={attachmentListRef}
      id="attachment-list"
    >
      <div className='flex flex-col gap-2 mb-2'>
        {attachments.map((attachment, index) => (
          <div
            onClick={() => {
              window.location.href = attachment.url;
            }}
            key={index}
            className='hover:bg-slate-100 h-20 rounded-md flex gap-4 font-bold hover:cursor-pointer'>
            {
            attachment.mimeType.startsWith('image/') ? (
                <ImagePreview attachment={attachment} />
                ) : attachment.mimeType.startsWith('video/') ? (
                <VideoPreview attachment={attachment} />
                ) : attachment.mimeType.startsWith('audio/') ? (
                <AudioPreview attachment={attachment} />
                ) : (
                <DocsPreview attachment={attachment} />
                )
            }
            <div className='text-xs text-gray-400 font-normal'>
              <div className='font-semibold text-lg text-black'>{attachment.title}</div>
              <div className='text-xs'>{attachment.mimeType}</div>
              <div>{attachment.date}</div>
              <div>Uploaded by {attachment.uploadedBy}</div>
            </div>
          </div>
        ))}
      </div>
    </OverlayScrollbarsComponent>
  );
};

AttachmentList.propTypes = {
  attachments: PropTypes.arrayOf(PropTypes.object),
};
