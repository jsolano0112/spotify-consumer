import axios from "axios";

const SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const SPOTIFY_TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const CLIENT_ID = "086acdbbdcef4ba8a564bba64a216325";
const CLIENT_SECRET = "a94745069e4b42fe8fa283dd3458664a";
const REDIRECT_URI = "https://7hdlxt3b-5173.use2.devtunnels.ms/callback";
const SCOPES = [
  "user-follow-read", 
  "playlist-read-private", 
  "user-read-email",
  "user-read-private",
  "playlist-read-collaborative",
  "user-top-read",
  "user-read-recently-played",
];

export const loginWithSpotify = () => {
  const authUrl = `${SPOTIFY_AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${SCOPES.join("%20")}&show_dialog=true`;
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

    const tokenData = response.data;
    const expirationTime = new Date().getTime() + tokenData.expires_in * 1000;
    localStorage.setItem("spotifyToken", JSON.stringify({
      ...tokenData,
      expirationTime,
    }));

    return tokenData;
  } catch (error) {
    console.error("Error fetching Spotify token:", error.response?.data || error.message);
    return null;
  }
};

export const refreshSpotifyToken = async () => {
  const tokenStorage = JSON.parse(localStorage.getItem("spotifyToken"));
  if (!tokenStorage?.refresh_token) {
    console.error("No refresh token available.");
    return null;
  }

  const body = new URLSearchParams();
  body.append("grant_type", "refresh_token");
  body.append("refresh_token", tokenStorage.refresh_token);
  body.append("client_id", CLIENT_ID);
  body.append("client_secret", CLIENT_SECRET);

  try {
    const response = await axios.post(SPOTIFY_TOKEN_ENDPOINT, body.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const newToken = response.data;
    const expirationTime = new Date().getTime() + newToken.expires_in * 1000;
    localStorage.setItem("spotifyToken", JSON.stringify({
      ...tokenStorage,
      ...newToken,
      expirationTime,
    }));

    return newToken;
  } catch (error) {
    console.error("Error refreshing token:", error.response?.data || error.message);
    return null;
  }
};

export const getValidAccessToken = async () => {
  let tokenStorage = JSON.parse(localStorage.getItem("spotifyToken"));

  if (!tokenStorage) return null;

  const isExpired = new Date().getTime() > tokenStorage.expirationTime;

  if (isExpired) {
    const newToken = await refreshSpotifyToken();
    if (newToken?.access_token) {
      tokenStorage = JSON.parse(localStorage.getItem("spotifyToken"));
    } else {
      return null;
    }
  }

  return tokenStorage.access_token;
};

export const spotifyFetch = async (url, options = {}) => {
  const token = await getValidAccessToken();
  if (!token) throw new Error("No valid access token");

  const mergedOptions = {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(url, mergedOptions);

  if (response.status === 401) {
    await refreshSpotifyToken();
    const retryToken = await getValidAccessToken();

    const retryResponse = await fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: `Bearer ${retryToken}`,
      },
    });

    return retryResponse;
  }

  return response;
};

export const getPlayList = async () => {
  try {
    const response = await spotifyFetch("https://api.spotify.com/v1/me/playlists");
    return await response.json();
  } catch (error) {
    console.error("Error in getPlayList:", error);
    return null;
  }
};

export const getArtist = async () => {
  try {
    const response = await spotifyFetch("https://api.spotify.com/v1/me/following?type=artist");
    return await response.json();
  } catch (error) {
    console.error("No artists found: " + error.message);
    return [];
  }
};

export const getSongsAlbums = async () => {
  try {
    const response = await spotifyFetch("https://api.spotify.com/v1/me/player/recently-played?limit=5");
    return await response.json();
  } catch (error) {
    console.error("No songsAlbum found: " + error.message);
    return [];
  }
};

export const getGenres = async () => {
  try {
    const response = await spotifyFetch("https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=4");
    return await response.json();
  } catch (error) {
    console.error("No genres found: " + error.message);
    return [];
  }
};

export const getRecentlyPlayedTracks = async () => {
  try {
    const response = await spotifyFetch("https://api.spotify.com/v1/me/player/recently-played");
    return await response.json();
  } catch (error) {
    console.error("No tracks found: " + error.message);
    return [];
  }
};

export const getTrack = async (id) => {
  try {
    const response = await spotifyFetch(`https://api.spotify.com/v1/tracks/${id}`);
    return await response.json();
  } catch (error) {
    console.error("No track found: " + error.message);
    return [];
  }
};
