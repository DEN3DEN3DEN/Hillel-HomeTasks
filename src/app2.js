/*Спросить пользователя год его рождения.

Спросить у него, в каком городе он живет.

Спросить его любимый вид спорта.

При нажатии на ОК показываем ему окно, где должна быть отображена следующая информация:

Его возраст.

Если пользователь введет Киев, Вашингтон или Лондон, то показать ему сообщение – “Ты …живешь в столице ” и на место точек подставляем название страны, столицей которой является город, который ввел пользователь. Иначе показываем ему “ты живешь в городе …” и на место точек – введенный город.

Выбираем сами три вида спорта и три чемпиона в этих видах. Соответственно, если пользователь введет один из этих видов спорта, то показываем ему сообщение “Круто! Хочешь стать …?” и подставляем на место точек имя и фамилию чемпиона.

Всё это должно быть отображено в одном окне (алерте).

Если в каком-то из случаев он не захочет вводить информацию и нажмет "Отмена", показать ему сообщение – “Жаль, что Вы не захотели ввести свой(ю) …” и указываем, что он не захотел вводить – дату рождения, город или вид спорта.*/


let yearOfBirth = Number(prompt('Введите год своего рождения','....'));
let age = parseInt(2022 - yearOfBirth);

let city = prompt('Введите город в котором живете','....');
let city1 = 'Киев';
let city2 = 'Вашингтон';
let city3 = 'Лондон'; 
let country1 = 'Украины';
let country2 = 'США';
let country3 = 'Англии';

let sport = prompt('Введите любимый вид спорта','....');
let sport1 = 'Бокс';
let sport2 = 'Прыжки с шестом';
let sport3 = 'Футбол'; 
let sportsman1 = 'Алескандр Усик';
let sportsman2 = 'Сергей Бубка';
let sportsman3 = 'Ефим Конопля';


if (yearOfBirth > 0) {
    console.log('Твой возраст - ' + [age] + '!');
} else if (yearOfBirth === null) {
    console.log('Жаль, что вы не захотели ввести свой возрвст!');
}

switch (city) {
    case city1:
        CountryAlert(country1)
        break;
    case city2:
        CountryAlert(country2)
        break;
    case city3:
        CountryAlert(country3)
        break;
    case null:
        console.log('Жаль, что вы не захотели ввести свой город!');
        break;
    default:
        console.log('Ты живешь в городе ' + [city]);
}

function CountryAlert(country) {  
    console.log('Ты живешь в столице ' + [country]);
}

switch (sport) {
    case sport1:
        sportsmanAlert(sportsman1)
        break;
    case sport2:
        sportsmanAlert(sportsman2)
        break;
    case sport3:
        sportsmanAlert(sportsman3)
        break;
    case null:
        console.log('Жаль, что вы не захотели ввести свой любимый вид спорта!');
        break;
    default:
        console.log('Твой любимый вид спорта ' + [sport]);
}

function sportsmanAlert(sportsman) {  
    console.log('Круто! Хочешь стать как ' + [sportsman]);
}

let ageStr = 'Твой возраст - ' + [age] + '!';
let cityStr = 'Ты живешь в городе ' + [city] + '!';
let sportStr = 'Твой любимый вид спорта ' + [sport] + '!';

alert(ageStr+' '+cityStr+' '+sportStr);
