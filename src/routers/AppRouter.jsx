import { UserContext } from "../auth/contexts/UserContext";
import { LoginPage } from "../auth/pages/LoginPage";
import { HomePage } from "../events/pages/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Perfil from "../events/pages/Perfil";
import PlayList from "../events/pages/PlayList";
import { SignUpPage } from "../auth/pages/SignUpPage";

export const AppRouter = () => {
  const {
    userState: { logged },
  } = useContext(UserContext);

  if(!logged){
    return (
      <>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/*" element={<Navigate to="/Login" />} />
        </Routes>
      </>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Playlists" element={<PlayList />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
