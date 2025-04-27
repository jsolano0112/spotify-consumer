import { UserContext } from "../auth/contexts/UserContext";
import { LoginPage } from "../auth/pages/LoginPage";
import { HomePage } from "../events/pages/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";

export const AppRouter = () => {
  const {
    userState: { logged },
  } = useContext(UserContext);

  if(!logged){
    return (
      <>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/Login" />} />
        </Routes>
      </>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/Login" element={<LoginPage />} /> */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
