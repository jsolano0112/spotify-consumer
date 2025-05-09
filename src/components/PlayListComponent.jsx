import * as React from "react";
import Box from "@mui/material/Box";
import CarouselComponent from "./CarouselComponent";
import Typography from "@mui/material/Typography";
import { cards } from "../mockdata/cards";
//TODO: call to bringing users playlists


export default function PlayList() {
  const shuffled1 = [...cards].sort(() => 0.5 - Math.random());
  const shuffled2 = [...cards].sort(() => 0.5 - Math.random());

  const subtitleStyle = {
    textAlign: "left",
    ml: 2,
    fontWeight: "bold",
    color: "var(--color-yellow)",
  };

  return (
    <Box
      sx={{
        width: "100%",
        flexGrow: 1,
        display: "flex",
        // alignItems: "center",
        flexDirection: "column",
        minHeight: "300px",
      }}
    >
      {cards.length === 0 ? (
        <>
          <Typography
            variant="overline"
            component="div"
            sx={{
              textAlign: "center",
              fontSize: "2rem",
              color: "var(--color-yellow)",
            }}
          >
            No playlists to display
          </Typography>
        </>
      ) : (
        <>
          <Typography variant="h5" sx={subtitleStyle}>
            Your Playlists
          </Typography>
          <Box>
            <CarouselComponent cards={shuffled1} />
          </Box>

          <Typography variant="h5" sx={subtitleStyle}>
            Lists you'd like to try
          </Typography>
          <Box>
            <CarouselComponent cards={shuffled2} />
          </Box>
        </>
      )}
    </Box>
  );
}
