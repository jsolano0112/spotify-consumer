import React from 'react';
import '../styles/style.css'
import { cards } from '../../mockdata/cards';
import { Box, Button, Card, CardMedia, CardContent, Container, Grid, Typography, CardActionArea } from '@mui/material';

export default function EditButton() {

  return (
    <Box sx={{borderRadius: '1%', backgroundColor: '#3D348B', py: 5, minHeight: '100vh' }}>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid >
            <Card>
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
                    image="https://i.scdn.co/image/ab67616d00001e0241a05491b02cb2f0b841068f"
                    alt="Profile"
                    sx={{
                      width: 150,
                      height: 150,
                      borderRadius: '50%',
                      marginTop: '16px',
                      marginBottom: '16px',
                    }}
                  />
                  <Button variant="outlined" color="primary" sx={{ height: 36 }}>
                    Edit Playlist
                  </Button>
                </Box>
                <Box sx={{ ml: 3, mt: 'auto', mb: 2 }}>
                  <Typography variant="h5">Wilson </Typography>
                  <Typography variant="body2">(CO)</Typography>
                </Box>
              </Box>
              <Box sx={{ backgroundColor: '#f8f9fa', p: 2 }}>
                <Grid container justifyContent="end" textAlign="center">
                  <Grid>
                    <Typography variant="h6">1026</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Followers
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Favorite Playlist
                </Typography>
                <Box sx={{ backgroundColor: '#f8f9fa', p: 2, borderRadius: 2 }}>
                  <Typography variant="body1" gutterBottom>
                    Music for developers
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Relaxing music
                  </Typography>
                  <Typography variant="body1">
                    Techno
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    my: 2,
                  }}
                >
                  <Typography variant="h6">Recent songs</Typography>
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Albums
                  </Typography> 
                    <Grid container spacing={2}>
                      {cards.slice(0, 4).map((card) => (
                        <Grid  key={card.id}>
                          <Card sx={{ width: 150, height: 200, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                image={card.image}
                                alt={card.title}
                                sx={{
                                  borderRadius: 3,
                                  width: '100%',
                                  height: 120, // Altura fija para la imagen
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
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
