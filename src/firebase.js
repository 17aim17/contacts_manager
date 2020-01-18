import * as firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.firestore()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// const data = {
//     firstName: 'Ashish',
//     lastName: 'Kumar',
//     email: [
//         {
//             Email: 'sdfgfh',
//             label: 'dfgh'
//         },
//         {
//             Email: 'sdfg',
//             label: 'sdfg'
//         }
//     ],
//     phone: [
//         {
//             phone: 'sdfgfh',
//             label: 'dfgh'
//         },
//         {
//             phone: 'sdfg',
//             label: 'sdfg'
//         }
//     ]
// };

// let setDoc = db.collection(`users/${uuid()}/contacts`).add(data);
// let set1Doc = db.collection(`users/${uuid()}/contacts`).add(data);





