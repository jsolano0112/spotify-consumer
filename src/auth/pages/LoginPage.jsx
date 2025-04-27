import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { Button, Link } from "@mui/material";
const providers = [
  { id: "credentials", name: "Email and Password" },
  { id: "google", name: "Google" },
  { id: "facebook", name: "Facebook" },
  { id: "spotify", name: "Spotify" },
];
export const LoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const onLoginUser = (email, password, provider) => {
    if (provider === "credentials") {
      login({ email, password });
      navigate("/", { replace: true });
    } else if (provider === "spotify") {
      console.log("entra");
    } else if (provider === "facebook") {
      console.log("entra");
    } else if (provider === "google") {
      console.log("entra");
    } else if (provider === "webAPI") {
      console.log("entra");
    }
  };

  function SignUpLink() {
    return (
      <Link href="/" variant="body2">
        Sign up
      </Link>
    );
  }

  function CustomButton() {
    return (
      <>
        <Button
          type="submit"
          variant="outlined"
          color="info"
          size="small"
          disableElevation
          fullWidth
          sx={{ my: 1 }}
        >
          Sign In With Email And Password
        </Button>
        <Button
          type="submit"
          variant="outlined"
          color="info"
          size="small"
          disableElevation
          fullWidth
          sx={{ my: 1 }}
        >
          Sign In With Web API
        </Button>
      </>
    );
  }

  return (
    <>
      <AppProvider theme={theme}>
      <div
          style={{
            backgroundImage: "url('../../../public/background-login.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        >
        <SignInPage
          signIn={(provider, formData) =>
            onLoginUser(
              formData?.get("email"),
              formData?.get("password"),
              provider.id
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
                  sx={{ padding: 0.5, "& .MuiSvgIcon-root": { fontSize: 20 } }}
                />
              ),
            },
          }}
          slots={{
            submitButton: CustomButton,
            signUpLink: SignUpLink,
          }}
          providers={providers}
        />
        </div>
      </AppProvider>
    </>
  );
};
