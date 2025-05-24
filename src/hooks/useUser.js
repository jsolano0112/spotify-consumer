import React from 'react'
import { FirebaseDB } from '../firebase/config'
import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { userTypes } from '../users/types/userTypes'
export const useUser = (userInfoFromAuth, dispatch) => {
    const createUser = async (user) => {
        try {
            const newDoc = doc(collection(FirebaseDB, `users/${userInfoFromAuth.uid}/detail`))
            await setDoc(newDoc, user);
            user.id = newDoc.id;
            const action = {
                type: userTypes.saveEvent,
                payload: event
            }
            dispatch(action);
        } catch (error) {
            const action = {
                type: userTypes.error,
                payload: {
                    errorMessage: error.message
                }
            }
            dispatch(action);
        }
    }
    return { createUser }

}
