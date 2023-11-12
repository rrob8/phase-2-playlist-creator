import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Search from '../components/Search'
import Track from '../components/Track'




function Home () {

    const [songs, setSongs] = useState([])
    const [searchTerm, setSearchTerm] = useState('Welcome')

    useEffect (()=> {
        fetch(` https://itunes.apple.com/search?term=${searchTerm}`)
       
       
        .then(r=> r.json())
        .then(data=>setSongs(data.results))
    },[searchTerm])

    function submit (term) {
        setSearchTerm(term)
        
    }
    console.log(songs)

    return (
        <div>
        <header><NavBar/></header>
        <Search onSubmit={submit}/>
        Search for a song to add to your playlist
        {songs.map(song=>
            <Track key={song.trackId} song={song}/>)}  
        </div>
    )
}





export default Home

