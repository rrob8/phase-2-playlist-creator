
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import NavBar from "../components/NavBar";
import { Download } from "@mui/icons-material";
import { AppBar } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { Launch, MicExternalOn } from "@mui/icons-material"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ClassNames } from "@emotion/react";

function TrackCard () {

    const [track, setTrack ] = useState({});

  const params = useParams();
  const trackId = params.id;
    
  useEffect(() =>{
    fetch(`http://localhost:3000/songs/${trackId}`)
    .then(r => r.json())
    .then(data => setTrack(data))
    .catch(error => console.error(error));
  }, [trackId]); 

console.log(track)

function convertTrackTime(milliseconds) {
  var minutes = Math.floor(milliseconds / 60000);
  var seconds = Math.floor(milliseconds % 60000 / 1000);
  return minutes + " mins " + seconds + " secs";
}

    return (
        <>
        <header>
        <AppBar position='relative'><NavBar/>
        
        </AppBar>
        </header>
        <article>

      
        <h1>{track.trackName} <a href={track.previewUrl}
        target="_blank"
      
        ><Download/></a></h1>
        
       

        
        <div className="wrapper">
        <p>track #: {track.trackNumber} on:{track.collectionName}</p>
        
        <img src={track.artworkUrl100}
         
        />
        </div>
        <p><AccessTimeIcon/> {convertTrackTime(track.trackTimeMillis)}</p>
        
        <p> <MicExternalOn />{track.artistName}</p>
        <ListItemButton component="a" href={track.artistViewUrl}
        target="_blank"
        ><Launch/> {track.artistName} </ListItemButton>
        
        
        
        
        </article>
        </>
    )
}


export default TrackCard