import Box from "@mui/material/Box";
import { CarouselComponent } from "./CarouselComponent";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useState } from "react";
import { CircularProgressComponent } from "./CircularProgressComponent";
import { PlaylistContext } from "../playlists/context/PlaylistContext";
import { useContext } from "react";
export const PlayList = ({ setMenu, userLogged }) => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getUserPlaylist, getAllPlaylists } = useContext(PlaylistContext);
  useEffect(() => {
    setLoading(true);

    const fetchPlaylists = async () => {
      setTimeout(async () => {
        let playlists = [];
        if (userLogged) {
          playlists = await getUserPlaylist();
        } else {
          playlists = await getAllPlaylists();
        }
        setPlaylists(playlists);
        setLoading(false);
      }, 3000);
    };

    fetchPlaylists();
  }, []);

  return (
    <Box>
      {loading ? (
        <CircularProgressComponent />
      ) : (
        <>
          {playlists.length === 0 ? (
            <Typography variant="overline" component="div" className="progress">
              No playlists to display
            </Typography>
          ) : (
            <Box>
              <CarouselComponent cards={playlists} setMenu={setMenu} />
            </Box>
          )}
        </>
      )}
    </Box>
  );
};
