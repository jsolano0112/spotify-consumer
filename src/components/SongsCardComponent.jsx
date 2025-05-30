import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState, Fragment } from "react";
//import { cards } from "../mockdata/cards";
import { FaPlay } from "react-icons/fa";
import Skeleton from "@mui/material/Skeleton";

export const SongsCardComponent = ({
  background,
  color,
  playlistId,
  token,
}) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSongsFromPlaylist = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error fetching playlist tracks:", errorData);
          throw new Error(
            `Error fetching playlist tracks: ${response.statusText}`
          );
        }

        const data = await response.json();
        setSongs(data.items);
        setLoading(false);

        if (data.items.length > 0) {
          console.log("Primer track encontrado:", data.items[0]);
        }
      } catch (error) {
        console.error("Error fetching playlist:", error);
        setLoading(false);
      }
    };

    fetchSongsFromPlaylist();
  }, [playlistId, token]);

  const boxStyle = {
    marginTop: "10px",
    flex: 1,
    borderRadius: "8px",
    padding: 2,
    background: background,
  };

  const playButtonStyle = {
    opacity: 0.6,
    "&:hover": {
      opacity: 1,
    },
  };

  const handlePlaySong = (previewUrl, trackUrl) => {
    if (previewUrl) {
      const audio = new Audio(previewUrl);
      audio.play();
    } else {
      window.open(trackUrl, "_blank");
    }
  };


  if (loading) {
    return (
      <Box
        sx={{
          height: "10vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          color: color,
        }}
      >
        <Box sx={{ width: 300 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      </Box>
    );
  }

  if (songs.length === 0) {
    return (
      <Box
        sx={{
          height: "10vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--accent-color)",
          borderRadius: "10px",
          color: color,
        }}
      >
        <Typography variant="h5" noWrap component="div" fontWeight="bold">
          No Songs in this Playlist
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={boxStyle}>
      <List sx={{ width: "100%" }}>
        {songs.map((song, index) => {
          const track = song.track;
          const previewUrl = track.preview_url;
          const trackUrl = track.external_urls.spotify;

          return (
            <ListItem
              key={track.id}
              alignItems="flex-start"
              sx={{ color: color }}
            >
              <ListItemAvatar>
                <Avatar alt={track.name} src={track.album.images[0]?.url} />
              </ListItemAvatar>
              <ListItemText
                primary={track.name}
                secondary={
                  <Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ display: "inline", color: color }}
                    >
                      {`${track.artists.map((artist) => artist.name).join(", ")} - ${track.album.name}`}
                    </Typography>
                  </Fragment>
                }
              />
              <ListItemAvatar>
                {previewUrl ? (
                  <IconButton
                    sx={playButtonStyle}
                    onClick={() => handlePlaySong(previewUrl, trackUrl)}
                  >
                    <Avatar>
                      <FaPlay />
                    </Avatar>
                  </IconButton>
                ) : (
                  <IconButton
                    sx={playButtonStyle}
                    onClick={() => handlePlaySong(previewUrl, trackUrl)}
                  >
                    <Avatar>
                      <FaPlay />
                    </Avatar>
                  </IconButton>
                )}
              </ListItemAvatar>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
