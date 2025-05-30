import { useState, useEffect } from "react";
import { getPlayList } from "../../api/providerapi";

export const usePlayListInfo = (dispatch) => {
  const [loading, setLoading] = useState(true);
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState(null);

  // Función para obtener las playlists desde Spotify
  const fetchPlaylists = async () => {
    try {
      setLoading(true);
      const userPlaylist = await getPlayList();

      if (userPlaylist && userPlaylist.items) {
        const playlistDetails = userPlaylist.items.map((item) => ({
          name: item.name,
          id: item.id,
          image: item.images[0]?.url || "", // Aseguramos que haya una imagen, si no, dejamos un string vacío
          description: item.description || "No description available",
          songsCount: item.tracks.total, // Número de canciones
          totalTime: item.tracks.total
            ? `${Math.floor(item.tracks.total / 60)} min`
            : "Unknown", // Tiempo total (aproximado)
        }));
        setPlaylists(playlistDetails);
      } else {
        setPlaylists([]);
      }
    } catch (error) {
      setError("Error fetching playlists.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  return { loading, playlists, error };
};
