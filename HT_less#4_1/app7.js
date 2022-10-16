//-Вывести сумму только четных чисел в диапазоне от 30 до 80

let sumEvenNumber = 0;

for (let i  = 30; i <= 80; i++) {
    (i % 2 == 0) ? (sumEvenNumber = sumEvenNumber + i) : (sumEvenNumber = sumEvenNumber)
}
console.log('Сумма четных чисел в диапазоне от 30 до 80: ' + sumEvenNumber);