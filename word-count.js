const inputData = document.querySelector('.word_length')
const button = document.querySelector('button')
const text = document.querySelector('.output')

button.addEventListener('click', (e) => {
    e.preventDefault()
    inputLength = inputData.value.length;
    text.innerText = inputLength;
})





