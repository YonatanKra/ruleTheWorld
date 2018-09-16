// import core firebase client (required)
import firebase from 'firebase/app';
import { UserHelper } from "./user";
// Initialize Firebase
const config = {
    apiKey: "AIzaSyDlhPGook2CjAdgD9BkAvL6NBFcSG0cytw",
    authDomain: "dragon-hunters.firebaseapp.com",
    databaseURL: "https://dragon-hunters.firebaseio.com",
    projectId: "dragon-hunters",
    storageBucket: "dragon-hunters.appspot.com",
    messagingSenderId: "150376561569"
};
firebase.initializeApp(config);

export const fbAuth = new UserHelper(firebase);