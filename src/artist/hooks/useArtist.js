import { getArtist } from "../../api/providerapi";
import { artistTypes } from "../types/artistTypes";

export const useArtist = (dispatch) => {
  const getUserArtist = async () => {
    try {
      const userArtist = await getArtist();

      if (userArtist.artists && userArtist.artists.items.length > 0) {
        const artistDetails = userArtist.artists.items.map((item) => ({
          id: item.id,
          name: item.name,
          image: item.images[0].url,
        }));

        dispatch({
          type: artistTypes.getArtist,
          payload: artistDetails,
        });

        return artistDetails;
      } else {
        console.error("No artist found");
        return [];
      }
    } catch (error) {
      console.error("Error fetching artist:", error);
    }
  };

  return { getUserArtist };
};
