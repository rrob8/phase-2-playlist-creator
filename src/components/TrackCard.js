import {Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import NavBar from "../components/NavBar";


function TrackCard () {

    const [track, setTrack ] = useState({});

  const params = useParams();
  const trackId = params.id;
    
  useEffect(() =>{
    fetch(`https://itunes.apple.com/lookup?id=${trackId}`)
    .then(r => r.json())
    .then(data => setTrack(data.results))
    .catch(error => console.error(error));
  }, [trackId]); 



    return (
        <>
        <header>
            <NavBar/>
        </header>
        <article>
        <h1>{track.trackName}</h1>
        </article>
        </>
    )
}


export default TrackCard