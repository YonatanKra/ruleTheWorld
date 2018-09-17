import {CustomElementsHelper} from "../helpers/customElements";

// template
const templateString = `
    <style>
        :host {
            color: white;
        }
    </style>
    
`;
const tmpl = CustomElementsHelper.createTemplate(templateString);

const EVENT_HANDLER = {
    datum: function(instance, oldVal, newVal) {
        instance.innerHTML = `<span class="mainMenuItem">${newVal.template}</span>`;
    }
};

export class MenuItem extends HTMLLIElement{
    constructor() {
        super();
        this.setEvents();
    }

    setEvents() {
        this.addEventListener('click', event => {
            typeof this.datum.onClick === 'function' ?
                this.datum.onClick(event, this.datum) : null;
        });

        this.addEventListener('mouseenter', event => {
            typeof this.datum.onMouseEnter === 'function' ?
                this.datum.onMouseEnter(event, this.datum) : null;
        });

        this.addEventListener('mouseleave', event => {
            typeof this.datum.onMouseLeave === 'function' ?
                this.datum.onMouseLeave(event, this.datum) : null;
        });
    }

    set datum(datum) {
        EVENT_HANDLER['datum'](this, this._datum, datum);
        this._datum = datum;
    }

    get datum() {
        return this._datum;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        EVENT_HANDLER[name](this, oldValue, this[name]);
    }

    static get observedAttributes() {
        return [];
    }
}

CustomElementsHelper.registerElement('menu-item', MenuItem, {extends: 'li'});