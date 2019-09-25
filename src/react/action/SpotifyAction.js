import * as actionTypes from "./types/ActionTypes";
import axios from "axios";

function GetArtistItemsSuccess(dispatch,Artists) {
  return dispatch({
    type: actionTypes.GET_ARTIST_ITEMS,
    payload:Artists
  });
}

function GetPlayListItemsFromArtistSuccess(dispatch,PlayLists) {
  return dispatch({
    type: actionTypes.GET_PLAYLIST_ITEMS_FROM_ARTIST,
    payload:PlayLists
  })
}

function GetArtistSuccess(dispatch,Artists) {
  return dispatch({
    type: actionTypes.GET_ARTIST,
    payload:Artists

  });
}

function GetPlaylistFromArtistSuccess(dispatch,PlayLists) {
  return dispatch({
    type: actionTypes.GET_PLAYLIST_FROM_ARTIST,
    payload:PlayLists
  });
}

function GetRequest(musician = "", type = "") {
  const url =
    "https://api.spotify.com/v1/search?q=" + musician + "&type=" + type;
  const authToken =
    "BQDO_8n2UOhCAe92QBQdS80ePrjLSI9BEV1J-Ufhn53BTBe1kIF92by4-o84FvWj-mTIrDRSA18WakEN0Yq8ooCb6moWllveRbUvnm3Pg8G890Acd0HFrWyeTAu-EP4VX_6olst_TwcYkZrnBlZ7Q_Z6BjJjLZzHETPOJTTb-B0yST1MLSXK";

  const config = {
    headers: {
      Authorization: "Bearer " + authToken
    }
  };

  return axios.get(url, config);
}

//function RequestHandler(method){
//return GetRequest().then(response=>{
//    method()
//    console.log(response.data)
// })
//}

export function GetArtistItems(dispatch,musician,type="artist") {
  return GetRequest(musician,type).then(response => {
    GetArtistItemsSuccess(dispatch,response.data)
   
  });
}

export function GetArtist(dispatch,musician,type="artist") {
  return GetRequest(musician,type).then(response => {
    GetArtistSuccess(dispatch,response.data)
    
  });
}

export function GetPlayList(dispatch,musician,type="playlist") {
  return GetRequest(musician,type).then(response => {
    GetPlaylistFromArtistSuccess(dispatch,response.data)
    
  });
}

export function GetPlayListItems(dispatch,musician,type="playlist") {
  return GetRequest(musician,type).then(response => {
   GetPlayListItemsFromArtistSuccess(dispatch,response.data)
    
  });
}
