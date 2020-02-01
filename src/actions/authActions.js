import { firebase, googleAuthProvider } from '../firebase';
import { LOGIN, LOGOUT } from './types'

export const login = uid => {
    return {
        type: LOGIN,
        payload: uid
    };
};

export const startLogIn = () => (dispatch) => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};

export const startLogout = () => (dispatch) => {
    window.location.reload()
    firebase.auth().signOut();
    return
};
