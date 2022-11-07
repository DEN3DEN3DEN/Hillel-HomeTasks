// На странице есть две кнопки. При клике на первую кнопку просим пользователя ввести в prompt ссылку, при клике на вторую - переадресовывается на другой сайт (по ранее введенной ссылке). Реализовать проверку на http / https. Если протокол не указан - добавляем

const btnGetLink = document.getElementById('btnPrompt');
const btnGoToLink = document.getElementById('btnLink');
let link;
let linkArr;
let stringLink;

btnGetLink.onclick = function() {
    link = prompt("Write link");
    linkArr = link.split("");
    let arrText = [];
    const checkHttp = ['h','t','t','p'];
    const checkHttps = ['h','t','t','p','s'];

    for(let i = 0; i < 7; i++) {
        arrText.push(linkArr[i]);
    }

    if(arrText != checkHttp || arrText != checkHttps) {
        linkArr.unshift('h','t','t','p','s',':','/','/');
    }

    stringLink = linkArr.join("");
    console.log(stringLink);
}

btnGoToLink.onclick = function() {
    location.href = stringLink;
}