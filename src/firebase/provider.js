import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";
import {GoogleAuthProvider} from "firebase/auth"

const GoogleProvider = new GoogleAuthProvider();

export const loginUser = async (email, password) => {
    try {

        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);

        const { uid, photoURL, displayName } = result.user;

        return {
            ok: true,
            displayName,
            photoURL,
            email,
            uid
        };
    } catch (error) {
        console.log(error.message)

        return {
            ok: false,
            errorMessage: error.message,
        };

    }
};

export const loginWithGoogle = async () => {

    GoogleProvider.setCustomParameters({ prompt: 'select_account' })

    try {

        const result = await signInWithPopup(FirebaseAuth, GoogleProvider);

        const { uid, photoURL, displayName, email } = result.user;

        return {
            ok: true,
            displayName,
            photoURL,
            email,
            uid,
        };


    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}