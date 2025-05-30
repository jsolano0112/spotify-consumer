import { songsAlbumsTypes } from "../types/songsAlbumsTypes";

export const songsAlbumsReducer = (state, action) => {
  switch (action.type) {
    case songsAlbumsTypes.getSongsAlbums:
      return {
        ...state,
        songsalbums: action.payload,
      };
      case songsAlbumsTypes.getGenres:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      break
  }
};
