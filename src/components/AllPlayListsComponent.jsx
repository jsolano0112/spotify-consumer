import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import  Pagination  from '@mui/material/Pagination';

import usePagination from "../hooks/usePagination";
import { CircularProgressComponent } from "./CircularProgressComponent";

function AllPlayListsComponent({ playlists, setValue }) {
  //const handleOpen = () => setValue(playlists);

  let [page, setPage] = useState(1);
  const PER_PAGE = 20;

  const count = Math.ceil(playlists.length / PER_PAGE)
  const _DATA = usePagination(playlists, PER_PAGE)

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p)
  }

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
        <CircularProgressComponent/>
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
            variant="h6"
            noWrap
            component="div"
          >
            No PlaysLists Saved Yet!
          </Typography>
        </Box>
      </>
    );
  }

  return (
    <>

      <Grid
      padding={{ xs: 3}}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {_DATA.currentData().map((playList) => (
          
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

      <Pagination count={count} size="large"  page={page} onChange={handleChange} sx={{display:"flex", alignContent:"center", justifyContent:"center", marginTop:"30px"}}/>
      <Typography sx={{display:"flex", alignContent:"center", justifyContent:"center",}}>Page: {page}</Typography>

    </>
  );
}

export default AllPlayListsComponent;
