import { getSongsAlbums } from "../../api/providerapi";
import { songsAlbumsTypes } from "../types/songsAlbumsTypes";
import { getGenres } from "../../api/providerapi";
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

     const getUserGenres = async () => {
        try {
            const userGenres = await getGenres();
            console.log(userGenres)
            if (userGenres.items) {
                const listGenres = userGenres.items.map((item) => ({
                    id: item.id,
                    genres: item.genres[0],
                }));

                dispatch({
                    type: songsAlbumsTypes.getGenres,
                    payload: listGenres,
                });

                return listGenres;
            } else {
                console.error("No genres found");
                return [];
            }
        } catch (error) {
            console.error("Error fetching genres:", error);
        }
    };

    return { getUserSongsAlbums, getUserGenres };
};
