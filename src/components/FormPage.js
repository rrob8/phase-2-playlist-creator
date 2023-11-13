import { Alert } from "@mui/material"
import e from "cors"
import React from "react"
import { useState} from "react"


function FormPage () {

  const [ newSong, setNewSong] = useState({})
  const [ song, setSong] =useState('')
  


  function handleSubmit(e) {
    e.preventDefault()
    if ( song !== '' ) {
    fetch(` http://localhost:3000/songs`, {
      method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    trackName:song
  }),
})
.then (r => r.json())
.then (data=> setNewSong(data))

    }

    else {
      alert('Please type a song name!')
    }

}



function handleChange (e) {
  setSong(e.target.value)
}

return (
  <div>
  
    <form
    onSubmit={handleSubmit}
    >
      <input
      placeholder="Didn't find your song?"
      value={song}
      onChange={handleChange}
      >
      </input>
    <button>
      Add Song
    </button>
    </form>
    {newSong.trackName !== undefined ? `${newSong.trackName} was added!` : ''}
</div>
)

}

export default FormPage
