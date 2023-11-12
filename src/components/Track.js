import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import Info from "./Info";

function Track ({song}) {

    const [track, setTrack] = useState({})
    const [info, setInfo] = useState(false)

   useEffect (()=>{
    setTrack(song)
   },[])


    function handleAdd() {
        fetch(` http://localhost:3000/songs`, {
            method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(track),
      })
    }

    function handleInfo () {
        setInfo(!info)
    }
    
   
        return (
            <article
            >
                <h1>{song.trackName}</h1>
                <p>{song.artistName}, Type: {song.wrapperType}</p>
                <button
                onClick={handleInfo}
                >
                    More Info
                </button>
                <button
                onClick={handleAdd}
                >Add Song</button>
                {info == true? <Info track={track}/> : ''}
            </article>
        )
        
    
}





export default Track