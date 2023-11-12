import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

import PlaylistSong from "../components/PlaylistSong";

function Playlist () {

const [songs, setSongs] = useState([])

useEffect (()=>{
    fetch(`http://localhost:3000/songs`)
    .then(r=> r.json())
    .then(data=> setSongs(data))
},[])

function onDelete (deletedSong) {
    
    
        fetch(` http://localhost:3000/songs/${deletedSong.id}`,{
            method:'DELETE'
        })
        .then(r=> r.json())
        .then(data=> {
          const newCollection = songs.filter(song => song.id !== deletedSong.id )
        setSongs(newCollection)
      })
          
    
}

return (
    
    <div>
        <header>
        <NavBar/>
    </header>
        Your Playlist
        <ul
        
        >
    {songs.map(song=>
       <PlaylistSong key={song.id} song={song} onDelete={onDelete}/>
       
       
        )} 
         
        </ul>
    </div>
)



}


export default Playlist