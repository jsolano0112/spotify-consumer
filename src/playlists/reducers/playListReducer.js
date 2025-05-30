import { playListTypes } from "../types/playlistTypes";

export const playListReducer = (state, action) => {
  switch (action.type) {
    case playListTypes.getCurrentUserPlaylist:
      return {
        ...state,
        artist: action.payload,
      };
    case playListTypes.getAllPlaylists:
      return {
        ...state,
        artist: action.payload,
      };
    case playListTypes.getRecentlyPlayedTracks:
      return {
        ...state,
        errorMessage: action.payload
      };
    case playListTypes.errors:
      return {
        ...state,
        errorMessage: action.payload.errorMessage
      };
    default:
      break
  }
};
