export const globalContextMenuItems: ContextMenuItem[] = [
  { text: 'go to playlist' },
  { text: 'save session' },
];
export const playlistContextMenuItems: ContextMenuItem[] = [
  { text: 'add' },
  { text: 'remove' },
  { text: 'edit' },
];

export class ContextMenuItem {
  text: string;
}
