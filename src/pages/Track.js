import React, {useState} from "react";
import {Link} from 'react-router-dom'
import TrackCard from '../components/TrackCard'

function Track ({song}) {


    // const [track, setTrack] = useState({})

    // const params = useParams();
    
  
    // const trackId = params.id;


    function handleAdd() {

    }

    
   
        return (
            <div
            
            >
                <h1>{song.trackName}</h1>
                <p>{song.artistName}, Type: {song.wrapperType}</p>
                <Link
                to={`/track/${song.trackId}`}
                >More Info</Link>
                <button
                onClick={handleAdd}
                >Add Song</button>
            </div>
        )
        
    
}





export default Track