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
import { cards } from "../mockdata/cards";
import { FaPlay } from "react-icons/fa";

export const SongsCardComponent = () => {
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allSongs, setAllSongs] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchUserHeardSongs = () => {
      setTimeout(() => {
        setUserPlaylists(cards);
        setLoading(false);
      }, 3000);
    };

    fetchUserHeardSongs();
  }, []);

  useEffect(() => {
    if (!loading) {
      const songs = userPlaylists.reduce((acc, playlist) => {
        if (playlist.songs && Array.isArray(playlist.songs)) {
          acc.push(...playlist.songs);
        }
        return acc;
      }, []);
      setAllSongs(songs.slice(-5));
    }
  }, [userPlaylists, loading]);

  const boxStyle = {
    marginTop: "10px",
    flex: 1,
    borderRadius: "8px",
    padding: 2,
    background: "var(--color-yellow)",
  };

  const playButtonStyle = {
    opacity: 0.6,
    "&:hover": {
      opacity: 1,
    },
  };

  return (
    <Box sx={boxStyle}>
      <Typography variant="h6" component="div" sx={{ color: "text.secondary" }}>
        The last 5 songs you listened to...
      </Typography>
      {loading ? (
        <Typography
          variant="body1"
          component="div"
          sx={{ color: "text.secondary" }}
        >
          Loading songs...
        </Typography>
      ) : allSongs.length === 0 ? (
        <Typography
          variant="overline"
          component="div"
          sx={{
            textAlign: "center",
            fontSize: "0.8rem",
            color: "text.secondary",
          }}
        >
          No Songs to display
        </Typography>
      ) : (
        <List sx={{ width: "100%" }}>
          {allSongs.map((song) => (
            <ListItem
              key={song.id}
              alignItems="flex-start"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.08)",
                },
              }}
            >
              <ListItemText
                primary={song.title}
                secondary={
                  <Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: "text.primary", display: "inline" }}
                    >
                      {song.artist}
                    </Typography>
                    {` - ${song.album} (${song.time})`}
                  </Fragment>
                }
              />
              <ListItemAvatar>
                <IconButton sx={playButtonStyle}>
                  <Avatar>
                    <FaPlay />
                  </Avatar>
                </IconButton>
              </ListItemAvatar>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};
