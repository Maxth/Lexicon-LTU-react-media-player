import {ReactElement} from 'react';
import {ISong} from '../../interfaces';
import './Playlistitem.css';

interface IPlaylistItemProps {
  song: ISong;
  isActive: boolean;
}

export function PlaylistItem({
  song,
  isActive,
}: IPlaylistItemProps): ReactElement {
  return (
    <article className={`playlist-item ${isActive ? 'active-song' : ''}`}>
      <img height={'80px'} width={'80px'} src={song.img} />
      <div className='info-container'>
        <h6>{song.artist}</h6>
        <p>{song.title}</p>
      </div>
      <span className='material-symbols-outlined'>play_arrow</span>
    </article>
  );
}
