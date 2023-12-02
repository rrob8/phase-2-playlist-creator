import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { AppBar } from "@mui/material";
import PlaylistSong from "../components/PlaylistSong";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import FormPage from '../components/FormPage'


function Playlist() {
  const [songs, setSongs] = useState([]);
  const [ newSong, setNewSong] = useState({})

 
  useEffect(() => {
    fetch(`http://localhost:3001/songs`)
      .then((r) => r.json())
      .then((data) => setSongs(data ));
  }, []);
  

  function onDelete(deletedSong) {
    fetch(` http://localhost:3001/songs/${deletedSong.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => {
        const newCollection = songs.filter(
          (song) => song.id !== deletedSong.id
        );
        setSongs(newCollection);
      });
  }

  function onAdd (newSongData) {

    fetch(` http://localhost:3001/songs`, {
      method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newSongData),
})
.then (r => r.json())

setNewSong(newSongData)
setSongs([...songs, newSongData])




  }


  return (
    <div>
      <header>
        <AppBar position="relative">
          <NavBar />
        </AppBar>
      </header>
      
      <Typography
        variant="h4"
        align="center"
        color="textSecondary"
        gutterBottom
      >
        Your Playlist
      </Typography>
      
      <FormPage  onAdd={onAdd} newSong={newSong}   />
      <div>
      
        <Grid container direction="column" spacing={2} justify="center">
          {songs.map((song) => (
            <Grid item>
              <PlaylistSong key={song.id} song={song} onDelete={onDelete} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Playlist;
