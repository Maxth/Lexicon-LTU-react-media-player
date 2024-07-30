import {Navbar, Player, Playlist} from './components';
import {songs} from './data';

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Playlist />
        <Player song={songs[1]} />
      </main>
    </>
  );
}
