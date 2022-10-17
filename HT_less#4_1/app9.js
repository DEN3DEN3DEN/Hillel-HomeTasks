/*Дано натуральное число. Найти и вывести на страницу все его делители.
    a) Определить количество его четных делителей
    b) Найти сумму его четных делителей*/ 


let naturalNum = +prompt('Введите любое натуральное число', '...');
document.write(`Вы ввели число: ${naturalNum} <br /> <hr/>`);
let count = 0,
  summ = 0;
for (let i = 2; i * 2 <= naturalNum; i++) {
  if (naturalNum % i == 0) {
    document.write(`Делитель этого числа: ${i} <br /><br />`);

    if (i % 2 === 0) {
      count++;
      summ += i;
    }
  }
}

document.write(`<hr/> Количество четных делителей: ${count} <br /><br />`);
document.write(`Сумма четных делителей: ${summ} <br /><br />`);

