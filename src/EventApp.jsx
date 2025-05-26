import { AppRouter } from "./routers/AppRouter";
import { UserProvider } from "./auth/contexts/UserProvider";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export const EventApp = () => {
const mode = useSelector((state) => state.reducer.mode);
 useEffect(() => {
    document.body.classList.toggle("dark-mode", mode === "dark");
  }, [mode]);
  
  return (
    <>
      <UserProvider>
          <AppRouter />
      </UserProvider>
    </>
  );
};
