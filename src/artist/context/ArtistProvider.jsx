import { useReducer } from "react";
import { ArtistContext } from "./ArtistContext";
import { artistReducer } from "../reducers/artistReducer";
import { useArtist } from "../hooks/useArtist";

const authInitialState = {
  artist: [], 
  errorMessage: null,
};

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return {
      errorMessage: null,
      artist: [],
    };
  }
  return authInitialState;
};

export const ArtistProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(artistReducer, authInitialState, init);
  const { getUserArtist } = useArtist(dispatch);

  return (
    <ArtistContext.Provider value={{ userState, getUserArtist }}>
      {children}
    </ArtistContext.Provider>
  );
};
