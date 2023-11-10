import React, { useEffect } from "react";
import NavBar from "../components/NavBar";


function Home () {


    // useEffect (()=> {
    // fetch(`http://localhost:3000/results`)
    // .then(r=> r.json())
    // .then(data=> console.log(data))
    
    // }, [])

    // useEffect (()=> {
    //     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/hel`)
    //     .then(r=>r.json())
    //     .then(data=> console.log(data[0].meanings))
    //     .catch(error=> console.log(`This is an error ${error}`))

    // },[])
    useEffect (()=> {
        fetch(`https://itunes.apple.com/search?term=happy+birthday`)
        .then(r=> r.json())
        .then(data=>console.log(data))
    },[])


    return (
        <div>
        <header><NavBar/></header>
      
        Create a Playlist
        </div>
    )
}





export default Home

