import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useState, useEffect, useContext } from "react";
import { PlaylistContext } from "../context/PlaylistContext";
import { CircularProgress } from "@mui/material";
export const CardToReproduce = () => {
  const [song, setSong] = useState(null);
  const { getPlayedTracks, getSong } = useContext(PlaylistContext);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  useEffect(() => {
    const fetchUserHeardSong = () => {
      setTimeout(async () => {
        const songs = await getPlayedTracks();
        setSong(songs[0]);
        setLoading(false);
      }, 3000);
    };

    fetchUserHeardSong();
  }, []);

  if (loading) {
    return (
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 200,
        }}
      >
        <CircularProgress sx={{ color: "black" }} />
      </Card>
    );
  }

  const handlePlay = async (id) => {
    const detail = await getSong(id);
    if (detail.previewURL) {
      const audio = new Audio(detail.previewURL);
      audio.play();
    } else {
      console.warn("No preview URL available.");
    }
  };

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {song?.name}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            {song?.artist}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon
              sx={{ height: 38, width: 38 }}
              onClick={() => handlePlay(song.id)}
            />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
      {song?.albumImage ? (
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={song.albumImage}
          alt="Album cover"
        />
      ) : (
        <div
          style={{
            width: 151,
            height: 151,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f0f0f0",
            fontStyle: "italic",
          }}
        >
          Listen to your first song!
        </div>
      )}
    </Card>
  );
};
