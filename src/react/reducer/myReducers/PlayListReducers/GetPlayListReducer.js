
import InitialState from '../../InitialState'

import * as actionTypes from '../../../action/types/ActionTypes'

export default function GetPlayListReducer(state=InitialState,action){

    switch(action.type){
        case actionTypes.GET_PLAYLIST_FROM_ARTIST:
            return{
                ...state.PlayLists,
                PlayLists:action.payload.playlists
               
            }

        default:
            return state
    }
}