import { AppRouter } from "./routers/AppRouter";
import { UserProvider } from "./auth/contexts/UserProvider";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { PlaylistProvider } from "../src/playlists/context/PlaylistProvider"
import { ArtistProvider } from "./artist/context/ArtistProvider";
import { SongsAlbumProvider } from "./songsAlbums/context/songsAlbumProviders";
export const EventApp = () => {
  const mode = useSelector((state) => state.reducer.mode);
  useEffect(() => {
    document.body.classList.toggle("dark-mode", mode === "dark");
  }, [mode]);

  return (
    <>
      <UserProvider>
        <PlaylistProvider>
          <ArtistProvider>
            <SongsAlbumProvider>
              <AppRouter />
            </SongsAlbumProvider>
          </ArtistProvider>
        </PlaylistProvider>
      </UserProvider>
    </>
  );
};
