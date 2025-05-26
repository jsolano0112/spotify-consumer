import { authTypes } from "../types/authTypes"
import { loginUser, loginWithGoogle, signUpWithEmailAndPassword, loginWithFacebook, getUserInfo } from "../../firebase/provider"
import { useDispatch } from "react-redux";
import { setMode } from "../../palette/slices/slice";
export const useAuthenticate = (dispatch) => {
    const reduxDispatch = useDispatch();

    const login = async ({ email, password }) => {

        const { ok, uid, photoURL, displayName, errorMessage } = await loginUser(email, password)

        if (!ok) {
            const action = {
                type: authTypes.errors,
                payload: { errorMessage }
            }
            dispatch(action);

            return false;
        }

        const userPayload = { email, uid, displayName, photoURL }

        const action = {
            type: authTypes.login,
            payload: userPayload,
        };
        const userInfo = await getUserInfo(userPayload);
        reduxDispatch(setMode(userInfo.darkMode ? 'dark' : 'light'));
        localStorage.setItem('user', JSON.stringify(userInfo));
        dispatch(action);

        return true;
    };

    const loginGoogle = async () => {

        const { ok, uid, photoURL, displayName, errorMessage, email } = await loginWithGoogle();


        if (!ok) {
            const action = {
                type: authTypes.errors,
                payload: { errorMessage }
            };
            dispatch(action);

            return false;
        }

        const userPayload = { email, uid, displayName, photoURL }

        const action = {
            type: authTypes.login,
            payload: userPayload,
        };

        const userInfo = await getUserInfo(userPayload);
        reduxDispatch(setMode(userInfo.darkMode ? 'dark' : 'light'));

        localStorage.setItem('user', JSON.stringify(userInfo));

        dispatch(action)

        return true;
    }

    const logout = () => {
        const action = {
            type: authTypes.logout,
        }
        localStorage.clear();
        dispatch(action)

    }

    const signUpWithEmail = async ({ email, password }) => {
        const { ok, errorMessage } = await signUpWithEmailAndPassword({ email, password })
        if (!ok) {
            const action = {
                type: authTypes.errors,
                payload: { errorMessage }
            }
            dispatch(action);

            return false;
        }
        const action = {
            type: authTypes.signUp,
            payload: 'user registered',
        };
        dispatch(action)

        return true;
    }

    const loginFacebook = async () => {
        const { ok, uid, photoURL, displayName, errorMessage } = await loginWithFacebook();
        if (!ok) {
            const action = {
                type: authTypes.errors,
                payload: { errorMessage }
            }
            dispatch(action);

            return false;
        }

        const userPayload = { uid, displayName, photoURL }

        const action = {
            type: authTypes.login,
            payload: userPayload,
        };
        const userInfo = await getUserInfo(userPayload);
        reduxDispatch(setMode(userInfo.darkMode ? 'dark' : 'light'));

        localStorage.setItem('user', JSON.stringify(userInfo));

        dispatch(action);

        return true;
    }

    const loginSpotify = async (tokenData) => {
        const userResponse = await fetch("https://api.spotify.com/v1/me", {
            method: "GET", headers: { Authorization: `Bearer ${tokenData}` }
        });
        const userSpotify = await userResponse.json();
        console.log(userResponse)
        if (!userResponse.ok) {
            const { userResponse: { statusText } } = userResponse;

            const action = {
                type: authTypes.errors,
                payload: { statusText }
            }
            dispatch(action);

            return false;
        }

        const userPayload = {
            uid: userSpotify.id,
            displayName: userSpotify.display_name,
            photoURL: userSpotify.images?.[0]?.url || null,
            // email: userSpotify.email,
            country: userSpotify.country,
            followers: userSpotify.followers,
            isLogged: true
        };

        const action = {
            type: authTypes.login,
            payload: userPayload,
        };

        const userInfo = await getUserInfo(userPayload);
        reduxDispatch(setMode(userInfo.darkMode ? "dark" : "light"));
        localStorage.setItem("user", JSON.stringify(userInfo));
        dispatch(action);

        return true;
    };


    return { login, logout, loginGoogle, signUpWithEmail, loginFacebook, loginSpotify };
};
