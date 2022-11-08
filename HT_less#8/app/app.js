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

const userName = function chekName() {
    const name = prompt('What is your name?');
    const conf = confirm('Is your name: ' + name + '?');
    if (conf === true) {
      alert("You pressed OK!");
    } else {
      alert("Input your correct name!");
      chekName();
    }
    return name;
}();
  
const userAge = function () {
    let userAge = prompt('Enter your age:');
    let validAge = false;
    while (!validAge) {
        if(isNaN(userAge)) {
            userAge = prompt('Input must be a number!\nEnter again.'); 
        } else if (userAge < 18) {
            userAge = prompt('User must be at least 18years old!\nEnter again.');
        } else if (userAge === null || userAge === undefined) {
           userAge = prompt('Enter your age:');
        } else {
            validAge = true;
        }
    }
    return userAge;   
}();

const userCar = function checkCar () {
    const car = prompt('What is your car?');
    const conf = confirm('Is your car: ' + car + '?');
    if (conf === true) {
      alert("You pressed OK!");
    } else {
      alert("Input your correct car!");
      chekCar();
    }
    return car; 
}();

const userYearOfCar = function () {
    let userYearOfCar = parseInt(prompt('What year of manufacture is your car?'));
    if (!userYearOfCar || isNaN(userYearOfCar)) {
        userYearOfCar = prompt("Error! Please, enter year of manufacture of your car again!") 
    }
    return userYearOfCar;
}();


const owner = new Person (userName,userAge);
const myCar = new Car (userCar,userYearOfCar);
owner.personInfo();
myCar.getCarInfo();
myCar.ownerCar(owner);





    