import {ReactElement} from 'react';
import './SongProgress.css';

export function SongProgress(): ReactElement {
  return (
    <div className='song-progress'>
      <p>0:30</p>
      <div className='progress-outline'>
        <div className='progress' />
      </div>
      <p>4:32</p>
    </div>
  );
}
