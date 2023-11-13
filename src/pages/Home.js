import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Search from '../components/Search'
import Track from '../components/Track'
import { Typography, AppBar, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container,  } from "@mui/material";
import FormPage from '../components/FormPage'







function Home () {



     
    
    const [songs, setSongs] = useState([])
    const [searchTerm, setSearchTerm] = useState('Welcome')

    useEffect (()=> {

    if (searchTerm !=='') {
        fetch(` https://itunes.apple.com/search?term=${searchTerm}`)
       
       
        .then(r=> r.json())
        .then(data=>setSongs(data.results))
    }

    else {
        alert('Please type a song name!')
      }

    },[searchTerm])

    function submit (term) {
        setSearchTerm(term)
        
    }
    console.log(songs)

    return (
        <>
        <CssBaseline/>
        <AppBar position='relative'><NavBar/>
        
        </AppBar>

        
        <main>
            <div> 
                <Container maxWidth='sm'>
                    
       <Typography variant='h4' align="center" color='textPrimary' gutterBottom>
        Create your own playlist
        
        </Typography>
        <div className="wrapper">
        <Search  onSubmit={submit}/>
        <FormPage/>
        </div>
                <div>
                 
                        
                    {songs.map(song=>
                    <Grid item>
            <Track key={song.trackId} song={song}/>
                    </Grid>
                    )}                      

                    
                </div>
         
                 </Container>
            </div>
        </main>
        </>
    )
}





export default Home

