import {ISong} from './interfaces';
import songImg from './assets/song-image.png';

export const songs: ISong[] = [...Array(10).keys()].map(n => ({
  id: n,
  artist: `artist${n}`,
  title: 'title',
  img: songImg,
}));
