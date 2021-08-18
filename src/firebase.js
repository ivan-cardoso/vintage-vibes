import firebase from "firebase/app";

import "firebase/firestore";

const {API_KEY, AUTH_DOMAIN, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID} = process.env

const config = {
    apiKey: `${API_KEY}`,
    authDomain: `${AUTH_DOMAIN}`,
    storageBucket: `${STORAGE_BUCKET}`,
    messagingSenderId: `${MESSAGING_SENDER_ID}`,
    appId: `${APP_ID}`,
    projectId: "marketplace-coder",
}

const app = firebase.initializeApp(config)

export const firestore = firebase.firestore(app)

