import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import Info from "./Info";
import {button} from '@mui/material'


function Track ({song}) {

    const [track, setTrack] = useState({})
    const [info, setInfo] = useState(false)
    const [addClicked, setAddClicked] = useState(false)
    const [infoClicked, setInfoClicked] = useState(false)

   useEffect (()=>{
    setTrack(song)
   },[])


    function handleAdd() {
        setAddClicked(true)
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
        setInfoClicked(!infoClicked)
    }
    
   
        return (
            <article key={song.trackName}
            >
                <h4>{song.trackName}</h4>
                <p>{song.artistName}, Type: {song.wrapperType}</p>
                <button
                className={infoClicked? 'clicked': 'notClicked'}
                onClick={handleInfo}
                >
                    More Info
                </button>
                <button
                onClick={handleAdd}
                className={addClicked ? 'clicked':'notClicked'}
                >Add Song</button>
                {info == true? <Info track={track}/> : ''}
            </article>
        )
        
    
}





export default Track