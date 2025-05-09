import React, { useState } from 'react';
import '../styles/style.css';
import { cards } from '../../mockdata/cards';
import { Box, Button, Card, CardMedia, CardContent, Container, Grid, Typography, CardActionArea } from '@mui/material';
import CustomButton from '../../auth/components/CustomButton';

export default function ProfileUserPage() {
  const [isSpotifyConnected, setIsSpotifyConnected] = useState(false);

  const user = {
    name: 'Wilson',
    country: 'CO',
    playlists: 12,
    followers: 1026,
    topArtists: ['Artist A', 'Artist B', 'Artist C'],
    favoriteGenres: ['Techno', 'Jazz', 'Rock'],
    recentHistory: ['Song 1', 'Song 2', 'Song 3'],
    profileImage: 'https://i.scdn.co/image/ab67616d00001e0241a05491b02cb2f0b841068f',
  };

  const handleConnectSpotify = () => {
    // Redirigir al usuario a la autenticación de Spotify
    window.location.href = 'https://accounts.spotify.com/authorize?...'; // URL de autenticación de Spotify
  };

  return (
    <Box sx={{ borderRadius: '1%', backgroundColor: '#3D348B', py: 5, minHeight: '100vh' }}>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid>
            <Card>
              {/* Profile Section */}
              <Box
                sx={{
                  backgroundColor: '#7678ED',
                  height: 200,
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'row',
                  borderRadius: '4px 4px 0 0',
                }}
              >
                <Box
                  sx={{
                    ml: 2,
                    mt: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
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
                      borderRadius: '50%',
                      marginTop: '16px',
                      marginBottom: '16px',
                    }}
                  />
                  <Button variant="contained" color="primary" sx={{ height: 36 }}>
                    Edit Playlist
                  </Button>
                </Box>
                <Box sx={{ ml: 3, mt: 'auto', mb: 2 }}>
                  <Typography variant="h5">{user.name}</Typography>
                  <Typography variant="body2">({user.country})</Typography>
                </Box>
              </Box>

              {/* Spotify Connection Section */}
              {!isSpotifyConnected && (
                <Box sx={{ backgroundColor: '#f8f9fa', p: 2, textAlign: 'end' }}>
                  {/* <Typography variant="body1" color="text.secondary" gutterBottom>
                    Connect your Spotify account.
                  </Typography> */}
                  <Button variant="contained" color="primary" onClick={handleConnectSpotify}>
                    Connect Spotify
                  </Button>
                </Box>
              )}

              <Box sx={{ backgroundColor: '#f8f9fa', p: 2 }}>
                <Grid container justifyContent="space-around" textAlign="center">
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
              </Box>

              {/* Content Section */}
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Top Artists
                </Typography>
                <Box sx={{ backgroundColor: '#f8f9fa', p: 2, borderRadius: 2 }}>
                  {user.topArtists.map((artist, index) => (
                    <Typography key={index} variant="body1" gutterBottom>
                      {artist}
                    </Typography>
                  ))}
                </Box>

                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                  Favorite Genres
                </Typography>
                <Box sx={{ backgroundColor: '#f8f9fa', p: 2, borderRadius: 2 }}>
                  {user.favoriteGenres.map((genre, index) => (
                    <Typography key={index} variant="body1" gutterBottom>
                      {genre}
                    </Typography>
                  ))}
                </Box>

                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                  Recent History
                </Typography>
                <Box sx={{ backgroundColor: '#f8f9fa', p: 2, borderRadius: 2 }}>
                  {user.recentHistory.map((song, index) => (
                    <Typography key={index} variant="body1" gutterBottom>
                      {song}
                    </Typography>
                  ))}
                </Box>

                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                  Albums
                </Typography>
                <Grid container spacing={2}>
                  {cards.slice(0, 4).map((card) => (
                    <Grid key={card.id}>
                      <Card
                        sx={{
                          width: 150,
                          height: 200,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            image={card.image}
                            alt={card.title}
                            sx={{
                              borderRadius: 3,
                              width: '100%',
                              height: 120,
                              objectFit: 'cover',
                            }}
                          />
                          <CardContent sx={{ textAlign: 'center', padding: 1 }}>
                            <Typography variant="body1" noWrap>
                              {card.title}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
