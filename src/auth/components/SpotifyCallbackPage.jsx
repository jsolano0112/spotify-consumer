import { useContext, useEffect, useRef } from "react";
import { getSpotifyToken } from "../../api/providerapi";
import { UserContext } from "../contexts/UserContext";
import { GetPlaylist } from "../../users/hooks/GetPlaylist";
import { GetTopArtist } from "../../users/hooks/GetTopArtist";
import { GetGenres } from "../../users/hooks/GetGenres";
import { GetLastSong } from "../../users/hooks/GetLastSong";
import { useNavigate } from "react-router-dom";
export const SpotifyCallbackPage = () => {
  const navigate = useNavigate();
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
          let userLogged = false;
          const user = JSON.parse(localStorage.getItem("user"));
          if(user) 
            userLogged = true;
          localStorage.setItem("spotifyToken", JSON.stringify(tokenData));
          const success = await loginSpotify(accessToken, user?.id, userLogged);
          if (success) {
            navigate("/", { replace: true });
            return;
          } else {
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
