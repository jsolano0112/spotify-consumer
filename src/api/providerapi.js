import axios from "axios";

const SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const SPOTIFY_TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const CLIENT_ID = "086acdbbdcef4ba8a564bba64a216325"; 
const CLIENT_SECRET = "a94745069e4b42fe8fa283dd3458664a";
const REDIRECT_URI = "https://7hdlxt3b-5173.use2.devtunnels.ms/callback";
const SCOPES = [
  "user-read-email",
  "user-read-private",
];

export const loginWithSpotify = () => {
  const authUrl = `${SPOTIFY_AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${SCOPES.join("%20")}`;
  
  window.location.href = authUrl;
};

export const getSpotifyToken = async (code) => {

  const body = new URLSearchParams();
  body.append("grant_type", "authorization_code");
  body.append("code", code);
  body.append("redirect_uri", REDIRECT_URI);
  body.append("client_id", CLIENT_ID);
  body.append("client_secret", CLIENT_SECRET);

  try {

    const response = await axios.post(SPOTIFY_TOKEN_ENDPOINT, body.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching Spotify token:", error.response?.data || error.message);
    return null;
  }
};

