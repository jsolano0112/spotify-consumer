import { authTypes } from "../types/authTypes"
import { loginUser, loginWithGoogle } from "../../firebase/provider"

export const useAuthenticate = (dispatch) => {
    //login
    //desarrollar la logica
    const login = async ({ email, password }) => {

        console.log("email2:", email);
        console.log("password2:", password);

        const {ok, uid, photoURL, displayName, errorMessage} = await loginUser(email, password)

        if ( !ok ) {
            const action = {
                type: authTypes.erros,
                payload: { errorMessage }
            }
            dispatch( action );

            return false;
        }

        const userPayload = { email, uid, displayName, photoURL}

        const action = {
            type: authTypes.login,
            payload: userPayload,
        };

        localStorage.setItem('user', JSON.stringify(userPayload));

        dispatch(action);

        return true;
    };

    const loginGoogle = async () =>{

        const {ok, uid, photoURL, displayName, errorMessage, email} = await loginWithGoogle();


        if (!ok) {
            const action = {
                type: authTypes.erros,
                payload: { errorMessage }
            };
            dispatch(action);

            return false;
        }

        const userPayload = {email, uid, displayName, photoURL}

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
    return { login, logout, loginGoogle };
};

