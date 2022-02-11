const modalOpenBtn = document.querySelector ('.test-drive__button');
const modalCloseBtn = document.querySelector ('.close__button');
const modalWindow = document.querySelector ('.modal');
const form = document.querySelector ('.modal__form')
// const submitBtn = form.querySelector ('.')

// let carNameArea = document.querySelector ('.');
// let hiddenInput = document.querySelector ('.');
// let carName = document.querySelector ('.');


modalOpenBtn.addEventListener ('click', function() {
    modalWindow.style.display = 'flex';
})

modalCloseBtn.addEventListener ('click', function() {
    modalWindow.style.display = 'none';
})