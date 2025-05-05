import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { Link } from "@mui/material";
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
  const { login } = useContext(UserContext);

  const onLoginUser = (email, password, provider) => {
    console.log(email)
    console.log(password)
    console.log(provider)

    if (provider === "Email and Password") {
      login({ email, password });
      navigate("/", { replace: true });
    } else if (provider === "Spotify") {
      console.log("entra");
    } else if (provider === "Facebook") {
      console.log("entra");
    } else if (provider === "Google") {
      console.log("entra");
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
                  sx={{ padding: 0.5, "& .MuiSvgIcon-root": { fontSize: 20 } }}
                />
              ),
            },
          }}
          slots={{
            signUpLink: SignUpLink,
          }}
          providers={providers}
        />
        </div>
      </AppProvider>
    </>
  );
};
