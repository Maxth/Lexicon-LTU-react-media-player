import {ReactElement} from 'react';
import './ControlPanel.css';

export function ControlPanel(): ReactElement {
  return (
    <div className='control-panel'>
      <span className='material-symbols-outlined'>repeat</span>
      <div className='control-btns'>
        <span className='material-symbols-outlined'>fast_rewind</span>
        <span className='material-symbols-outlined play'>play_circle</span>
        <span className='material-symbols-outlined'>fast_forward</span>
      </div>
      <span className='material-symbols-outlined'>shuffle</span>
    </div>
  );
}
