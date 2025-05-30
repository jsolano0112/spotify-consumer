import React, { useContext, useState } from "react";
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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMode } from "../../palette/slices/slice";
import { Skeleton, List, ListItem } from "@mui/material";
import { updateUserInfo } from "../../firebase/provider";
import { PlaylistContext } from "../../playlists/context/PlaylistContext";
import { ArtistContext } from "../../artist/context/ArtistContext";
import { SongsAlbumnContext } from "../../songsAlbums/context/SongsAlbumContext";

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

  const { getUserPlaylist } = useContext(PlaylistContext);
  const { getUserArtist } = useContext(ArtistContext);
  const { getUserSongsAlbums, getUserGenres } = useContext(SongsAlbumnContext);

  async function loadPlaylists() {
    try {
      const storedPlaylists = await getUserPlaylist();

      if (storedPlaylists) {
        const playlistCount = storedPlaylists.length;
        setPlaylist(playlistCount);
      } else {
        console.warn("No playlists found");
        setPlaylist([]);
      }
    } catch (error) {
      console.error("Error loading playlists:", error);
      setPlaylist([]);
    }
  }

  async function loadArtist() {
    try {
      const storedPlaylists = await getUserArtist();

      if (storedPlaylists) {
        setArtists(storedPlaylists);
      } else {
        console.warn("No Artist found");
        setArtists([]);
      }
    } catch (error) {
      console.error("Error loading Artist:", error);
      setArtists([]);
    }
  }

  async function loadSongsAlbums() {
    try {
      const storedSongAlbums = await getUserSongsAlbums();

      if (storedSongAlbums) {
        setHistory(storedSongAlbums.slice(-3));
      } else {
        console.warn("No found");
        setHistory([]);
      }
    } catch (error) {
      console.error("Error loading:", error);
      setHistory([]);
    }
  }

  async function loadGenres() {
    try {
      const storedGenres = await getUserGenres();

      if (storedGenres) {
        setGenres(storedGenres.slice(-3));
      } else {
        console.warn("No found");
        setGenres([]);
      }
    } catch (error) {
      console.error("Error loading:", error);
      setGenres([]);
    }
  }

  const dispatch = useDispatch();
  const handleConnectSpotify = (e) => {
    e.preventDefault();
    window.location.href = "https://accounts.spotify.com/authorize?...";
  };

  useEffect(() => {
    loadPlaylists();
    loadArtist();
    loadSongsAlbums();
    loadGenres();
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsSpotifyConnected(parsedUser.isloggedWithSpotify);
    }
  }, []);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    fetchData();
  }, []);

  const handleToggleDarkMode = async () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const newDarkMode = !storedUser.darkMode;
    setDarkMode(newDarkMode);
    dispatch(toggleMode());
    if (user?.id) {
      await updateUserInfo(user.id, { darkMode: newDarkMode });
    }
  };

  const handleEditPlaylist = async () => {
    window.open("https://open.spotify.com/collection/playlists", "_blank");
  };

  const infoBoxStyles = {
    minWidth: 200,
    maxWidth: 300,
    minHeight: 200,
    borderRadius: 1,
    bgcolor: "var(--card-background)",
    color: "black",
    "&:hover": {
      bgcolor: "var(--highlight-color)",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleEditPlaylist()}
                >
                  Edit Playlists
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
                  sx={{ color: "var(--secondary-text-color)" }}
                >
                  {user?.followers}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "var(--secondary-text-color)" }}
                >
                  Followers
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  variant="h6"
                  sx={{ color: "var(--secondary-text-color)" }}
                >
                  {playlist}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "var(--secondary-text-color)" }}
                >
                  Playlists
                </Typography>
              </Grid>
            </Grid>

            {/* Content Section */}
            <CardContent className="info-container">
              <Box sx={infoBoxStyles} className="artists">
                <Typography variant="h6" textAlign={"center"}>
                  Top Artists
                </Typography>
                <Box className="info-container2">
                  {loading ? (
                    <Box className="progress">
                      <SkeletonProgress />
                    </Box>
                  ) : artists.length === 0 ? (
                    <Typography textAlign={"center"}>No Artists.</Typography>
                  ) : (
                    artists.slice(0, 4).map((item) => (
                      <Grid key={item.id}>
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
                            <CardContent
                              sx={{ textAlign: "center", padding: 1 }}
                            ></CardContent>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    ))
                  )}
                </Box>
              </Box>
              <Box sx={infoBoxStyles} className="genres">
                <Typography variant="h6" textAlign={"center"}>
                  Favorite Genres
                </Typography>
                <Box>
                  {loading ? (
                    <Box className="progress">
                      <SkeletonProgress />
                    </Box>
                  ) : !Array.isArray(genres) || genres.length === 0 ? (
                    <Typography>No listened genres.</Typography>
                  ) : (
                    <List>
                      {genres.map(({ id, genres }) => (
                        <ListItem
                          key={id}
                          sx={{
                            color: "black",
                            padding: 0,
                            fontSize: "0.8rem",
                          }}
                        >
                          ~ {genres}
                        </ListItem>
                      ))}
                    </List>
                  )}
                </Box>
              </Box>
              <Box sx={infoBoxStyles} className="history">
                <Typography variant="h6" textAlign={"center"}>
                  Recent History
                </Typography>
                <Box>
                  {loading ? (
                    <Box className="progress">
                      <SkeletonProgress />
                    </Box>
                  ) : history.length === 0 ? (
                    <Typography>No recent history.</Typography>
                  ) : (
                    <List>
                      {history.map(({ name, artist, id }) => (
                        <ListItem
                          key={id}
                          sx={{
                            color: "black",
                            padding: 0,
                            fontSize: "0.8rem",
                          }}
                        >
                          ~ {name} | {artist}
                        </ListItem>
                      ))}
                    </List>
                  )}
                </Box>
              </Box>
              <Box sx={infoBoxStyles} className="albums">
                <Typography variant="h6" textAlign={"center"}>
                  Albums
                </Typography>
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
                        <Card
                          sx={{
                            width: 60,
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
                            <CardContent
                              sx={{ textAlign: "center", padding: 1 }}
                            >
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
