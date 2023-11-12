import React from "react"
import { Link } from "react-router-dom";


function PlaylistSong ({song, onDelete}) {



function handleDelete () {
    onDelete(song)
}

return (
    <article>
    <Link
       className="link"
       to={`/track/${song.id}`}
       >{song.trackName}</Link>

       <button
       onClick={handleDelete}
       className="delete-button">
        Delete
       </button>
       </article>
)
}




export default PlaylistSong