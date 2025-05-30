import { getPlayList } from "../../api/providerapi";
import { playListTypes } from "../types/playlistTypes";

export const usePlaylist = (dispatch) => {
  const getUserPlaylist = async () => {
    try {
      const userPlaylist = await getPlayList();

      if (userPlaylist.items) {
        const playlistDetails = userPlaylist.items.map((item) => ({
          name: item.name,
          id: item.id,
        }));
        
        dispatch({
          type: playListTypes.getCurrentUserPlaylist,
          payload: playlistDetails,
        });

        return playlistDetails;
      } else {
        console.error("No playlists found");
        return [];
      }
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }
  };

  return { getUserPlaylist };
};
