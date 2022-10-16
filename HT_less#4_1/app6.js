//-Найти среднее арифметическое всех целых чисел от 1 до 500

let average = 0;

for( i = 1; i <=500; i++) {
    average = average + i;
}

average = average/500;

console.log('Среднеарифметическое чисел от 1 до 500: ' + average);