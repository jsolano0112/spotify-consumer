import React from "react";
import { useTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { Link, TextField, Button } from "@mui/material";

const providers = [
  { id: "credentials", name: "Email and Password" },
  { id: "google", name: "Google" },
  { id: "facebook", name: "Facebook" },
  { id: "spotify", name: "Spotify" },
];
export const SignUpPage = () => {
  const onSignUpUser = (email, password, provider) => {};
  const theme = useTheme();

  function SignInLink() {
    return (
      <Link href="/Login" variant="body2">
        Sign In
      </Link>
    );
  }

  function Title() {
    return <h2 style={{ marginBottom: 8 }}>Sign Up</h2>;
  }

  function PasswordField() {
    return (
      <>
        <TextField
          required
          id="standard-basic"
          label="Password"
          size="small"
          variant="standard"
        />
        <TextField
          required
          id="standard-basic"
          label="Confirm Password"
          size="small"
          variant="standard"
        />
      </>
    );
  }

  function CustomButton() {
    return (
      <Button
        type="submit"
        variant="outlined"
        color="info"
        size="small"
        disableElevation
        fullWidth
        sx={{ my: 1 }}
      >
        Sign Up With Email And Password
      </Button>
    );
  }

  function Subtitle() {
    return (
      <div sx={{ mb: 2, px: 1, py: 0.25 }} size="small">
         Register to start to listening content.
      </div>
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
              onSignUpUser(
                formData?.get("email"),
                formData?.get("password"),
                provider.id
              )
            }
            slotProps={{
              emailField: { variant: "standard", autoFocus: false },
              form: { noValidate: true },
            }}
            slots={{
              signUpLink: SignInLink,
              title: Title,
              passwordField: PasswordField,
              submitButton: CustomButton,
              subtitle: Subtitle,
            }}
            providers={providers}
          />
        </div>
      </AppProvider>
    </>
  );
};
