import InitialState from "../../InitialState";

import * as actionTypes from "../../../action/types/ActionTypes";

export default function GetArtistItemsReducer(state = InitialState, action) {
  switch (action.type) {
    case actionTypes.GET_ARTIST_ITEMS:
      return {
        ...state.Artists,
        Artists: action.payload.artists.items
      };

    default:
      return state;
  }
}
