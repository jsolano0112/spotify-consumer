import { useContext, useEffect, useRef } from "react";
import { getSpotifyToken } from "../../api/providerApi";
import { UserContext } from "../contexts/UserContext";
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
        const error = params.get("error");
        const code = params.get("code");

        if (error) {
          console.log(`Spotify authorization error: ${error}`);
          navigate("/login", { replace: false });
          return;
        }

        if (!code) {
          console.log("Missing code from Spotify callback");
          return;
        }

        const tokenData = await getSpotifyToken(code);
        const accessToken = tokenData.access_token;

        if (accessToken) {
          let userLogged = false;
          const user = JSON.parse(localStorage.getItem("user"));
          if (user) userLogged = true;

          localStorage.setItem("spotifyToken", JSON.stringify(tokenData));
          const success = await loginSpotify(accessToken, user?.id, userLogged);

          if (success) {
            navigate("/", { replace: true });
            return;
          } else {
            console.log("User login error");
          }
        } else {
          console.log("Missing token");
        }
      } catch (error) {
        console.error("Error handling Spotify callback:", error);
      }
    };

    handleSpotifyCallback();
  }, []);
};
