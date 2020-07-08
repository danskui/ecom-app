import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD2FR_bT2HYyDaE1VJ94NEN7RRjcvz2JOI",
        authDomain: "react-ecom-db-409a8.firebaseapp.com",
            databaseURL: "https://react-ecom-db-409a8.firebaseio.com",
                projectId: "react-ecom-db-409a8",
                    storageBucket: "react-ecom-db-409a8.appspot.com",
                        messagingSenderId: "122861294069",
                            appId: "1:122861294069:web:fea1907bb0fcf28ab390bc",
                                measurementId: "G-W8GMJ0PEBP"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;