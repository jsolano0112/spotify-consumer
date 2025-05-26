import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getSpotifyToken } from "../../api/providerapi";

export const SpotifyCallbackPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleSpotifyCallback = async () => {
      const existingToken = localStorage.getItem("spotifyToken");
      
      if (existingToken) {
        navigate("/", { replace: true });
        return;
      }

      try {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        if (!code) {
          navigate("/error", { replace: true });
          return;
        }

        const tokenData = await getSpotifyToken(code);

        if (tokenData && tokenData.access_token) {
          localStorage.setItem("spotifyToken", JSON.stringify(tokenData));
          navigate("/", { replace: true });
        } else {
          console.error("Failed to retrieve token data");
          navigate("/error", { replace: true });
        }
      } catch (error) {
        console.error("Error handling Spotify callback:", error);
        navigate("/error", { replace: true });
      }
    };

    handleSpotifyCallback();
  }, [navigate]);

  return <div>Processing Spotify login...</div>;
};
