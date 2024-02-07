/* eslint-disable react/prop-types */
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';

export function BoardTabContextMenu({title}) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        {title}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcut>F5</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              Save Page As...
            </ContextMenuItem>
            <ContextMenuItem>Manage member</ContextMenuItem>
            <ContextMenuItem>Setting</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Report</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Make Default
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Duplicate</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuItem inset>
          <div className='hover:text-rose-500 w-64'>
          Delete
          </div>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
