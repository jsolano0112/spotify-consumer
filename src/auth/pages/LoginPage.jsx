import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { Button, Link } from "@mui/material";
import { useState } from "react";
import { loginWithSpotify } from "../../api/providerapi";
import { Title } from "../components/CustomTitle";
import { TextField } from "@mui/material";
import { Alert } from "@mui/material";
import { AlertTitle } from "@mui/material";
const providers = [
  { id: "credentials", name: "Email and Password" },
  { id: "google", name: "Google" },
  { id: "facebook", name: "Facebook" },
  { id: "spotify", name: "Spotify" },
];
export const LoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { login, loginGoogle, loginFacebook} = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");

  const onLoginUser = async (email, password, provider) => {
    setErrorMessage("");
    let isLogged = false;

    if (provider === "Email and Password") {
      isLogged = await login({ email, password });      
    } else if (provider === "Spotify") {
      isLogged = await loginWithSpotify();
    } else if (provider === "Facebook") {
      isLogged = await loginFacebook();
    } else if (provider === "Google") {
      isLogged = await loginGoogle();
    }
    if (!isLogged) {
      // TODO: specify message
      setErrorMessage("An error has occurred");
    } else {
      navigate("/", { replace: true });
    }
  };

  function SignUpLink() {
    return (
      <Link href="/SignUp" variant="body2">
        Sign up
      </Link>
    );
  }

  function PasswordField() {
    return (
      <>
        <TextField
          required
          type="password"
          name="password"
          label="Password"
          size="small"
          variant="standard"
          InputProps={{
            style: { fontSize: "0.9rem" },
          }}
          InputLabelProps={{
            style: { fontSize: "0.9rem" },
          }}
        />
        <ErrorAlert />
      </>
    );
  }

  function ErrorAlert() {
    return errorMessage != "" ? (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {errorMessage}
      </Alert>
    ) : null;
  }

  return (
    <>
      <AppProvider theme={theme}>
        <div
          style={{
            background: "#ffb84c",
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
              passwordField: PasswordField,
              submitButton: ({ onClick }) => (
                <Button
                  type="submit"
                  onClick={onClick}
                  variant="outlined"
                  fullWidth
                >
                  Sign In
                </Button>
              ),
            }}
            providers={providers}
          />
        </div>
      </AppProvider>
    </>
  );
};
