import { AppRouter } from "./routers/AppRouter";
import { UserProvider } from "./auth/contexts/UserProvider";

export const EventApp = () => {
  return (
    <>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </>
  );
};
