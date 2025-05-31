import { UserContext } from "../auth/contexts/UserContext";
import { LoginPage } from "../auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { SignUpPage } from "../auth/pages/SignUpPage";
import { SpotifyCallbackPage } from "../auth/components/SpotifyCallbackPage";
import { Sidenav } from "../playlists/pages/Sidenav";
import "../App.css";
export const AppRouter = () => {
  const {
    userState: { logged },
  } = useContext(UserContext);
  if (!logged) {
    return (
      <>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/*" element={<Navigate to="/Login" />} />
          <Route path="/callback" element={<SpotifyCallbackPage />} />
        </Routes>
      </>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Sidenav />} />
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/callback" element={<SpotifyCallbackPage />} />
      </Routes>
    </>
  );
};
