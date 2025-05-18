import { CardToReproduce } from "../../components/CardToReproduceComponent";
import { PlayList } from "../../components/PlayListComponent";
import { SongsCardComponent } from "../../components/SongsCardComponent";
import { Typography } from "@mui/material";

export const HomePage = ({ setMenu }) => {
  return (
    <div className="home-container box">
      <div className="first-playlist">
        <Typography variant="h5">Lists you'd like to try</Typography>
        <div className="playlist-wrapper">
          <PlayList setMenu={setMenu} />
        </div>
      </div>

      <div className="songs">
        <CardToReproduce />
        <div>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            The last 5 songs you listened to...
          </Typography> */}

          <SongsCardComponent  background={'var(--card-background)'}/>
        </div>
      </div>

      <div className="second-playlist">
        <Typography variant="h5">Your Playlists</Typography>
        <div className="playlist-wrapper">
          <PlayList setMenu={setMenu} userLogged={true} />
        </div>
      </div>
    </div>
  );
};
