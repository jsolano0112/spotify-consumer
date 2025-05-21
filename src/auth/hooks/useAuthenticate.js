import { authTypes } from "../types/authTypes"
import { loginUser, loginWithGoogle, signUpWithEmailAndPassword } from "../../firebase/provider"
export const useAuthenticate = (dispatch) => {
    //login
    //desarrollar la logica
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

        localStorage.setItem('user', JSON.stringify(userPayload));

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

        localStorage.setItem('user', JSON.stringify(userPayload));

        dispatch(action)

        return true;
    }

    const logout = () => {
        const action = {
            type: authTypes.logout,
        }
        localStorage.setItem('user', JSON.stringify(null));
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

    return { login, logout, loginGoogle, signUpWithEmail };
};

