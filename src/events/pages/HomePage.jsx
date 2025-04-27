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
      </div>
    </>
  );
};
