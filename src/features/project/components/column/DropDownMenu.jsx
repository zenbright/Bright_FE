/* eslint-disable react/prop-types */
import {
  LifeBuoy,
  Mail,
  Clock2,
  MessageSquare,
  Trash2,
  PlusCircle,
  UserPlus,
  ArrowDownAz,
  ArrowUpZA,
  ArrowUpDown,
  Pencil,
  Menu,
} from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
// import {useState} from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {useState} from 'react';

export const ColumnDropdownMenu = ({deleteColumn, id, updateColumnTitle}) => {
  const [isRenameDialogOpen, setIsRenameDialogOpen] = useState(false);

  const [updatedTitle, setUpdatedTitle] = useState('');

  const onHandleUpdateTitle = () => {
    if (updatedTitle.trim() !== '') {
      updateColumnTitle(id, updatedTitle.trim());
    }
    setIsRenameDialogOpen(false);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Menu className='mr-2 w-5 h-5 hover:bg-slate-200 hover:rounded-full'/>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Action Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus className="mr-2 h-4 w-4" />
                <span>Add members</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Message</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    <span>More...</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <Clock2 className="mr-2 h-4 w-4" />
              <span>Watch</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <ArrowUpDown className="mr-2 h-4 w-4" />
                <span>Sort by</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <ArrowDownAz className="mr-2 h-4 w-4" />
                    <span>Newest</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ArrowUpZA className="mr-2 h-4 w-4" />
                    <span>Oldest</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setIsRenameDialogOpen(true)}>
            <Pencil className="mr-2 h-4 w-4" />
            <span>Rename</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => {
            deleteColumn(id);
          }}>
            <div className='hover:text-rose-500 flex w-56'>
              <Trash2 className="mr-2 h-4 w-4 " />
              <span>Delete</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Rename Dialog */}
      <Dialog
        open={isRenameDialogOpen}
        onOpenChange={setIsRenameDialogOpen}
        onClose={() => setIsRenameDialogOpen(false)}
      >
        <DialogContent
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onHandleUpdateTitle();
            }
          }}
          className="sm:max-w-[425px]"
        >
          <DialogHeader>
            <DialogTitle>Edit Title</DialogTitle>
            <DialogDescription>
                Make changes to your task container here. Click save when done.
            </DialogDescription>
          </DialogHeader>
          <Input
            id="name"
            placeholder="Input a new title here"
            onChangeCapture={(e) => {
              setUpdatedTitle(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onHandleUpdateTitle();
              }
            }}
          />
          <DialogFooter>
            <Button onClick={() => {
              onHandleUpdateTitle();
            }}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
