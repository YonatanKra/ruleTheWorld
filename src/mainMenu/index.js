import {CustomElementsHelper} from "../helpers/customElements";
import './menuItem';

// template
const templateString = `
    <style>
        nav {
            padding: var(--menu-nav-padding, 5% 5%);
        }
    </style>
    <nav>
        <ul class="mainMenu"></ul>
    </nav>
`;
const tmpl = CustomElementsHelper.createTemplate(templateString);


export class MainMenu extends HTMLElement{
    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        this._menuListElement = shadowRoot.querySelector('.mainMenu');
        this.dataSet = {};
    }

    connectedCallback() {

    }

    set dataSet(datum) {
        this._data = datum;
        if (!datum.items) {
            return;
        }
        MainMenu.handleDataRefresh(this._menuListElement, datum);
    }

    get dataSet() {
        return this._data;
    }

    static handleDataRefresh(listWrapper, data) {
        let defaults = Object.assign({}, data);
        delete defaults.items;
        data.items.forEach(datum => MainMenu.addListElement(listWrapper, datum, defaults));
    }

    static addListElement(listWrapper, datum, defaults) {
        const li = document.createElement('li', {is: 'menu-item'});
        datum = Object.assign({}, defaults, datum);
        li.datum = datum;
        listWrapper.appendChild(li);
    }
}

CustomElementsHelper.registerElement('main-menu', MainMenu);