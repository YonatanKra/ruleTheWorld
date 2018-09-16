import {CustomElementsHelper} from "../helpers/customElements";

// template
const templateString = `
    <style>
    .overlay-animation {
        opacity: 0;
        visibility: hidden;
        -webkit-transition: opacity 0.5s, visibility 0s 0.5s;
        transition: opacity 0.5s, visibility 0s 0.5s;
    }
    .overlay-animation.open {
        opacity: 1;
        visibility: visible;
        -webkit-transition: opacity 0.5s;
        transition: opacity 0.5s;
        z-index: 999;
    }
    .overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.62);
    }
    
    .overlay .overlay-close {
        width: 26px;
        height: 26px;
        position: absolute;
        right: 32px;
        top: 32px;
        overflow: hidden;
        border: none;
        background: url(../assets/images/cross.png) no-repeat center center;
        text-indent: 200%;
        color: transparent;
        outline: none;
        z-index: 100;
        cursor: pointer;
    }
    </style>
    <div class="overlay overlay-animation">
        <button type="button" class="overlay-close">Close</button>
        <div class="child"></div>
    </div>
      
`;
const tmpl = CustomElementsHelper.createTemplate(templateString);

/**
 *
 */
export class Overlay extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        this._wrapper = shadowRoot.querySelector('.overlay');
        this._wrapper.querySelector('.overlay-close').addEventListener('click', e => {
           this.close();
        });
        this._child = shadowRoot.querySelector('.child');
    }

    connectedCallback() {

    }

    set datum(datum) {
        this._datum = datum;
        Overlay.handleDataRefresh(this._child, datum);
    }

    get datum() {
        return this._data;
    }

    open() {
        if (this._wrapper.classList.contains('open')) {
            return;
        }
        this._wrapper.classList.add('open');
    }

    close() {
        if (!this._wrapper.classList.contains('open')) {
            return;
        }
        this._wrapper.classList.remove('open');
    }


    /**
     *
     * @param hostElement - HTMLElement
     * @param childElement - comprised of:
     *  element
     */
    static handleDataRefresh(hostElement, childElement) {
        hostElement.innerHTML = '';
        hostElement.appendChild(childElement);
    }
}

CustomElementsHelper.registerElement('app-overlay', Overlay);