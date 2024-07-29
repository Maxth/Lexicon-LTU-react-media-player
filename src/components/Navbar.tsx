import {ReactElement} from 'react';
import './Navbar.css';

export function Navbar(): ReactElement {
  return (
    <nav className='navbar'>
      <span className='material-symbols-outlined'>arrow_back_ios</span>
      <h1>The Playlist</h1>
      <span className='material-symbols-outlined'>more_vert</span>
    </nav>
  );
}
