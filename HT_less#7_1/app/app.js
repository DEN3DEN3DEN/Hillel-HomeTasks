/*Реализовать рекурсивную функцию которая возводит число в степень.
Число которое нужно возвести в степень передается как первый аргумент в функцию
Степень передается как второй аргумент в функцию
pow(num, degree)*/

const num = parseInt(prompt('Введите число которое хотите возвести в степень: ','...'));
const degree = parseInt(prompt('Введите степень в  которую вы хотите возвести число: ','...'));

function pow(number, degree) {
    return degree ? number * pow(number, degree - 1) : 1;
}

console.log(pow([num], [degree]));
