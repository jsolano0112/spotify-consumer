import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import PlayList from "../../components/PlayListComponent";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import SongListComponent from "../../components/SongListComponent";

import CarouselCard from "../../components/CarouselCardComponent";

import { allPlayLists } from "../../mockdata/allPlayList";

import { Card, CardActionArea } from "@mui/material";
import AllPlayListsComponent from "../../components/AllPlayListsComponent";

export default function PlayListPage() {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery("(min-width: 0px)");

  const columnBoxStyle = {
    flex: 1,
    background: "var(--color-yellow)",
    borderRadius: "8px",
    padding: 2,
  };

  const [value, setValue] = useState(null);

  return (
    <>
      <Box height={100} />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
          
        }}
      >
        <Autocomplete
          disablePortal
          options={allPlayLists}
          sx={{ width: 300, background: "#F7B801", borderRadius: "10px"  }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Playlist" variant="filled" sx={{borderRadius: "10px"}} color="warning"/>}
        />
        {/*<TextField value={value}></TextField>
      {value && <h1 style={{ color: '#fff' }}>{value}</h1>}
      */}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        {value && (
          <>
            <Box>
              <Box sx={{}}>
                <Card sx={{ borderRadius: "10px" }}>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      background: "#7678ED",
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
              </Box>

              <Box
                sx={{
                  padding: 2,
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <SongListComponent playlist={value} />
              </Box>
            </Box>
          </>
        )}
      </Box>

      <AllPlayListsComponent playlists={allPlayLists} setValue={setValue} />

      <Box
        sx={{
          display: "flex",
          gap: 1,
          padding: 2,
          flexDirection: isSmallScreen ? "column-reverse" : "row",
        }}
      >
        {/* 
        <Box
          sx={[
            columnBoxStyle,
            {
              minHeight: "500px",
              width: isSmallScreen ? "100%" : "auto",
              flex: isMediumScreen ? 1 : 1,
            },
          ]}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Lists you'd like to try
          </Typography>
          <div style={{ flexGrow: 1, overflow: "hidden" }}>
            <PlayList />
          </div>
        </Box>
          */}
      </Box>
    </>
  );
}
