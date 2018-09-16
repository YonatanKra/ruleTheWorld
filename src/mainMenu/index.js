import {CustomElementsHelper} from "../helpers/customElements";
import './menuItem';

// template
const templateString = `
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
        this.dataSet = [1,2,3];
    }

    connectedCallback() {

    }

    set dataSet(datum) {
        this._data = datum;
        MainMenu.handleDataRefresh(this._menuListElement, datum);
    }

    get dataSet() {
        return this._data;
    }

    static handleDataRefresh(listWrapper, data) {
        data.forEach(datum => MainMenu.addListElement(listWrapper, datum));
    }

    static addListElement(listWrapper, datum) {
        const li = document.createElement('li', {is: 'menu-item'});
        li.datum = datum;
        listWrapper.appendChild(li);
    }
}

CustomElementsHelper.registerElement('main-menu', MainMenu);