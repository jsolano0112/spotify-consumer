import { getPlayList } from "../../api/providerapi";
import { saveCurrentUserPlaylists } from "../../firebase/provider";
import { playListTypes } from "../types/playlistTypes";

export const usePlaylist = (dispatch) => {
  const getUserPlaylist = async () => {
    try {
      const userPlaylist = await getPlayList();
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (userPlaylist.items) {
        const playlistDetails = userPlaylist.items.map((item) => ({
          name: item.name,
          id: item.id,
          description: item.description,
          images: item.images[0],
          by: item.owner.display_name,
          public: item.public,
          href: item.href,
          songs: item.tracks.total
        }));
      await saveCurrentUserPlaylists(playlistDetails, storedUser.id)

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
