
// Using uuid v1 to generate ids
import { useState, useEffect } from "react";
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from "./NewSongForm";

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: "Almost Home", id: uuidv1() },
        { title: "Memory Gospel", id: uuidv1() },
        { title: " This Wild Darkness", id: uuidv1()},
    ]);

    const[age,setAge] = useState(20)

    const handleAddSong = (newSong) => {
        setSongs([...songs,{ title: newSong, id: uuidv1()}]);
    }

    /* useEffect is executed when UI is rendered */
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    useEffect (() => {  // only songs are affected by useEffect
        console.log("useEffect hook ran", songs)
    }, [songs]);

    useEffect (() => { // only age is affcted by useEffect
        console.log("useEffect hook ran", age)
    }, [age]);



    return (
        <div className="song-list">
            <ul>
                {songs.map( (song) => {
                    const {id, title} = song
                    return (<li key={id}>{title}</li> );
                })}
            </ul>

           <NewSongForm handleAddSong={handleAddSong}/>

           <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
        </div>
    );
}

export default SongList;
