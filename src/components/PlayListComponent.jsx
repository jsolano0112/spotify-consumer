import Box from "@mui/material/Box";
import { CarouselComponent } from "./CarouselComponent";
import Typography from "@mui/material/Typography";
import { cards } from "../mockdata/cards";
import { useEffect } from "react";
import { useState } from "react";
import { CircularProgressComponent } from "./CircularProgressComponent";

export const PlayList = ({ setMenu, userLogged }) => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchPlaylists = () => {
      setTimeout(() => {
        setPlaylists(cards);
        setLoading(false);
      }, 3000);
    };

    fetchPlaylists();
  }, []);

  const shuffled =  [...playlists].sort(() => 0.5 - Math.random());

  return (
    <Box>
      {loading ? (
        <CircularProgressComponent />
      ) : (
        <>
          {shuffled.length === 0 ? (
            <Typography variant="overline" component="div" className="progress">
              No playlists to display
            </Typography>
          ) : (
            <Box>
              <CarouselComponent cards={shuffled} setMenu={setMenu} />
            </Box>
          )}
        </>
      )}
    </Box>
  );
};
