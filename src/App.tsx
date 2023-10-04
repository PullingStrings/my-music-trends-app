import "./App.css"
import {
  insertSong,
  fetchAllSongs,
  updateSongPopularity,
  deleteSong,
} from "./serverSide/songController"
// import { insertArtist } from "./serverSide/artistController"

function App() {
  // insertSong()
  fetchAllSongs()
  // deleteSong(21)

  return (
    <>
      <div>Hello World</div>
    </>
  )
}

export default App
