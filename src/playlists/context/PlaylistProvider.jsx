import { useReducer } from "react";
import { usePlaylist } from "../hooks/usePlaylist";
import { PlaylistContext } from "./PlaylistContext";
import { playListReducer } from "../reducers/playListReducer";

const authInitialState = {
  playlist: [],
  errorMessage: null,
};

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return {
      errorMessage: null,
      playlist: [],
    };
  }
  return authInitialState;
};

export const PlaylistProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(
    playListReducer,
    authInitialState,
    init
  );
  const { getUserPlaylist, getAllPlaylists, getPlayedTracks, getSong } =
    usePlaylist(dispatch);

  return (
    <PlaylistContext.Provider
      value={{
        userState,
        getUserPlaylist,
        getAllPlaylists,
        getPlayedTracks,
        getSong,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};
