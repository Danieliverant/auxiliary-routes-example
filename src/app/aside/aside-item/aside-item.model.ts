export class AsideItem {
  id: number;
  text: string;
  url: string;
}

export const globalAsideItems: AsideItem[] = [
  {
    id: 1,
    text: 'Home',
    url: '/'
  },
  {
    id: 2,
    text: 'Playlist',
    url: '/playlist'
  },
];
