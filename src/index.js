// import core firebase client (required)
import firebase from 'firebase/app';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './mainMenu/index';
import './overlay';
import { UserHelper } from './helpers/user';

import './app.css';

addEventListener("load", function () {
    setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
    window.scrollTo(0, 1);
}

// set the app's wrapper element
const wrapper = document.createElement('div');
wrapper.classList.add('container-fluid');
wrapper.classList.add('d-flex');
wrapper.classList.add('flex-column');
wrapper.setAttribute('id', 'appWrapper');

document.body.appendChild(wrapper);

// set the template of our app - TODO::make the nav and content a custom component?
const template = `
    <nav class="navbar sticky-top">
        <a class="navbar-brand" href="#"><img src="assets/images/dhLogo.png"/></a>
    </nav>
    <div id="content" class="container-fluid">
        
    </div>
    <footer></footer>
`;
wrapper.innerHTML = template;

// set the hidden menu
const overlay = document.createElement('app-overlay');
const mainMenu = document.createElement('main-menu');
overlay.datum = mainMenu;

wrapper.appendChild(overlay);

setTimeout(() => {
    const currUser = firebase.auth().currentUser;
    if (!currUser) {
        userHelper.googleLogin();
    }
    overlay.open();
}, 2000);

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

const userHelper = new UserHelper(firebase);

