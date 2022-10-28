/*Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. В переменной znak может быть: +, -, *, /, %, ^ (степень). Вывести результат математического действия, указанного в переменной znak. Оба числа и знак получаются от пользователя.*/


function doMath(x, znak, y) {
    if (~znak.search(/[^+\-*/%^]/) || znak.length !== 1) return 'Ошибка';
    return eval(x + znak.replace('^', '**') + y)
}
const x = prompt('Введите число x');
const y = prompt('Введите число y');
const znak = prompt('Введите знак действия над числами');
console.log(doMath(x, znak, y));