const toggleHiddenElement = (element) => {
    if (element.style.display === 'none')
        element.style.display = 'block';
    else
        element.style.display = 'none';
}

const changeToFunkyColor = (domElement) => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    domElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Exporting listed functions named export
//export { toggleHiddenElement, changeToFunkyColor };

/* You can use the export keyword before the function identifier
    to export the function directly

    Inline export
export const toggleHiddenElement = (domElement) => {
    // logic omitted...
  }
   
  export const changeToFunkyColor = (domElement) => {
    // logic omitted...
  }
  */

// Exporting using default

const resources = {
    toggleHiddenElement,
    changeToFunkyColor
}

export default resources;