//-Вывести все числа в диапазоне от 100 до 200 кратные 3

let sumEvenNumber = 0;

for (let i  = 100; i <= 200; i++) {
    (i % 3 == 0) ? (sumEvenNumber = sumEvenNumber + i) : (sumEvenNumber = sumEvenNumber)
}
console.log('Сумма чисел кратных 3 в диапазоне от 100 до 200: ' + sumEvenNumber);