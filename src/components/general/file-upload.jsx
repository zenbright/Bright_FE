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
import { Upload, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Check } from 'lucide-react';
import { FailureAlert } from './alert-failure';
import { useFileUpload } from '@/lib/system-service/file-upload';
import { useDispatch, useSelector } from 'react-redux';
import { removeFile, selectFileQueue, clearFiles } from '@/config/slice/file-slice';
import { useFileSelection } from '@/hooks/file-upload/file-selection';
import { useUploadStatuses } from '@/hooks/file-upload/upload-status';

export function FileUpload() {
  const dispatch = useDispatch();
  const fileQueue = useSelector(selectFileQueue);
  const fileSelectInput = useRef(null);
  const {
    selectedFiles,
    error,
    isUploadFailed,
    onDrop,
    setError,
    setIsUploadFailed,
  } = useFileSelection();
  const {
    uploadStatuses,
    handleProgress,
    markAsComplete,
    removeStatus,
    clearStatuses,
  } = useUploadStatuses();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStarted, setUploadStarted] = useState(false);

  const { mutateAsync } = useFileUpload(handleProgress); // Use the custom hook

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      onDrop(acceptedFiles); // Use the onDrop function from useFileSelection
    },
    multiple: true, // Allow multiple files to be dropped
  });

  const handleUpload = async () => {
    if (!fileQueue.length) return;

    setIsUploading(true);
    setUploadStarted(true);

    const filesToUpload = fileQueue.filter(file => uploadStatuses[file.name]?.status !== 'complete');

    try {
      await mutateAsync(filesToUpload.map(file => ({ file })));

      filesToUpload.forEach((file) => {
        markAsComplete(file.name);
      });
    } catch (uploadError) {
      setIsUploadFailed(true);
      setError({ title: 'Upload Failed', des: uploadError.message });
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveFile = (fileName) => {
    dispatch(removeFile(fileName)); // Remove file from Redux store
    removeStatus(fileName); // Remove status from local state
  };

  const handleClose = () => {
    dispatch(clearFiles()); // Clear all files from Redux store
    clearStatuses(); // Clear all upload statuses
    setUploadStarted(false); // Reset upload started state
  };

  const allFilesUploaded = fileQueue.length > 0 && fileQueue.every(file => uploadStatuses[file.name]?.status === 'complete');

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

            <div className="mb-1 flex gap-1">
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
          {fileQueue.length > 0 && (
            <div className="font-semibold text-sm overflow-auto max-h-[300px] text-foreground max-w-[375px]">
              {fileQueue.map((file, index) => (
                <div key={index} className="pt-2">
                  <div className='border rounded-xl px-2 py-2'>
                    {/* Show file name and status */}
                    <div className="flex justify-between items-center">
                      <p className="text-ellipsis truncate w-[80%]">
                        {file.name}
                      </p>
                      <div className="flex items-center gap-2">
                        {uploadStarted && (
                          <div className="text-sm ">
                            {uploadStatuses[file.name]?.status === 'complete'
                              ? <Check className='w-4 h-4'/>
                              : `${uploadStatuses[file.name]?.progress || 0}%`}
                          </div>
                        )}
                        <Button
                          className="rounded-full"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveFile(file.name)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    {/* Show progress bar */}
                    {uploadStarted && (
                      <Progress
                        value={uploadStatuses[file.name]?.progress || 0}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <DialogFooter>
          <Button
            type="submit"
            onClick={allFilesUploaded ? handleClose : handleUpload}
            disabled={isUploading || fileQueue.length === 0}
          >
            {isUploading ? 'Uploading...' : allFilesUploaded ? 'Close' : 'Upload'}
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