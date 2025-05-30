import { getPlayList, getRecentlyPlayedTracks, getSongsFromPlaylist, getTrack } from "../../api/providerapi";
import { getPlaylists, saveCurrentUserPlaylists } from "../../firebase/provider";
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
          by_id: item.owner.id,
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

  const getAllPlaylists = async () => {
    const { playlists, ok, errorMessage } = await getPlaylists();
    if (!ok) {
      const action = {
        type: playListTypes.errors,
        payload: { errorMessage }
      }
      dispatch(action);
      return [];
    }
    //TODO: finish, and add !=== for current user
    const action = {
      type: playListTypes.getAllPlaylists,
      payload: playlists
    }
    dispatch(action);
    return playlists;
  };


  const getPlayedTracks = async () => {
    const tracks = await getRecentlyPlayedTracks();
    if (tracks.items) {
      const tracksDetails = tracks.items.map((item) => ({
        name: item.track.name,
        id: item.track.id,
        album: item.track.album?.name,
        artist: item.track.artists?.[0]?.name || "Unknown Artist",
        albumImage: item.track.album?.images?.[0]?.url || "",
        time: formatDuration(item.track.duration_ms) || 0,
      }));
      const action = {
        type: playListTypes.getRecentlyPlayedTracks,
        payload: tracksDetails
      }
      dispatch(action);
      return tracksDetails.slice(-5);
    }
    const action = {
      type: playListTypes.errors,
      payload: {}
    }
    dispatch(action);
    return [];
  };

  const getSong = async (id) => {
    const track = await getTrack(id);
    if (track.name) {
      const detail = {
        name: track.name,
        artist: track.artists[0].name,
        previewURL: track.preview_url
      }
      const action = {
        type: playListTypes.getRecentlyPlayedTracks,
        payload: detail
      }
      dispatch(action);
      return detail
    }
    const action = {
      type: playListTypes.errors,
      payload: {}
    }
    dispatch(action);
    return [];

  }


  const getSongs = async (id) => {
    const songs = await getSongsFromPlaylist(id)
    if (songs.items) {
      const songsDetails = songs.items.map((item) => ({
        name: item.track.name,
        id: item.track.id,
        album: item.track.album?.name,
        artist: item.track.artists?.[0]?.name || "Unknown Artist",
        albumImage: item.track.album?.images?.[0]?.url || "",
        time: formatDuration(item.track.duration_ms) || 0,
      }));
      const action = {
        type: playListTypes.getRecentlyPlayedTracks,
        payload: songsDetails
      }
      dispatch(action);
      return songsDetails.slice(-5);
    }
    const action = {
      type: playListTypes.errors,
      payload: {}
    }
    dispatch(action);
    return [];

  };
  const formatDuration = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
  return { getUserPlaylist, getAllPlaylists, getPlayedTracks, getSong, getSongs };
};

