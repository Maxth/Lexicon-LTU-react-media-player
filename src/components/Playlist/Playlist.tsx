import {ReactElement} from 'react';
import './Playlist.css';
import {songs} from '../../data';
import {PlaylistItem} from './PlaylistItem';

export function Playlist(): ReactElement {
  return (
    <section className='playlist'>
      {songs.map((song, idx) => (
        <PlaylistItem key={song.id} song={song} isActive={idx === 1} />
      ))}
    </section>
  );
}
