import { useContext, useEffect, useRef } from "react";
import { getSpotifyToken } from "../../api/providerapi";
import { UserContext } from "../contexts/UserContext";

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
