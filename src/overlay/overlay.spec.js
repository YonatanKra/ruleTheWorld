require("./overlay");

describe('Overlay tests', () => {
    let element;
   beforeEach(() => {
       element = document.createElement('app-overlay');
   });

   describe('overlay API', () => {
       describe('open', () => {
           it('should ', () => {

           });
       })
   });

   describe('close button', () => {
       let button;
       beforeEach(() => {
          element.open();
          button = element.shadowRoot.querySelector('button.overlay-close');
       });

       it('should have a close button inside its shadow root', () => {
        expect(button).toBeTruthy();
       });

       it('should set remove overlay open class and set customElement z-index to auto when clicked', () => {
           const overlayDiv = element.shadowRoot.querySelector('.overlay');
           button.click();
           expect(overlayDiv.classList.contains('open')).toBeFalsy();
           expect(element.style.zIndex).toEqual("auto");
       });
   });

   describe('overlay content', () => {

   });

});