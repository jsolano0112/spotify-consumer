import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { CiFilter } from "react-icons/ci";
import Box from "@mui/material/Box";

function AllPlayListsComponent({ playlists, setValue }) {
  //const handleOpen = () => setValue(playlists);

  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="div"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 30,
          color: "#F7B801",
        }}
      >
        Lists you'd like to try 
      </Typography> 
      

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {playlists.map((playList) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={playList.id}>

            
            <Card
              onClick={()=>setValue(playList)}
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
