import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { allPlayLists } from "../../mockdata/allPlayList";
import { Card, CardActionArea, Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SongsCardComponent } from "../../components/SongsCardComponent";
import AllPlayListsComponent from "../../components/AllPlayListsComponent";

export default function PlayListPage() {
  const [value, setValue] = useState(null);

  const handleClose = () => setValue(null);

  return (
    <>
    {/* TODO: Improve color field */}
      <div className="box">
        <Box className="search-bar">
          <Autocomplete
            freeSolo
            className="field"
            disablePortal
            options={allPlayLists}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Playlist"
                variant="filled"
                sx={{ borderRadius: "10px" }}
              />
            )}
          />
        </Box>

        <AllPlayListsComponent playlists={allPlayLists} setValue={setValue} />

        {/* Modal Drawer a la derecha */}
        <Drawer anchor="right" open={!!value} onClose={handleClose}>
          <Box sx={{ width: 450, padding: 2 }}>
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>

            {value && (
              <>
                <Card sx={{ borderRadius: "10px", mt: 4 }}>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      background: "var(--accent-color)",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: "100%", maxWidth: 100, mb: 1 }}
                      image={value.image}
                      alt={value.label}
                    />

                    <Typography
                      variant="body1"
                      color="text.primary"
                      align="center"
                    >
                      {value.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      {value.description}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                      mt={1}
                    >
                      {value.followers} Followers
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                      mt={1}
                    >
                      Created {value.createdDate} • Updated {value.updatedDate}
                    </Typography>
                  </CardContent>
                </Card>

                <Box sx={{ padding: 2 }}>
                  <SongsCardComponent background={"var(--accent-color)"} />
                </Box>
              </>
            )}
          </Box>
        </Drawer>
      </div>
    </>
  );
}
