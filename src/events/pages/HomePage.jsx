import { useContext } from "react";
import { UserContext } from "../../auth/contexts/UserContext";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const onLogoutUser = (target) => {
    logout({});

    navigate("/", { replace: true });
  };

  const toPerfil = () => {
    navigate("/Perfil", { replace: true });
  };

  const toPlayList = () => {
    navigate("/Playlists", { replace: true });
  };
  return (
    <>
      <div>HomePage</div>
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block"
          onClick={onLogoutUser}
        >
          Logout
        </button>
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block"
          onClick={toPerfil}
        >
          Perfil
        </button>
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block"
          onClick={toPlayList}
        >
          My Playlists
        </button>
      </div>
    </>
  );
};
