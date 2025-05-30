import { useReducer } from "react";
import { useSongsAlbums } from "../hooks/useSongsAlbums";
import { songsAlbumsReducer } from "../reducers/songsAlbumsReducer";
import { SongsAlbumnContext } from "./SongsAlbumContext";

const authInitialState = {
  songsalbums: [], 
  errorMessage: null,
};

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return {
      errorMessage: null,
      songsalbums: [],
    };
  }
  return authInitialState;
};

export const SongsAlbumProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(songsAlbumsReducer, authInitialState, init);
  const { getUserSongsAlbums, getUserGenres } = useSongsAlbums(dispatch)
  return (
    <SongsAlbumnContext.Provider value={{ userState, getUserSongsAlbums, getUserGenres }}>
      {children}
    </SongsAlbumnContext.Provider>
  );
};
