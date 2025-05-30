import { getGenres } from "../../api/providerapi";
import { songsAlbumsTypes } from "../types/songsAlbumsTypes";

export const useGenres = (dispatch) => {
    const getUserGenres = async () => {
        try {
            const userGenres = await getGenres();

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

    return { getUserGenres };
};
