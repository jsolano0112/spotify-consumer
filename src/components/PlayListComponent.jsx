import * as React from "react";
import Box from "@mui/material/Box";
import CarouselComponent from "./CarouselComponent";
import Typography from "@mui/material/Typography";
import { cards } from "../mockdata/cards";
import { useEffect } from "react";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

export default function PlayList() {
  const [playlists, setPlaylists] = useState([]);
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchUserPlaylists = () => {
      setTimeout(() => {
        setUserPlaylists(cards);
      }, 3000 );
    };

    const fetchPlaylists = () => {
      setTimeout(() => {
        setPlaylists(cards);
        setLoading(false);
      }, 3000 );
    };

    fetchUserPlaylists();
    fetchPlaylists();
  }, []);

  const shuffled1 = [...userPlaylists].sort(() => 0.5 - Math.random());
  const shuffled2 = [...playlists].sort(() => 0.5 - Math.random());

  const subtitleStyle = {
    textAlign: "left",
    ml: 2,
    fontWeight: "bold",
    color: "#FFFFFF",
    
  };

  return (
    <Box
      sx={{
        width: "100%",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: "300px",
      }}
    >
      {loading ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
          <CircularProgress sx={{ color: "#FFFFFF" }} />
          <Typography
            variant="body1"
            sx={{ mt: 2, color: "#FFFFFF" }}
          >
            Loading playlists...
          </Typography>
        </Box>
      ) : (
        <>
          <Typography variant="h5" sx={subtitleStyle}>
            Your Playlists
          </Typography>
          {shuffled1.length === 0 ? (
            <Typography
              variant="overline"
              component="div"
              sx={{
                textAlign: "center",
                fontSize: "1rem",
                color: "var(--color-yellow)",
              }}
            >
              No playlists to display
            </Typography>
          ) : (
            <Box>
              <CarouselComponent cards={shuffled1} />
            </Box>
          )}

          <Typography variant="h5" sx={subtitleStyle}>
            Lists you'd like to try
          </Typography>
          {shuffled2.length === 0 ? (
            <Typography
              variant="overline"
              component="div"
              sx={{
                textAlign: "center",
                fontSize: "1rem",
                color: "var(--color-yellow)",
              }}
            >
              No playlists to display
            </Typography>
          ) : (
            <Box>
              <CarouselComponent cards={shuffled2} />
            </Box>
          )}
        </>
      )}
    </Box>
  );
}