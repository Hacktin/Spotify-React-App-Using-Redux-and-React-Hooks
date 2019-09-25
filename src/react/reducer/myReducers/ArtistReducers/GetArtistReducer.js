import InitialState from "../../InitialState";

import * as actionTypes from "../../../action/types/ActionTypes";

export default function GetArtistReducer(state = InitialState, action) {
  switch (action.type) {
    case actionTypes.GET_ARTIST:
      return {
        ...state.Artists,
        Artists: action.payload.artists
      };

    default:
      return state;
  }
}
