const btn = document.getElementById('secret-btn');
const secretP = document.getElementById('secret-p');

const toggleHiddenElement = (element) => {
    if (element.style.display === 'none')
        element.style.display = 'block';
    else
        element.style.display = 'none';
}

btn.addEventListener('click', () => {
    toggleHiddenElement(secretP);
})