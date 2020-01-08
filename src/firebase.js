import * as firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyD-JvBstCxS0mOvjEWmsyVetcN7ElfAvYs",
    authDomain: "contacts-manager-fedfc.firebaseapp.com",
    databaseURL: "https://contacts-manager-fedfc.firebaseio.com",
    projectId: "contacts-manager-fedfc",
    storageBucket: "contacts-manager-fedfc.appspot.com",
    messagingSenderId: "39954673017",
    appId: "1:39954673017:web:54846b1244ec7e5e1b53a8",
    measurementId: "G-PV593BX198"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.firestore()

export { firebase, database as default };

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





