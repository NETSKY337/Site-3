const userTextField = document.querySelector('a');


userTextField.addEventListener('click', () => {
    const userText = prompt('Введите текст');
    userTextField.textContent = userText;
    Event.preventDefault()
console.log('userText');
})
