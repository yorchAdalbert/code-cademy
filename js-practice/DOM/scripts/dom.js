
// document -   to access an html element
let body = document.body;

/*
    innerHTML    -   to set the element's content
        body.innerHTML = 'The cat loves the dog';
    You can also add any valid HTML elements in the innerHTML
        document.body.innerHTML = '<h2>This is a heading</h2>';
*/

/*
    Select and Modify Elements
    You can select CSS selectors to access DOM elements, selectors can include
        - tag name  - class - id
    The .querySelector() allows you to specify a CSS selector
*/

console.log(body)

/**
 * The .getElementsByClassName() and .getElementsByTagName() returns an array of elements.
 * You can use bracket notation to access individual elements.
 * 
 *      document.getElementsByClassName('student')[0].innerHTML = 'Not yet registered';
 *      document.getElementsByTagName('li')[1].innerHTML = 'Cedric Diggory`;
 */

document.querySelector('h1').innerHTML = 'Most popular Harry Potter characters';
document.getElementById('fourth').innerHTML = 'Professor Snape';
document.getElementsByClassName('slytherin')[0].innerHTML = 'Salazar Slytherin';
document.getElementsByTagName('li')[0].innerHTML = 'Dobby';

/*
 * Another way to modify an element is by changing its CSS style.
 *      .style property provides access to the inline style 
 *          let blueElement = document.querySelector('.blue');
            blueElement.style.backgroundColor = 'blue';
            document.querySelector('.blue').style.fontFamily = 'Roboto';
 */

document.getElementsByClassName('container')[0].style.backgroundColor = 'red';
document.body.style.backgroundColor = '#201f2e';
document.body.style.color = 'white';

/*
 *  Traversing the DOM

    Each element has a .parentNode and .children property.
 */

let parentElement = document.getElementById('groceries').parentNode;
let childElements = document.getElementById('groceries').children;

console.log(parentElement);
console.log(childElements);

let first = document.body.children[0];

first.innerHTML = 'Using the DOM, you can modify any part from the webpage';
first.parentNode.style.backgroundColor = 'darkblue';
/**
 *  Create and Inset Elemets
 * 
 *  The .createElement() creates a new element based on the specified tag name passed into it
 *  as an argument. However, it does not append it to the document. It creates an empty element with
 *  no inner HTML.
 * 
 *  In order to create an element and add it to the web page. you must assign it to be the child of an
 *  element that already exists on the DOM, referred to as the parent element.
 *      .appendChild()
 *  This method does not replace the content inside of the parent element.
 */

let paragraph = document.createElement('p');
paragraph.id = 'info';
paragraph.innerHTML = 'The text inside the paragraph';

document.getElementsByClassName('container')[0].appendChild(paragraph);
/*document.body.appendChild(paragraph);*/

/**
 * Remove an Element
 */

// With the querySelector, you get the first element from a given selector
let removedParagraph = document.querySelector('p');
document.body.removeChild(removedParagraph);

// Hidding an element

document.getElementById('fifth').hidden = true;

// Add Click Interactivity

let element = document.querySelector('button');

element.onclick = function () {
    element.style.backgroundColor = 'blue';
}

const textWhite = () => {
    element.style.color = 'white';
    element.style.backgroundColor = 'blue';
}

element.onclick = textWhite;