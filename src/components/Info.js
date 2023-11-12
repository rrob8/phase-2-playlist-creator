import React from 'react'



function Info ({track}) {

    return (
        <div
        className='info'
        >
        Album: {track.collectionName}

        <img src={track.artworkUrl100} alt='track cover'/>
        </div>
    )
}


export default Info