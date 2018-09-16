// import core firebase client (required)
import firebase from 'firebase/app';
// import Firebase Authentication (optional)
import 'firebase/auth';

function oAuthLogin(provider) {

}

function oAuthLogout() {

}

function googleLogin() {
    return oAuthLogin(new firebase.auth.GoogleAuthProvider());
}

export class UserHelper {
    constructor(firebase) {
        if (!firebase) {
            throw('UserHelper must be initiated with a firebase instance');
        }
        this._firebase = firebase;
    }

    oAuthLogin(provider) {
        return this._firebase.auth().signInWithPopup(provider)
            .then(result => {
                console.log(result.user);
            });
    }

    oAuthLogout() {
        return this._firebase.auth().signOut().then(() => {

        });
    }

    googleLogin() {
        return googleLogin();
    }

}


export const userHelper = {
    oAuthLogin,
    oAuthLogout,
    googleLogin
};