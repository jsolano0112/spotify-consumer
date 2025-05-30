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
          <PlayList setMenu={setMenu} userLogged={false}/>
        </div>
      </div>

      <div className="songs">
        <CardToReproduce />
        <div>
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
