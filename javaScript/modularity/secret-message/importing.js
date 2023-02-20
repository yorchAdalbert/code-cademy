// Importing using default export
import domFunctions from "./modules/dom-functions.js";
const { changeToFunkyColor, toggleHiddenElement } = domFunctions;

const buttonElement = document.getElementById('secret-btn');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
    toggleHiddenElement(pElement);
    changeToFunkyColor(buttonElement);
});