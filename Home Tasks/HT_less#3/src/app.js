/* 1) Даны два различных числа. Определить какое из них больше, а какое меньше.
2) Известны два расстояния. Одно в километрах, другое - в футах (1 фут = 0,305м). Какое расстояние меньше?
3) Определить, является ли число a делителем числа b ? И наоборот. (Дать два ответа)
4) Дано число. Определить, заканчивается оно четной цифрой или нечетной? Вывести последнюю цифру.
5)Дано двузначное число. Определить, какая из его цифр больше: первая или вторая?
6)Дано трехзначное число. 
   Определить является ли четной сумма его цифр. 
   Определить, кратна ли сумма его цифр пяти. 
Определить является ли произведение его цифр больше 100. 
7)Дано трехзначное число. 
   Верно ли, что все его цифры одинаковые? 
   Есть ли среди его цифр одинаковые?
8)Определить, является ли заданное шестизначное число зеркальным? (123321, 147741)*/

//script1
/*let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));

if (a > b) {
    document.write('число a больше числа b');
} else if (a < b) {
    document.write('число а меньше числа b');
} else {
    document.write('число а равно числу b');
}*/

//script 2 
/*let firstRage = Number(prompt('Введите растояние в км'));
let secondRage = Number(prompt('Введите растояние в футах'));

let rage1 = firstRage*1000;
let rage2 = secondRage*0.305;

if (rage1 > rage2) {
    console.log('растояние в футах меньше чем в км');
} else if (rage1 < rage2) {
    console.log('растояние в футах больше чем в км');
} else {
    console.log('растояния равны');
}*/

//script 3
/*let digit1 = Number(prompt('Введите первое число'));
let digit2 = Number(prompt('Введите второе число'));

 console.log(digit1%digit2 === 0 ? 'digit2 является делитем' : 'digit2 не является делителем');
 console.log(digit2%digit1 === 0 ? 'digit1 является делитем' : 'digit1 не является делителем');*/

//script 4
/*let anyDigit = Number(prompt('Введите число'));
let lastDigit = anyDigit%10;

console.log(anyDigit%2 === 0 ? 'число заканчивается на четную' : 'число заканчивается на нечетную');
console.log('последняя цифра' + lastDigit);*/

//script 5
/*let numberAB = Number(prompt('Введите двухзначное число число'));
let digitB = numberAB % 10;
let digitA = (numberAB - digitB)/10;

if (digitA > digitB) {
    console.log('первая цифра больше');
} else if (digitA < digitB) {
    console.log('вторая цифра больше');
} else {
    console.log('числа равны');
}*/

//script 6
/*let numberABC = Number(prompt('введите трехзначное число'));
let digitC = numberABC % 10;
let digitB = numberABC % 100;
let digitA = (numberABC - digitB) / 100;

console.log((digitA+digitB+digitC)%2 === 0 ? 'сумма цифр четная' : 'сумма цифр нечетная');
console.log((digitA+digitB+digitC)%5 === 0 ? 'сумма цифр кратна 5' : 'сумма цифр на 5 не делится');*/

//script 7
/*let numberABC = Number(prompt('введите трехзначное число'));
let digitA = parseInt(numberABC / 100);
let digitB = parseInt((numberABC / 10) % 10);
let digitC = parseInt(numberABC % 10);

if (digitA === digitB && digitA === digitC) {
    console.log('все числа равны');
} else if ( digitA === digitB || digitA === digitC || digitB === digitC) {
    console.log('некоторые из этих чисел равны');
} else {
    console.log('все числа не равны');
}*/

//script 8


