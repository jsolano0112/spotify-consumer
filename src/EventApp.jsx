import { AppRouter } from "./routers/AppRouter";
import { UserProvider } from "./auth/contexts/UserProvider";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useSelector } from "react-redux";
import { lightMode, darkMode } from "./components/palette/palette";
export const EventApp = () => {
  const { mode } = useSelector((state) => state.reducer);
  console.log(mode);
  const theme = createTheme({
    palette: {
      mode: mode,
      ...(mode === "light" ? lightMode : darkMode),
    },
  });

  return (
    <>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </UserProvider>
    </>
  );
};
