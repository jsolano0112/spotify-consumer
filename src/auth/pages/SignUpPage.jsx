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
import { countries } from "../constants/countries";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { loginWithSpotify } from "../../api/providerapi";
//  TODO: Improve size of the card
const providers = [
  { id: "credentials", name: "Email and Password" },
  { id: "google", name: "Google" },
  { id: "facebook", name: "Facebook" },
  { id: "spotify", name: "Spotify" },
];

export const SignUpPage = () => {
  const {
    signUpWithEmail,
    userState: { errorMessage },
    loginGoogle,
    loginFacebook,
  } = useContext(UserContext);
  const [error, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const onSignUpUser = async (
    email,
    password,
    fullname,
    country,
    provider,
    formData,
    event
  ) => {
    let isRegistered = false;
    setSuccessMessage(false);
    const confirmPassword = formData?.get("confirmPassword");
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    } else if (password?.length < 6) {
      setErrorMessage("The password should be at least 6 digits");
      return;
    }
    setErrorMessage("");
    if (provider == "Email and Password") {
      isRegistered = await signUpWithEmail({
        email,
        password,
        country,
        fullname,
      });
    } else if (provider === "Spotify") {
      isRegistered = await loginWithSpotify();
    } else if (provider === "Facebook") {
      isRegistered = await loginFacebook();
    } else if (provider === "Google") {
      isRegistered = await loginGoogle();
    }
    if (!isRegistered) {
      setErrorMessage("An error has occurred: " + errorMessage);
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

  function Fields() {
    return (
      <>
        <TextField
          required
          type="text"
          name="fullname"
          label="Full Name"
          size="small"
          variant="standard"
          InputProps={{
            style: { fontSize: "0.9rem" },
          }}
          InputLabelProps={{
            style: { fontSize: "0.9rem" },
          }}
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Country
          </InputLabel>
          <Select
            name="country"
            defaultValue="CO"
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Country"
          >
            {countries.map((country) => (
              <MenuItem key={country.id} value={country.id}>
                {country.country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
        <SuccessAlert />
      </>
    );
  }

  function ErrorAlert() {
    return error != "" ? (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {error}
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
                formData?.get("fullname"),
                formData?.get("country"),

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
              passwordField: Fields,
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
