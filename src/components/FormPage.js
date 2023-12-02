
import React from "react"
import { useState} from "react"
import { Typography } from "@mui/material";

function FormPage ({onAdd, newSong}) {

  
  const [ songData, setSongData] =useState({
    trackName:'',
    artistName:'',
    collectionName:''
  })
  


  function handleSubmit(e) {
    e.preventDefault()
    if ( songData.trackName !== '' ) {
    
      onAdd(songData)
      setSongData({
        trackName:'',
        artistName:'',
        collectionName:''
      })


    }

    else {
      alert('Please type a song name!')
    }

}



function handleChange (e) {
  const { name, value } = e.target;
    setSongData((songData) => ({
      ...songData,
      [name]: value,
    }));
}

return (
  <div>
  
    <form
    onSubmit={handleSubmit}
    >
      <input
      placeholder="song name"
      value={songData.trackName}
      name='trackName'
      onChange={handleChange}
      />
      <input
      name='artistName'
      placeholder="artist"
      value={songData.artistName}
      onChange={handleChange}
      />
      <input
       placeholder="album"
      name='collectionName'
      value={songData.collectionName}
      onChange={handleChange}
      />
      
    <button>
      Add Song
    </button>
    </form>
    <Typography
        variant="h6"
        align="center"
        color="textSecondary"
        gutterBottom
      >
        Didn't find your song? Enter one above
      </Typography>
    {newSong.trackName !== undefined ? `\'${newSong.trackName}\' was added!` : ''}
</div>
)

}

export default FormPage
