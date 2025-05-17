import React, { useState } from "react";
import "../styles/style.css";
import { cards } from "../../mockdata/cards";
import { user } from "../../mockdata/user";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  Container,
  Grid,
  Typography,
  CardActionArea,
} from "@mui/material";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function ProfileUserPage() {
  const [isSpotifyConnected, setIsSpotifyConnected] = useState(false);
  // TODO: darkmode
  const [darkMode, setDarkMode] = useState(false);
  const handleConnectSpotify = (e) => {
    e.preventDefault();
    window.location.href = "https://accounts.spotify.com/authorize?...";
  };

  return (
    <Container className="profiler-container">
      <Grid container justifyContent="center" alignItems="center">
        <Grid>
          <Card sx={{ marginTop: "10px" }}>
            {/* Profile Section */}
            <Box className="image-container">
              <Box className="profile-container">
                <Box
                  sx={{
                    ml: 2,
                    mt: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: 150,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={user.profileImage}
                    alt="Profile"
                    sx={{
                      width: 150,
                      height: 150,
                      borderRadius: "50%",
                      marginTop: "16px",
                      marginBottom: "16px",
                    }}
                  />
                </Box>
                <Box sx={{ ml: 3, mt: "auto", mb: 2 }}>
                  <Typography variant="h5">{user.name}</Typography>
                  <Typography variant="body2">({user.country})</Typography>
                </Box>
              </Box>
              <Box className="mode-container">
                <Button variant="secondary" size="small">
                  {darkMode ? <ModeNightIcon /> : <WbSunnyIcon />}
                </Button>
              </Box>
              {/* Spotify Connection Section */}
              {/* TODO: change color buttons */}
              <Box className="buttons-container">
                <Button variant="outlined" size="small">
                  Edit Playlist
                </Button>
                {!isSpotifyConnected && (
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={(e) => handleConnectSpotify(e)}
                  >
                    Connect Spotify
                  </Button>
                )}
              </Box>
            </Box>

            <Box></Box>

            <Grid
              container
              justifyContent="space-around"
              textAlign="center"
              className="followers-container"
            >
              <Grid>
                <Typography variant="h6">{user.followers}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Followers
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="h6">{user.playlists}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Playlists
                </Typography>
              </Grid>
            </Grid>

            {/* Content Section */}
            <CardContent className="info-container">
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  borderRadius: 1,
                  bgcolor: "var(--card-background)",
                  "&:hover": {
                    bgcolor: "var(--highlight-color)",
                  },
                }}
                className="artists"
              >
                <Typography variant="h6" gutterBottom>
                  Top Artists
                </Typography>
                <Box>
                  {user.topArtists.slice(0, 3).map((artist, index) => (
                    <Typography key={index} variant="body1" gutterBottom>
                      {artist}
                    </Typography>
                  ))}
                </Box>
              </Box>
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  borderRadius: 1,
                  bgcolor: "var(--card-background)",
                  "&:hover": {
                    bgcolor: "var(--highlight-color)",
                  },
                }}
                className="genres"
              >
                <Typography variant="h6">Favorite Genres</Typography>
                <Box>
                  {user.favoriteGenres.slice(0, 3).map((genre, index) => (
                    <Typography key={index} variant="body1" gutterBottom>
                      {genre}
                    </Typography>
                  ))}
                </Box>
              </Box>
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  borderRadius: 1,
                  bgcolor: "var(--card-background)",
                  "&:hover": {
                    bgcolor: "var(--highlight-color)",
                  },
                }}
                className="history"
              >
                <Typography variant="h6">Recent History</Typography>
                <Box>
                  {user.recentHistory.slice(0, 3).map((song, index) => (
                    <Typography key={index} variant="body1" gutterBottom>
                      {song}
                    </Typography>
                  ))}
                </Box>
              </Box>
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  borderRadius: 1,
                  bgcolor: "var(--card-background)",
                  "&:hover": {
                    bgcolor: "var(--highlight-color)",
                  },
                }}
                className="albums"
              >
                <Typography variant="h6">Albums</Typography>
                <Box className="info-container2">
                  {cards.slice(0, 4).map((card) => (
                    <Grid item xs={6} key={card.id}>
                      <Card
                        sx={{
                          width: 50,
                          height: 50,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            image={card.image}
                            alt={card.title}
                            sx={{
                              borderRadius: 3,
                              width: "100%",
                              height: 120,
                              objectFit: "cover",
                            }}
                          />
                          <CardContent sx={{ textAlign: "center", padding: 1 }}>
                            <Typography variant="body1" noWrap>
                              {card.title}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
