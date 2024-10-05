import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Upload } from 'lucide-react';
import { useRef } from 'react';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Check } from 'lucide-react';

import {
  ALLOWED_EXTENSIONS,
  FILE_SIZE_EXCEED,
  FILE_UNSUPPORTED,
} from '../../config/constants/strings.global';
import { FailureAlert } from './alert-failure';

export function FileUpload() {
  const fileSelectInput = useRef(null);
  const [isUploadFailed, setIsUploadFailed] = useState(false);
  const [error, setError] = useState();
  const [selectedFiles, setSelectedFiles] = useState([]); // Array for multiple files
  const [uploadStatuses, setUploadStatuses] = useState({}); // Track each file's upload status
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback(acceptedFiles => {
    const newFiles = [];
    const newUploadStatuses = {};

    acceptedFiles.forEach(file => {
      const extension = file.name.split('.').pop().toLowerCase();

      if (ALLOWED_EXTENSIONS.includes(extension) && file.size <= 25000000) {
        newFiles.push(file);
        newUploadStatuses[file.name] = { progress: 0, status: 'ready' }; // Initialize each file's status
        setError(null);
        setIsUploadFailed(false);
      } else {
        if (file.size > 25000000) {
          setError({
            title: FILE_SIZE_EXCEED.TITLE,
            des: FILE_SIZE_EXCEED.DES,
          });
        } else {
          setError({
            title: FILE_UNSUPPORTED.TITLE,
            des: FILE_UNSUPPORTED.DES,
          });
        }
        setIsUploadFailed(true);
      }
    });

    setSelectedFiles(prevFiles => [...prevFiles, ...newFiles]); // Add new files to the array
    setUploadStatuses(prevStatuses => ({
      ...prevStatuses,
      ...newUploadStatuses,
    }));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true, // Allow multiple files to be dropped
  });

  const handleUpload = () => {
    if (!selectedFiles.length) return;

    setIsUploading(true);

    selectedFiles.forEach((file, index) => {
      const fakeUpload = setInterval(() => {
        setUploadStatuses(prevStatuses => {
          const newProgress = prevStatuses[file.name].progress + 10;
          if (newProgress >= 100) {
            clearInterval(fakeUpload);
            return {
              ...prevStatuses,
              [file.name]: { progress: 100, status: 'complete' },
            };
          }
          return {
            ...prevStatuses,
            [file.name]: { progress: newProgress, status: 'uploading' },
          };
        });
      }, 500);
    });
  };

  return (
    <Dialog open={true}>
      <DialogContent
        className={`sm:max-w-[425px] ${isDragActive ? 'bg-slate-300' : 'bg-background'} `}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">
            {'Upload your attachments'}
          </DialogTitle>
          <DialogDescription>
            {'Everyone with access to this task can see the attached files.'}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div
            className={`flex flex-col justify-center w-full h-44 items-center border-dashed border-2 border-drag_box font-semibold text-foreground/60 ${
              isDragActive ? 'border-blue-500' : ''
            }`}
            {...getRootProps()}
          >
            <Upload className="mb-5 h-7 w-7" />

            <div className="flex gap-1 mb-1">
              <div
                className={`font-bold hover:cursor-pointer hover:underline text-foreground/70`}
                onClick={() => fileSelectInput.current.click()}
              >
                {'Click to upload'}
              </div>

              {'or'}

              <div>{'drop your files here'}</div>

              <input {...getInputProps()} />
            </div>

            <div className="text-sm">
              {'(Maximum file size: 25MB, multiple files allowed)'}
            </div>
          </div>

          {/* Show selected files */}
          {selectedFiles.length > 0 && (
            <div className="font-semibold text-sm text-foreground max-w-[375px]">
              {selectedFiles.map((file, index) => (
                <div key={index} className="pt-2">
                  <div className='border rounded-xl px-2 py-3'>
                    {/* Show file name and status */}
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-ellipsis truncate w-[80%]">
                        {file.name}
                      </p>
                      <div className="text-sm ">
                        {uploadStatuses[file.name]?.status === 'complete'
                          ? <Check className='w-4 h-4'/>
                          : `${uploadStatuses[file.name]?.progress}%`}
                      </div>
                    </div>
                    {/* Show progress bar */}
                    <Progress
                      value={uploadStatuses[file.name]?.progress || 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <DialogFooter>
          <Button
            type="submit"
            onClick={handleUpload}
            disabled={selectedFiles.length === 0 || isUploading}
          >
            {isUploading ? 'Uploading...' : 'Upload'}
          </Button>
        </DialogFooter>

        {isUploadFailed && (
          <FailureAlert
            open={isUploadFailed}
            setOpen={setIsUploadFailed}
            title={error.title}
            des={error.des}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
