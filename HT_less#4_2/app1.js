//-Вывести числа от 20 до 30 через пробел, используя шаг 0,5 (20 20,5 21 21,5….)

let digit = ' ';

for(let i = 20; i < 30; i++) {
    let j = i + 0.5;
    i == 20 ? (digit = digit + i + ' ' + j) : (digit = digit + ' ' + i + ' ' + j);
}
console.log('вывести числа: ' + digit + ' 30');