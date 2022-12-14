const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three" },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"},
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"}
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {

  for (let key in library.playlists) {
    let playlistNumber = key;
    let name = library.playlists[key].name;
    let numberTracks = library.playlists[key].tracks.length;
    console.log(`${playlistNumber}: ${name} - ${numberTracks} tracks`);
  }
};
printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  for (let key in library.tracks) {
    let trackNumber = key;
    let artist = library.tracks[key].artist;
    let name = library.tracks[key].name;
    let album = library.tracks[key].album;
    console.log(`${trackNumber}: ${name} by ${artist} (${album})`);
  }
};
printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let playlistName = library.playlists[playlistId].name;
  let numberTracks = library.playlists[playlistId].tracks.length;
  console.log(`${playlistId}: ${playlistName} - ${numberTracks} tracks`);
  for (let key of library.playlists[playlistId].tracks) {
    let songTitle = library.tracks[key].name;
    let artist = library.tracks[key].artist;
    let album = library.tracks[key].album;
    console.log(`${key}: ${songTitle} by ${artist} (${album})`);
  }
};
printPlaylist('p01');

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  console.log(`${trackId} was added to playlist ${playlistId}. ${playlistId} tracks: ${library.playlists[playlistId].tracks}`);
};
addTrackToPlaylist('t03', 'p01');

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
  let uniqueID = generateUid();
  library.tracks[uniqueID] = {
    id: uniqueID,
    album: album,
    artist: artist,
    name: name
  };
  console.log(library.tracks);
};
addTrack("Starboy", "Weekend", "Starboy");

// adds a playlist to the library
const addPlaylist = function(name) {
  let uniqueID = generateUid();
  library.playlists[uniqueID] = {
    id: uniqueID,
    name: name,
    tracks: []
  };
};
addPlaylist("DISCO VIBE");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}