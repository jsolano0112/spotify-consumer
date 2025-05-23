import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { GoogleAuthProvider } from "firebase/auth"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FacebookAuthProvider } from "firebase/auth";

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

export const signUpWithEmailAndPassword = async ({ email, password }) => {
    try {
        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        console.log(result)
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
    signInWithPopup(FirebaseAuth, provider).then((result)=>{
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      fetch(`https://graph.facebook.com/${result.user.providerData[0].uid}/picture?type=large&access_token=${accessToken}`)
      .then((response)=>response.blob())
      .then((blob)=>{
        // setProfilePicture(URL.createObjectURL(blob));
      })
    }).catch((err)=>{
      console.log(err.message);
    })
}