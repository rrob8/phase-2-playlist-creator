import React from "react"
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {Card } from "@mui/material"


function PlaylistSong ({song, onDelete}) {



function handleDelete () {
    onDelete(song)
}

return (
    <Card
    className="article"
    >
    <Link
       className="link"
       to={`/track/${song.id}`}
       >{song.trackName}</Link>

       <Button fullWidth='false' variant='contained' color='secondary'
       onClick={handleDelete}
       >
        Delete 
       </Button>
       </Card>
)
}




export default PlaylistSong