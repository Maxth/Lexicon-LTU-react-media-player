import {ReactElement} from 'react';
import './NowPlaying.css';

interface INowPlayingProps {
  title: string;
  artist: string;
}

export function NowPlaying({artist, title}: INowPlayingProps): ReactElement {
  return (
    <div className='now-playing'>
      <span className='material-symbols-outlined'>add_circle</span>
      <div className='info'>
        <h6>{artist}</h6>
        <p>{title}</p>
      </div>
      <span className='material-symbols-outlined'>favorite</span>
    </div>
  );
}
