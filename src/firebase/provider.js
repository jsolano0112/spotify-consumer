import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseAuth, FirebaseDB } from "./config";
import { GoogleAuthProvider } from "firebase/auth"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FacebookAuthProvider } from "firebase/auth";
import { collection, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore/lite'

const GoogleProvider = new GoogleAuthProvider();
const provider = new FacebookAuthProvider();

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

export const signUpWithEmailAndPassword = async ({ email, password }) => {
    try {
        await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        return {
            ok: true
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const loginWithFacebook = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, provider);
        const { uid, photoURL, displayName, email } = result.user;

        return {
            ok: true,
            displayName,
            photoURL,
            email,
            uid
        };
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        };
    }
};

export const getUserInfo = async (user) => {
    const initialInfo = {
        id: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        darkMode: false,
        followers: 0,
        following: 0,
        isloggedWithSpotify: false,
        country: null
    }

    const uid = user.uid;
    const detailDocRef = doc(FirebaseDB, `users/${uid}`);
    const detailSnap = await getDoc(detailDocRef);

    if (!detailSnap.exists()) {
        await setDoc(detailDocRef, initialInfo);
        return initialInfo;
    }
    return detailSnap.data();
}


export const updateUserInfo = async (userUid, updatedFields) => {
    const userDocRef = doc(FirebaseDB, `users/${userUid}`);
    try {
        await updateDoc(userDocRef, updatedFields);
    } catch (error) {
        console.error("Error updating user info:", error);
        throw error;
    }
};
