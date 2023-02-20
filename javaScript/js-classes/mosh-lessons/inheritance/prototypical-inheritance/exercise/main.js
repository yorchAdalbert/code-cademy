'use strict';

function HtmlElement() {
    this.click = function () {
        console.log('clicked');
    }

}

HtmlElement.prototype.focus = function () {
    console.log('focused');
}
HtmlImageElement.prototype.render = function () {
    return 'Rendering';
}


function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function (item) {
        this.items.push(item);
    }

    this.removeItem = function (item) {
        const index = this.items.indexOf(item)

        if (index >= 0) this.items.splice(index, 1)
    }
}

function HtmlImageElement(src) {
    this.src = src
}

// To get the instance and prototype methods from the parent class
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
HtmlSelectElement.prototype.render = function () {
    let htmlContent = '<select>';

    for (let item of this.items)
        htmlContent += `\n  <option>${item}</option>`;

    htmlContent += '\n</select>'

    return htmlContent;
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;
HtmlImageElement.prototype.render = function () {
    return `<img src="${this.src}" />`
}


const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement('https://image-chida.png')
];

for (let element of elements)
    console.log(element.render())
// This will only get you the prototype method from the parent class
// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);