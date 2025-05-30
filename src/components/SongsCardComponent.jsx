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
import { FaPlay } from "react-icons/fa";
import Skeleton from "@mui/material/Skeleton";
import { useContext } from "react";
import { PlaylistContext } from "../playlists/context/PlaylistContext";
export const SongsCardComponent = ({ background, color, userLogged }) => {
  const [loading, setLoading] = useState(false);
  const [allSongs, setAllSongs] = useState([]);
  const { getPlayedTracks } = useContext(PlaylistContext);

  useEffect(() => {
    setLoading(true);
    const fetchUserHeardSongs = () => {
      setTimeout(async () => {
        let songs = [];
        if(userLogged){
          songs = await getPlayedTracks();
        }
        setAllSongs(songs);
        setLoading(false);
      }, 3000);
    };

    fetchUserHeardSongs();
  }, []);

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

  if ((!allSongs || allSongs.length === 0) && !loading && !userLogged) {
    return (
      <>
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
            No Songs Saved Yet!
          </Typography>
        </Box>
      </>
    );
  }

  return (
    <Box sx={boxStyle}>
      {loading ? (
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
      ) : allSongs.length === 0 ? (
        <Typography
          variant="overline"
          component="div"
          sx={{
            textAlign: "center",
            fontSize: "0.8rem",
            color: color,
          }}
        >
          No Songs to display
        </Typography>
      ) : (
        <List sx={{ width: "100%" }}>
          {allSongs.map((song, index) => (
            <ListItem
               key={`${song.id}-${index}`} 
              alignItems="flex-start"
              sx={{
                color: color,
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.08)",
                },
              }}
            >
              <ListItemAvatar>
                <Avatar alt={song.album} src={song.albumImage} />
              </ListItemAvatar>
              <ListItemText
                primary={song.name}
                secondary={
                  <Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ display: "inline", color: color }}
                    >
                      {`${song.artist} - ${song.album} (${song.time})`}
                    </Typography>
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
