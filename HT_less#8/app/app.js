/*Создать сущность человека
имя
возраст
Метод вывода данных

Создать сущность автомобиля:
Характеристики автомобиля отдельными свойствами
Методы:
Вывода на экран данных об этом автомобиле
Присвоения этого автомобиля владельцу (записать в автомобиль объект владельца)

Все данные о человеке и об автомобиле получать от пользователя. Реализовать необходимые проверки на корректность ввода (пустые поля, возраст >18 для человека и т.д. по необходимости).
*/


const userName = function () {
    let userName = prompt('Enter your name:');
    let validName = false;
    while (!validName) {
        if (userName.trim === " ") {
            userName = prompt('User name cannot be empty!\nEnter again.');
        } else {
        validName = true;
        }
    }
    return userName;
}

const userAge = function () {
    let userAge = prompt('Enter your age:');
    let validAge = false;
    while (!validAge) {
        if(isNaN(userAge)) {
            userAge = prompt('Input must be a number!\nEnter again.'); 
        } else if (userAge < 18) {
            userAge = prompt('User must be at least 18years old!\nEnter again.');   
        } else {
            validAge = true;
        }
    }
    return userAge;   
}

const userCar = function () {
    let userCar = prompt('What car do you own?');
    do {
        if (parseFloat(userCar)) {
            userCar = prompt("Error! Please, enter your car again!");
        }
    } while (parseFloat(userCar));
    if (userCar == null || userCar == undefined) {
        userCar = "Not specified!";
    }
    return userCar;
}

const userYearOfCar = function () {
    let userYearOfCar = parseInt(prompt('What year of manufacture is your car?'));
    if (!userYearOfCar || isNaN(userYearOfCar)) {
        userYearOfCar = prompt("Error! Please, enter year of manufacture of your car again!") 
    }
    return userYearOfCar;
}


const owner = new Person (userName(),userAge());
const myCar = new Car (userCar(),userYearOfCar());
owner.personInfo();
myCar.getCarInfo();
myCar.ownerCar(owner);





    