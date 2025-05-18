import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { Link } from "@mui/material";
import { useState } from "react";
import { loginWithSpotify } from "../../api/providerapi";
import { Title } from "../components/CustomTitle";
import {CustomButton}  from "../components/CustomButton";

const providers = [
  { id: "credentials", name: "Email and Password" },
  { id: "google", name: "Google" },
  { id: "facebook", name: "Facebook" },
  { id: "spotify", name: "Spotify" },
  { id: "webapi", name: "Web API" },
];
export const LoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { login, loginGoogle } = useContext(UserContext);
  const [error, setError] = useState("");

  const onLoginUser = async (email, password, provider) => {
    if (provider === "Email and Password") {
      const isLogged = await login({ email, password });

      console.log("logged?", isLogged);

      if (!isLogged) {
        setError(true);
      } else {
        navigate("/", { replace: true });
      }
    } else if (provider === "Spotify") {
      loginWithSpotify()
    } else if (provider === "Facebook") {
      console.log("entra");
    } else if (provider === "Google") {
      const isLogged = await loginGoogle();

      if (!isLogged) {
        setError(true);
      } else {
        navigate("/", { replace: true });
      }
    } else if (provider === "Web API") {
      console.log("entra");
    }
  };

  function SignUpLink() {
    return (
      <Link href="/SignUp" variant="body2">
        Sign up
      </Link>
    );
  }

  return (
    <>
      <AppProvider theme={theme}>
        <div
          style={{
            background: "var(--color-dark-blue)",
            height: "100vh",
          }}
        >
          <SignInPage
          
            signIn={(provider, formData) =>
              onLoginUser(
                formData?.get("email"),
                formData?.get("password"),
                provider.name
              )
            }
            slotProps={{
              emailField: { variant: "standard", autoFocus: false },
              passwordField: { variant: "standard" },
              rememberMe: {
                control: (
                  <Checkbox
                    name="tandc"
                    value="true"
                    color="primary"
                    sx={{
                      padding: 0.5,
                      "& .MuiSvgIcon-root": { fontSize: 20 },
                    }}
                  />
                ),
              },
            }}
            slots={{
              title: Title,
              signUpLink: SignUpLink,
              submitButton: ({ onClick }) => (
                <CustomButton text={"Sign In"} onClick={onClick} />
              ),
            }}
            providers={providers}
          />
        </div>
      </AppProvider>
    </>
  );
};
