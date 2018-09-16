export class CustomElementsHelper {
    constructor() {

    }

    static createTemplate(template) {
        const tmpl = document.createElement('template');
        tmpl.innerHTML = template;
        return tmpl;
    }

    static registerElement(elementName, elementClass) {
        window.customElements.define(elementName, elementClass);
    }

}