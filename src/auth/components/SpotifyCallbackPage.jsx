import { useContext, useEffect, useRef } from "react";
import { getSpotifyToken } from "../../api/providerapi";
import { UserContext } from "../contexts/UserContext";
import {GetPlaylist} from "../../users/hooks/GetPlaylist"
import { GetTopArtist } from "../../users/hooks/GetTopArtist";
import { GetGenres } from "../../users/hooks/GetGenres";
import { GetLastSong } from "../../users/hooks/GetLastSong";

export const SpotifyCallbackPage = () => {
  const hasRun = useRef(false);
  const { loginSpotify } = useContext(UserContext);

  useEffect(() => {
    const handleSpotifyCallback = async () => {
      if (hasRun.current) return;
      hasRun.current = true;

      try {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        if (!code) {
          console.log("error spo code");
          return;
        }

        const tokenData = await getSpotifyToken(code);
        const accessToken = tokenData.access_token;
        if (accessToken) {
          localStorage.setItem("spotifyToken", JSON.stringify(tokenData));

          const success = await loginSpotify(accessToken);
          console.log('success', success)
          if (success) {
            await GetPlaylist(accessToken)
            await GetTopArtist(accessToken)
            await GetGenres(accessToken)
            await GetLastSong(accessToken)
          }else{
            console.log("user error");
          }
        } else {
          console.log("missing Token");
        }
      } catch (error) {
        console.error("Error callback:", error);
      }
    };

    handleSpotifyCallback();
  }, []);
};
