import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseAuth, FirebaseDB } from "./config";
import { GoogleAuthProvider } from "firebase/auth"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FacebookAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore/lite'

const GoogleProvider = new GoogleAuthProvider();
const provider = new FacebookAuthProvider();
const profileImage = 'https://media.istockphoto.com/id/1495088043/es/vector/icono-de-perfil-de-usuario-avatar-o-icono-de-persona-foto-de-perfil-s%C3%ADmbolo-de-retrato.jpg?s=612x612&w=0&k=20&c=mY3gnj2lU7khgLhV6dQBNqomEGj3ayWH-xtpYuCXrzk=';

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
        const { user } = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        return {
            ok: true,
            uid: user.uid
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

export const getUserInfo = async (user, userLogged) => {
    const initialInfo = {
        id: user.uid,
        displayName: user.displayName,
        spotifyId: user?.spotifyId ?? null,
        photoURL: user?.photoURL ?? profileImage,
        country: user.country,
        darkMode: false,
        followers: user?.followers?.total ?? 0,
        following: user?.following ?? 0,
        isloggedWithSpotify: user?.isloggedWithSpotify ?? false,

    }
    const uid = user.uid;
    const detailDocRef = doc(FirebaseDB, `users/${uid}`);
    const detailSnap = await getDoc(detailDocRef);

    if (detailSnap.exists() && userLogged){
        const existingData = detailSnap.data();
        const updates = {};
        if (initialInfo.spotifyId !== existingData.spotifyId) {
            updates.spotifyId = initialInfo.spotifyId;
        }
        if (initialInfo.isloggedWithSpotify !== existingData.isloggedWithSpotify) {
            updates.isloggedWithSpotify = initialInfo.isloggedWithSpotify;
        }
        console.log('updates',updates)

        if (Object.keys(updates).length > 0) {
            await updateDoc(detailDocRef, updates);
        }

        return { ...existingData, ...updates };
    }
    else if(!detailSnap.exists() && !userLogged){
                console.log('usuario a crear')
        await setDoc(detailDocRef, initialInfo);
        return initialInfo;
    }
    return detailSnap.data()
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
