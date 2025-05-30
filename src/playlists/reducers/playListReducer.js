import { playListTypes } from "../types/playlistTypes";

export const playListReducer = (state, action) => {
  switch (action.type) {
    case playListTypes.getCurrentUserPlaylist:
      return {
        ...state,
        artist: action.payload,
      };
    default:
      break
  }
};
