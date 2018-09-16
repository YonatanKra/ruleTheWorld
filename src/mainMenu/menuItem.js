import {CustomElementsHelper} from "../helpers/customElements";

// template
const templateString = `
    <div>Item</div>
`;
const tmpl = CustomElementsHelper.createTemplate(templateString);

export class MenuItem extends HTMLLIElement{
    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
}

CustomElementsHelper.registerElement('menu-item', MenuItem);