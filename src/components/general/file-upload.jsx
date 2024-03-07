import {Button} from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {Upload} from 'lucide-react';
import {useRef} from 'react';

export function FileUpload() {
  const fileSelectInput = useRef(null);

  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{'Upload your attachments'}</DialogTitle>
          <DialogDescription>
            { 'Everyone with access to this task can see the attached files.'}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col justify-center w-full h-44 items-center border-dashed border-2 border-black/40 font-semibold text-black/60">
            <Upload className='mb-5 h-7 w-7' />

            <div className='flex gap-1 mb-1'>
              <div
                className='font-bold hover:cursor-pointer hover:underline text-black'
                onClick={() => fileSelectInput.current.click()}
              >
                {'Click to upload'}
              </div>

              {'or'}

              <div>
                {'drop your files here'}
              </div>

              <input type='file' id='file' ref={fileSelectInput} style={{display: 'none'}}/>


            </div>

            <div className='text-sm'>
              {'(Maximum file size: 25MB)'}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">{'Upload'}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
