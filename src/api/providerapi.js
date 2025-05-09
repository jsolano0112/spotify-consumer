import axios from 'axios';

const SPOTIFY_CLIENT_ID = '086acdbbdcef4ba8a564bba64a216325'; 
const SPOTIFY_REDIRECT_URI = 'http://localhost:5173/Login'; 
const SPOTIFY_SCOPES = [
  'user-read-email',
  'user-read-private',
]; // Ajusta los permisos según tu caso

export const loginWithSpotify = async () => {
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(SPOTIFY_REDIRECT_URI)}&scope=${SPOTIFY_SCOPES.join('%20')}`;
    console.log(authUrl);
    
  window.location.href = authUrl; // Redirige al usuario a la página de Spotify
};

export const getSpotifyToken = async (code) => {
  const tokenUrl = 'https://accounts.spotify.com/api/token';

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: SPOTIFY_REDIRECT_URI,
    client_id: SPOTIFY_CLIENT_ID,
    client_secret: 'a94745069e4b42fe8fa283dd3458664a', // Reemplaza con tu Client Secret de Spotify
  });

  const response = await axios.post(tokenUrl, body.toString(), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  console.log(response.data);
  
  return response.data; // Devuelve el token de acceso
};
