import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";

function AllPlayListsComponent({ playlists, setValue }) {
  //const handleOpen = () => setValue(playlists);

  const [loading, setLoading] = useState(false);
  const [userPlaylists, setUserPlaylists] = useState([]);

  useEffect(() => {
    setLoading(true);
    const ferchUserPlayLists = () => {
      setTimeout(() => {
        setUserPlaylists(playlists);
        setLoading(false);
      }, 3000);
    };
    ferchUserPlayLists();
  }, [playlists]);

  if (loading) {
    return (
      <>
        <Box
          sx={{
            height: "10vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress sx={{ color: "#F7B801", margin: "10px" }} />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              color: "#F7B801",
            }}
            fontWeight="bold"
          >
            Loading...
          </Typography>
        </Box>
      </>
    );
  }

  if (!userPlaylists || userPlaylists.length === 0) {
    return (
      <>
        <Box
          sx={{
            height: "10vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#3D348B",
          }}
        >
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              color: "#F7B801",
            }}
            fontWeight="bold"
          >
            No PlaysLists Saved Yet!!
          </Typography>
        </Box>
      </>
    );
  }

  return (
    <>
      <Typography
        variant="h5"
        noWrap
        component="div"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 30,
          color: "white",
        }}
        fontWeight="bold"
      >
        Lists you'd like to try
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {playlists.map((playList) => (
          <Grid size={{ xs: 6, sm: 4, md: 3 }} key={playList.id}>
            <Card
              onClick={() => {
                setValue(playList);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              key={playList.id}
              sx={{
                height: "100%",
                width: "100%",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={playList.image}
                  alt={playList.label}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {playList.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {playList.description}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                    mt={1}
                  >
                    {playList.songsCount} Songs - {playList.totalTime}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default AllPlayListsComponent;
