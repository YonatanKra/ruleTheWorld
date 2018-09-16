import './mainMenu/index';
import './overlay';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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

// set the template of our app - TODO::make the nav a custom component?
const template = `
    <nav class="navbar sticky-top">
        <a class="navbar-brand" href="#"><img src="assets/images/dhLogo.png"/></a>
    </nav>
    <app-overlay id="appOverlay"></app-overlay>
    <div id="content" class="container-fluid">
        
    </div>
`;
wrapper.innerHTML = template;

// set the hidden menu
const overlay = document.createElement('app-overlay');
const mainMenu = document.createElement('main-menu');
overlay.datum = mainMenu;

wrapper.appendChild(overlay);

setTimeout(() => {
    overlay.open();
}, 2000);