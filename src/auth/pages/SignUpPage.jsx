import React from "react";
import { useTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { Link, TextField, Button } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import CustomButton from "../components/CustomButton";

//  TODO: Change naming to buttons
const providers = [
  { id: "credentials", name: "Email and Password" },
  { id: "google", name: "Google" },
  { id: "facebook", name: "Facebook" },
  { id: "spotify", name: "Spotify" },
  { id: "webapi", name: "Web API" },
];

const initialForm = {
  confirmPassword: "",
  password: "",
};

export const SignUpPage = () => {
  const { password, confirmPassword, onInputChange } = useForm(initialForm);
  const onSignUpUser = (email, password, provider) => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
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

  function Title() {
    return (
      <h1
        style={{
          marginBottom: 4,
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Sign Up
      </h1>
    );
  }

  //TODO: create a component to handling this Text field
  function PasswordField() {
    return (
      <>
        <TextField
          required
          type="password"
          id="password"
          name="password"
          label="Password"
          size="small"
          variant="standard"
          fontSize="0.8rem"
          value={password}
          onChange={onInputChange}
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
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          size="small"
          variant="standard"
          value={confirmPassword}
          onChange={onInputChange}
          InputProps={{
            style: { fontSize: "0.9rem" },
          }}
          InputLabelProps={{
            style: { fontSize: "0.9rem" },
          }}
        />
      </>
    );
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
          background: "var(--color-dark-blue)",
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
            }}
            slots={{
              signUpLink: SignInLink,
              title: Title,
              passwordField: PasswordField,
              submitButton: ({ onClick }) => <CustomButton text={'Sign Up'} onClick={onClick} />,
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
