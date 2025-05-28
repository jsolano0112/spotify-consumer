import React, { useState } from "react";
import { cards } from "../../mockdata/cards";
import { Box, Button, Card, CardMedia, CardContent, Container, Grid, Typography, CardActionArea, } from "@mui/material";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMode } from "../../palette/slices/slice";
import { Skeleton, List, ListItem } from "@mui/material";
import { updateUserInfo } from "../../firebase/provider";

function SkeletonProgress() {
  return (
    <Box
      sx={{
        height: "10vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ width: 70 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    </Box>
  );
}

export default function ProfileUserPage() {
  const [isSpotifyConnected, setIsSpotifyConnected] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [history, setHistory] = useState([]);
  const [artists, setArtists] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const handleConnectSpotify = (e) => {
    e.preventDefault();
    window.location.href = "https://accounts.spotify.com/authorize?...";
  };

  useEffect(() => {
    // Recuperar playlists
    const storedPlaylists = localStorage.getItem("nameplaylist");
    if (storedPlaylists) {
      const parsedPlaylists = JSON.parse(storedPlaylists);
      const playlistNames = parsedPlaylists.map((item) => item.name);
      setPlaylist(playlistNames);
    }

    // Recuperar detalles de artistas
    const storedArtists = localStorage.getItem("artistDetails");
    if (storedArtists) {
      const parsedArtists = JSON.parse(storedArtists);
      setArtists(parsedArtists);
    }

    // Recuperar usuario
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsSpotifyConnected(parsedUser.isloggedWithSpotify);
    }

    // Recuperar Generos
    const storedGenres = localStorage.getItem("listGenres");
    if (storedGenres) {
      const parsedGenres = JSON.parse(storedGenres);
      setGenres(parsedGenres);
    }

    // Recuperar ultimas canciones y albunes
    const storedLastPlayers = localStorage.getItem("playerRecently");
    if (storedLastPlayers) {
      const parsedLastPlayers = JSON.parse(storedLastPlayers);

      setHistory(parsedLastPlayers);
    }

  }, []);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        // setHistory([]);
        // setPlaylist([]);
        // setArtists([]);
        // setGenres([]);
        setLoading(false);
      }, 3000);
    };

    fetchData();
  }, []);

  const handleToggleDarkMode = async () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    dispatch(toggleMode());
    if (user?.id) {
      await updateUserInfo(user.id, { darkMode: newDarkMode });
    }
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
                    image={user?.photoURL}
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
                <Box
                  sx={{
                    ml: 3,
                    mt: "auto",
                    mb: 2,
                    color: "var(--secondary-text-color)",
                  }}
                >
                  <Typography variant="h5">{user?.displayName}</Typography>
                  <Typography variant="body2">({user?.country})</Typography>
                </Box>
              </Box>
              <Box className="mode-container">
                <Button
                  variant="secondary"
                  size="small"
                  onClick={handleToggleDarkMode}
                >
                  {darkMode ? (
                    <ModeNightIcon />
                  ) : (
                    <WbSunnyIcon sx={{ color: "white" }} />
                  )}
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
                <Typography
                  variant="h6"
                  sx={{
                    color: "var(--secondary-text-color)",
                  }}
                >
                  {user?.followers}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "var(--secondary-text-color)",
                  }}
                >
                  Followers
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  variant="h6"
                  sx={{
                    color: "var(--secondary-text-color)",
                  }}
                >
                  Playlists
                </Typography>
                <List>
                  {playlist.map((item, index) => (
                    <ListItem key={index} sx={{ color: "var(--secondary-text-color)", padding: 0, fontSize: "0.9rem"}}>
                      - {item}
                    </ListItem>
                  ))}
                </List>
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
                <Typography variant="h6" textAlign={"center"}>Top Artists</Typography>
                <Box className="info-container2">
                  {loading ? (
                    <Box className="progress">
                      <SkeletonProgress />
                    </Box>
                  ) : artists.length === 0 ? (
                    <Typography>No Artists.</Typography>
                  ) : (
                    artists.slice(0, 4).map((item) => (
                      <Grid key={item.id}>
                        <Typography
                          variant="body1"
                          sx={{
                            textAlign: "center",
                            fontSize: "0.7rem",
                            fontWeight: "bold",
                            padding: "0.1rem 0",
                          }}
                        >
                          {item.name}
                        </Typography>
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
                              image={item.image}
                              alt={item.name}
                              title={item.name}
                              sx={{
                                borderRadius: 3,
                                width: "100%",
                                height: 50,
                                objectFit: "cover",
                              }}
                            />
                            <CardContent sx={{ textAlign: "center", padding: 1 }}>
                              {/* <Typography variant="body1" noWrap> {item.name} </Typography> */}
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    ))
                  )}
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
                  {loading ? (
                    <Box className="progress">
                      <SkeletonProgress />
                    </Box>
                  ) : !Array.isArray(genres) || genres.length === 0 ? (
                    <Typography>No listened genres.</Typography>
                  ) : (
                    <List>
                      {genres.map((item, index) => (
                        <ListItem key={index} sx={{ color: "var(--secondary-text-color)", padding: 0 }}>
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  )}
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
                  {loading ? (
                    <Box className="progress">
                      <SkeletonProgress />
                    </Box>
                  ) : history.length === 0 ? (
                    <Typography>No recent history.</Typography>
                  ) : (
                  <List>
                  {history.map(({name, artist, id}) => (
                    <ListItem key={id} sx={{ color: "var(--secondary-text-color)", padding: 0, fontSize: "0.8rem", }}>
                      - {name} - {artist}
                    </ListItem>
                  ))}
                </List>
                  )}
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
                <Typography variant="h6" textAlign={"center"}>Albums</Typography>
                <Box className="info-container2">
                  {loading ? (
                    <Box className="progress">
                      <SkeletonProgress />
                    </Box>
                  ) : history.length === 0 ? (
                    <Typography>No Albums.</Typography>
                  ) : (
                    history.slice(0, 4).map((item) => (
                      <Grid key={item.id}>
                        <Typography
                          variant="body1"
                          sx={{
                            textAlign: "center",
                            fontSize: "0.7rem",
                            fontWeight: "bold",
                            padding: "0.1rem 0",
                          }}
                        >
                          {item.albumName}
                        </Typography>
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
                              image={item.albumImage}
                              alt={item.name}
                              title={item.name}
                              sx={{
                                borderRadius: 3,
                                width: "100%",
                                height: 50,
                                objectFit: "cover",
                              }}
                            />
                            <CardContent sx={{ textAlign: "center", padding: 1 }}>
                              {/* <Typography variant="body1" noWrap> {item.name} </Typography> */}
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    ))
                  )}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
