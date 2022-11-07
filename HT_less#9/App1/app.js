// Имеется текстовое поле на странице. При фокусировке на этом поле сбоку появляется <div> с информацией. При пропаже фокуса - <div> так же пропадает

const input = document.querySelector('.input');
const instruction = document.querySelector('.instruction');

input.addEventListener('mouseover', function () {
    instruction.classList.add('show_instruction')
})

input.addEventListener('mouseout', function () {
    instruction.classList.remove('show_instruction')
})

