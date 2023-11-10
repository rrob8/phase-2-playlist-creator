import React, {useState} from "react";
import {useParams} from 'react-router-dom'


function Track ( ) {

    const [track, setTrack] = useState({})

    const params = useParams();
    
  
    const trackId = params.id;

   
        return (
            <div>
                Track page
            </div>
        )
        
    
}





export default Track