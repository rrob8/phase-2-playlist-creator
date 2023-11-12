import {Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import NavBar from "../components/NavBar";


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
  return minutes + " minutes " + seconds + " seconds";
}

    return (
        <>
        <header>
            <NavBar/>
        </header>
        <article>
        <h1>{track.trackName}</h1>
        <a href={track.previewUrl}
        target="_blank"
        >Download a clip</a>
        <p>track #: {track.trackNumber} on {track.collectionName}</p>
        <p>Length: {convertTrackTime(track.trackTimeMillis)}</p>
        <p>Artist: {track.artistName}</p>
        <a href={track.artistViewUrl}
        target="_blank"
        >More Music from {track.artistName}</a>
        
        
        
        <img src={track.artworkUrl100}
         
        />
        </article>
        </>
    )
}


export default TrackCard