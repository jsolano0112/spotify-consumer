import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { allPlayLists } from "../mockdata/allPlayList";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";

function SongListComponent({ playlist }) {
  console.log("PLAYLIST: ", playlist);
  if (!playlist || !playlist.songs || !Array.isArray(playlist.songs)) {
    return (
      <>
        <div>No songs</div>
      </>
    );
  }
  return (
    <>
      <List sx={{ width: "100%", bgcolor: "#7678ED", borderRadius: "10px" }}>
        {playlist.songs.map((song) => (
          <>
            <Fragment key={song.id}>
              <ListItem
                alignItems="flex-start"
                sx={{
                  background: "#7678ED",
                  "&:hover": {
                    bgcolor: "#6467E5",
                  },
                }}
                secondaryAction={
                  <>
                    <IconButton edge="end" aria-label="play">
                      <PlayArrowIcon />
                    </IconButton>
                  </>
                }
              >
                <ListItemAvatar>
                  <Avatar alt={song.title} src={playlist.image} />
                </ListItemAvatar>

                <ListItemText
                  primary={song.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: "text.primary", display: "inline" }}
                      >
                        {playlist.label}
                      </Typography>
                      <br />
                      {song.album}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider
                variant="inset"
                component="li"
                color="black"
                sx={{ background: "black" }}
              />
            </Fragment>
          </>
        ))}
      </List>
    </>
  );
}

export default SongListComponent;
