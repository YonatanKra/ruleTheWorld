// import core firebase client (required)
import firebase from 'firebase/app';

// import Firebase Authentication (optional)
import 'firebase/auth';

const GOOGLE_AUTH_PROVIDER = new firebase.auth.GoogleAuthProvider();

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
        return this.oAuthLogin(GOOGLE_AUTH_PROVIDER);
    }

    get currentUser() {
        return this._firebase.auth().currentUser;
    }

}