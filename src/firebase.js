import firebase from "firebase/app";

import "firebase/firestore";

const config = {
    apiKey: "AIzaSyC3458PG75KkaZFbD5u3QDwBkMlxBuJGU0",
    authDomain: "marketplace-coder.firebaseapp.com",
    projectId: "marketplace-coder",
    storageBucket: "marketplace-coder.appspot.com",
    messagingSenderId: "1005800447379",
    appId: "1:1005800447379:web:432dcdc25a87c705399c66"
}

const app = firebase.initializeApp(config)

export const firestore = firebase.firestore(app)

