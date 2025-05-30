import { getSongsAlbums } from "../../api/providerapi";
import { songsAlbumsTypes } from "../types/songsAlbumsTypes";

export const useSongsAlbums = (dispatch) => {
    const getUserSongsAlbums = async () => {
        try {
            const userSongsAlbums = await getSongsAlbums();

            if (userSongsAlbums.items) {
                const songsAlbumsDetails = userSongsAlbums.items.map((item) => ({
                    name: item.track.name,
                    id: item.track.id,
                    artist: item.track.artists[0].name,
                    albumImage: item.track.album.images[0].url,
                    albumName: item.track.album.name
                }));

                dispatch({
                    type: songsAlbumsTypes.getSongsAlbums,
                    payload: songsAlbumsDetails,
                });

                return songsAlbumsDetails;
            } else {
                console.error("No playlists found");
                return [];
            }
        } catch (error) {
            console.error("Error fetching playlists:", error);
        }
    };

    return { getUserSongsAlbums };
};
