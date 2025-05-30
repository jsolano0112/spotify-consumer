import { artistTypes } from "../types/artistTypes";

export const artistReducer = (state, action) => {
  switch (action.type) {
    case artistTypes.getArtist:
      return {
        ...state,
        playlist: action.payload,
      };
    default:
      break
  }
};
