import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './mainMenu/index';
import { MainMenuModel } from "./models/mainMenuModel";

import './overlay/overlay';
import { fbAuth } from './firebase';

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
    <div id="content" class="container-fluid"></div>
    <footer></footer>
`;
wrapper.innerHTML = template;

// set the hidden menu
const overlay = document.createElement('app-overlay');
const mainMenu = document.createElement('main-menu');
mainMenu.dataSet = MainMenuModel;
overlay.datum = mainMenu;

wrapper.appendChild(overlay);

setTimeout(() => {
    const currUser = fbAuth.currentUser;
    if (!currUser) {
        fbAuth.googleLogin()
            .then(result => {
                console.log('LOGIN SUCCESS');
            })
            .catch(error => {
                console.log('Please enter your credentials')
            });
    }
    overlay.open();
}, 2000);



