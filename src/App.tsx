import {Navbar, Player, Playlist} from './components';

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Playlist />
        <Player />
      </main>
    </>
  );
}
