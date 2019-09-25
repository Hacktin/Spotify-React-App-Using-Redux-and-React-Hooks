import {combineReducers} from 'redux'

import GetArtistReducer from './myReducers/ArtistReducers/GetArtistReducer'
import GetArtistItemsReducer from './myReducers/ArtistReducers/GetArtistItemsReducer'
import GetPlayListReducer from './myReducers/PlayListReducers/GetPlayListReducer'
import GetPlayListItemsReducer from './myReducers/PlayListReducers/GetPlayListItemsReducer'

const combineReducer=combineReducers({

    GetArtistReducer,
    GetArtistItemsReducer,
    GetPlayListReducer,
    GetPlayListItemsReducer
})

export default combineReducer