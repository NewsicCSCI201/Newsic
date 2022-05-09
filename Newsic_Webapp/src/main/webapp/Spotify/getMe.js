import { writeFileSync } from 'fs';
import SpotifyWebApi from 'spotify-web-api-node';
const token = "BQB28I14l0RJ9Vo3yZBYzF_u4Px6pmpcd3VmB_CLjjlrBhHkhvQNhh5fdb-Ddm2R6-GQlP0Tdkq5g7eG_RfSbxJjY4NU7aPSLbhW-6BR-XcSdQlrz-c3ILbTODJPj1K9zFU9vIzV9EeeB76d1F9NEeoFDzyomiIWiQhHnJHzCT3ZzWETHJZSfvb8nmybr9A1JBEKO4tPKCiNMhItQKKBiwyQiE5TXR4LfAlUsBaACVc_1EaGe0kyCWgm4BpFVuP7YN2k-vhGXTeaqct8JKzqF7IPRJGtxQKOEYcFF_zPIjSldgKNF80-";
const carolinesToken = "BQACtBzG9cV_2iSTdZKNr1dTdSO-FRX9GZNcxvH3F5bv8xi4LxZYUt-7V9MGanN5lfvO1t2gwoK_HSpsbM1Ukykjd6lpsy9AULUt8Y3Bxd_nVWhB-KnDSFXjl3DeClFf_viSipcf2lUue7H8567K2ViHyKvZEtyA1RjHbiIV7h3dMxQr1Fl68fKUte_hs4jkscOGhq_TvYt6VybFinDIuNTFuZ3mf_hxpv3JRYGt84ALap2gYZvFmbfVj4Cso0XpEuCmXuEwn9uznpGgzwOaUCUmsF4r-Cmf8W4JbM7aOlGV0FQG_p49";
const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

//GET MY PROFILE DATA
function getMyData() {
  (async () => {
    const me = await spotifyApi.getMe();
    // console.log(me.body);
    // getUserPlaylists(me.body.id);
  spotifyApi.getUser('caroline.silvaaa')
  .then(function(data) {
    console.log('Some information about this user', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

  })().catch(e => {
    console.error(e);
  });
}

//GET MY PLAYLISTS
async function getUserPlaylists(userName) {
  const data = await spotifyApi.getUserPlaylists(userName)

  console.log("---------------+++++++++++++++++++++++++")
  let playlists = []

  for (let playlist of data.body.items) {
    console.log(playlist.name + " " + playlist.id)
    
    let tracks = await getPlaylistTracks(playlist.id, playlist.name);
    // console.log(tracks);

    const tracksJSON = { tracks }
    let data = JSON.stringify(tracksJSON);
    writeFileSync(playlist.name+'.json', data);
  }
}

//GET SONGS FROM PLAYLIST
async function getPlaylistTracks(playlistId, playlistName) {

  const data = await spotifyApi.getPlaylistTracks(playlistId, {
    offset: 1,
    limit: 100,
    fields: 'items'
  })

  // console.log('The playlist contains these tracks', data.body);
  // console.log('The playlist contains these tracks: ', data.body.items[0].track);
  // console.log("'" + playlistName + "'" + ' contains these tracks:');
  let tracks = [];



  for (let track_obj of data.body.items) {
    const track = track_obj.track
    tracks.push(track);
    console.log(track.name + " : " + track.artists[0].name)
  }
  
  console.log("---------------+++++++++++++++++++++++++")
  return tracks;
}

getMyData();