import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { Link, TextField, Button } from "@mui/material";
import { Title } from "../components/CustomTitle";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Alert } from "@mui/material";
import { AlertTitle } from "@mui/material";

//  TODO: Change naming to buttons
//  TODO: Improve size of the card
//  TODO: Validate when the user already exists
const providers = [
  { id: "credentials", name: "Email and Password" },
  { id: "google", name: "Google" },
  { id: "facebook", name: "Facebook" },
  { id: "spotify", name: "Spotify" },
  { id: "webapi", name: "Web API" },
];

export const SignUpPage = () => {
  const { signUpWithEmail } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const onSignUpUser = async (email, password, provider, formData, event) => {
    let isRegistered = false;
    setSuccessMessage(false);
    const confirmPassword = formData.get("confirmPassword");
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    } else if (password.length < 6) {
      setErrorMessage("The password should be at least 6 digits");
      return;
    }
    setErrorMessage("");

    // TODO: Register with the others providers
    if (provider == "Email and Password") {
      isRegistered = await signUpWithEmail({ email, password });
    }
    if (!isRegistered) {
      setErrorMessage("An error has occurred");
    } else {
      setSuccessMessage(true);
      if (event?.target?.reset) {
        event.target.reset();
      }
    }
  };
  const theme = useTheme();

  function SignInLink() {
    return (
      <Link href="/Login" variant="body2">
        Sign In
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
        <TextField
          required
          type="password"
          name="confirmPassword"
          label="Confirm Password"
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
        <SuccessAlert />;
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

  function SuccessAlert() {
    return successMessage ? (
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        You have successfully registered
      </Alert>
    ) : null;
  }

  function Subtitle() {
    return (
      <div
        style={{
          marginBottom: 16,
          fontSize: "0.8rem",
          color: "#666",
          textAlign: "center",
        }}
      >
        Register to start to listening content.
      </div>
    );
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
              onSignUpUser(
                formData?.get("email"),
                formData?.get("password"),
                provider.name,
                formData,
                event
              )
            }
            slotProps={{
              emailField: { variant: "standard", autoFocus: false },
            }}
            slots={{
              signUpLink: SignInLink,
              title: Title,
              passwordField: PasswordField,
              submitButton: ({ onClick }) => (
                <Button
                  type="submit"
                  onClick={onClick}
                  variant="outlined"
                  fullWidth
                >
                  Sign Up
                </Button>
              ),
              subtitle: Subtitle,
              rememberMe: () => null,
            }}
            providers={providers}
          />
        </div>
      </AppProvider>
    </>
  );
};
