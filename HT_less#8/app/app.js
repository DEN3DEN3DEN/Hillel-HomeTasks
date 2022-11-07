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

function Person (pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.personInfo = function () {
        console.group (`${this.name} info:`);
        console.log ("Your name is: " + this.name);
        console.log ("Your age is: " + this.age);
        console.groupEnd ();
    };
}; 

function Car (pModel,pYear) {
    this.model = pModel;
    this.year = pYear;
    this.getCarInfo = function () {
        console.group (`${this.model} info:`);
        console.log ("Model of your car: " + this.model);
        console.log ("Year of issue: " + this.year);
        console.groupEnd();
    };
    this.ownerCar = function (person) {
        console.log(person.name + " is the owner of the " + this.model + " " + this.year);
    };
};

const owner = new Person (
    pName = prompt('what is your name?'),
    pAge = prompt('How old are you?')
);
const myCar = new Car(
    pModel = prompt('What car do you own?'),
    pYear = prompt('What year is your car?')
);
owner.personInfo();
myCar.getCarInfo();
myCar.ownerCar(owner);




