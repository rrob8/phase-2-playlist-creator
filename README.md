Hello and welcome to my phase 2 final project for the Flatiron school.
Run 'npm start' in the terminal to bring up the page.
Also run 'npm run server' to start watching the db.json file (Note: you must be running this on port 3001.
Refer to the package.json file, 'scripts' and double check that you find "server": "json-server --watch db.json -p 3001")

This page is a playlist creator (for a single playlist). It performs an inital fetch to 
 https://itunes.apple.com/, which you can find more about here: https://performance-partners.apple.com/search-api

The initial fetch is set to search for files which include "welcome". Since there are song files and audiobook files 
returned from any searches, I've included the "type" below the title of the file.

Clicking the 'more info' button will display the album name and image

Clicking Add Song will add the track to the playlist database, with the button turning purple to show that you have already 
added the song at least once.

A song can be search for by typing a term in the search bar and clicking search

Click on the playlist icon on the navbar to bring you over to your playlist

Each track should be displayed. The title of the track is in hyperlink styling to show you can click on it to be brought to 
the track's page. This displays the title, a download icon, track number on the album, album length, the artist name, and 
finally a link icon that will bring you to the artist music.apple.com artist page in a new tab.

If you did not find a song listed while on the Home page, there is a form here to add a song name along with artist and album to 
the playlist. After clicking Add Song, a message will appear to let you know that your song was added to the playlist.
You must at the minimum add a track title or the page will alert you to do so. The form will clear out once a song is submitted.


![Alt text](<phase-2 finalproject.gif>)



