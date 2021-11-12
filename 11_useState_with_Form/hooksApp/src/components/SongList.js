
// Using uuid v1 to generate ids
import { useState } from "react";
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from "./NewSongForm";

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: "Almost Home", id: uuidv1() },
        { title: "Memory Gospel", id: uuidv1() },
        { title: " This Wild Darkness", id: uuidv1()},
    ]);

    const handleAddSong = (newSong) => {
        setSongs([...songs,{ title: newSong, id: uuidv1()}]);
    }

    return (
        <div className="song-list">
            <ul>
                {songs.map( (song) => {
                    const {id, title} = song;
                    return (<li key={id}>{title}</li> );
                })}
            </ul>
           <NewSongForm handleAddSong={handleAddSong}/>
        </div>
    );
}

export default SongList;
