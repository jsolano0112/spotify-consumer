import axios from "axios";

const SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const SPOTIFY_TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const CLIENT_ID = "086acdbbdcef4ba8a564bba64a216325";
const CLIENT_SECRET = "a94745069e4b42fe8fa283dd3458664a";
const REDIRECT_URI = "https://7hdlxt3b-5173.use2.devtunnels.ms/callback";
const SCOPES = [
  "user-follow-read", // Permiso necesario para obtener los artistas seguidos
  "playlist-read-private", // Ejemplo de otro permiso que podrías necesitar
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

    return response.data;
  } catch (error) {
    console.error("Error fetching Spotify token:", error.response?.data || error.message);
    return null;
  }
};

export const getPlayList = async () => {
  const tokenStorage = localStorage.getItem("spotifyToken");

  const { access_token: token } = JSON.parse(tokenStorage);

  try {
    const playlistsReponse = await fetch("https://api.spotify.com/v1/me/playlists", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const userPlaylist = await playlistsReponse.json();
    return userPlaylist;

  } catch (error) {
    console.error("Error in getPlayList:", error);
    return null;
  }
};

export const getArtist = async () => {

  try {
    const tokenStorage = localStorage.getItem("spotifyToken");

    const { access_token: token } = JSON.parse(tokenStorage);

    const artistsResponse = await fetch("https://api.spotify.com/v1/me/following?type=artist", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await artistsResponse.json();
    return data;

  } catch (error) {
    console.error("No artists found: " + error.message);
    return [];
  }

};


export const getSongsAlbums = async () => {

  const tokenStorage = localStorage.getItem("spotifyToken");

  const { access_token: token } = JSON.parse(tokenStorage);
  try {
    const songsResponse = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=5", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const songsAlbums = await songsResponse.json();
    return songsAlbums;

  } catch (error) {
    console.error("No songsAlbum found: " + error.message);
    return [];

  }

};

export const getGenres = async () => {

  const tokenStorage = localStorage.getItem("spotifyToken");

  const { access_token: token } = JSON.parse(tokenStorage);
  try {
    const genresResponse = await fetch("https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=4", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const genres = await genresResponse.json();
    return genres;

  } catch (error) {
    console.error("No genres found: " + error.message);
    return [];

  }


};

export const getRecentlyPlayedTracks = async () => {

  const tokenStorage = localStorage.getItem("spotifyToken");

  const { access_token: token } = JSON.parse(tokenStorage);
  try {
    const tracksResponse = await fetch("https://api.spotify.com/v1/me/player/recently-played", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    return await tracksResponse.json();

  } catch (error) {
    console.error("No tracks found: " + error.message);
    return [];

  }


};


export const getTrack = async (id) => {
  const tokenStorage = localStorage.getItem("spotifyToken");

  const { access_token: token } = JSON.parse(tokenStorage);
  try {
    const trackResponse = await fetch("https://api.spotify.com/v1/tracks/" + id, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    return await trackResponse.json();

  } catch (error) {
    console.error("No track found: " + error.message);
    return [];

  }

}