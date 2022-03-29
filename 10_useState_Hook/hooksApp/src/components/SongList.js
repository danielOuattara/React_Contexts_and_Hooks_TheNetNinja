// import { useState } from "react";

// const SongList = () => {
//   const [songs, setSongs] = useState([
//     { title: "Almost Home", id: 1 },
//     { title: "Memory Gospel", id: 2 },
//     { title: "This Wild Darkness", id: 3 },
//   ]);

//   const handleAddSong = () => {
//     setSongs([...songs, { title: "A New Song", id: songs.length + 1 }]);
//   };

//   return (
//     <div className="song-list">
//       <ul>
//         {songs.map((song) => {
//           return <li key={song.id}>{song.title}</li>;
//         })}
//       </ul>
//       <button onClick={handleAddSong}> Add Song </button>
//     </div>
//   );
// };

// export default SongList;

// -----------------------------------------------------------

// import { useState } from "react";

// const SongList = () => {
//   const [songs, setSongs] = useState([
//     { title: "Almost Home", id: 1 },
//     { title: "Memory Gospel", id: 2 },
//     { title: " This Wild Darkness", id: 3 },
//   ]);

//   const [newSong, setNewSong] = useState("");

//   const handleNewSongTitle = (event) => {
//     setNewSong(event.target.value);
//   };

//   const handleAddSong = () => {
//     if (!newSong) {
//       return;
//     }
//     setSongs([...songs, { title: newSong, id: songs.length + 1 }]);
//     setNewSong("");
//   };

//   return (
//     <div className="song-list">
//       <input
//         type="text"
//         placeholder="Enter a title"
//         onChange={handleNewSongTitle}
//         value={newSong}
//       />
//       <button onClick={handleAddSong} className="">Add Song</button>
//       <ul>
//         {songs.map((song) => {
//           const { id, title } = song;
//           return <li key={id}>{title}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default SongList;

// -----------------------------------------------------------

// Using uuid v1 to generate ids

import { useState } from "react";
import { v1 as uuidv1 } from "uuid";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Almost Home", id: uuidv1() },
    { title: "Memory Gospel", id: uuidv1() },
    { title: " This Wild Darkness", id: uuidv1() },
  ]);

  const [newSong, setNewSong] = useState("");

  const handleNewSongTitle = (event) => {
    setNewSong(event.target.value);
  };

  const handleAddSong = () => {
    setSongs([...songs, { title: newSong, id: uuidv1() }]);
    setNewSong("");
  };

  return (
    <div className="song-list">
      <input
        type="text"
        placeholder="Enter a title"
        onChange={handleNewSongTitle}
        value={newSong}
      />

      <button onClick={handleAddSong}> Add Song </button>
      <ul>
        {songs.map((song) => {
          const { id, title } = song;
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </div>
  );
};

export default SongList;
