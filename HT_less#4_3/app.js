/*Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

Найти сумму и количество положительных элементов.
Найти минимальный элемент массива и его порядковый номер.
Найти максимальный элемент массива и его порядковый номер.
Определить количество отрицательных элементов.
Найти количество нечетных положительных элементов.
Найти количество четных положительных элементов.
Найти сумму четных положительных элементов.
Найти сумму нечетных положительных элементов.
Найти произведение положительных элементов.
Найти наибольший среди элементов массива, остальные обнулить.*/


let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let positiveCount = 0,
    positiveSum = 0,
    negativeCount = 0,
    negativeSum = 0,
    min = Number.MAX_VALUE,
    max = Number.MIN_VALUE,
    minIndex = -1,
    maxIndex = 1,
    evenPosistiveCount = 0, 
    evenPosistiveSum = 0,
    oddPosistiveCount = 0, 
    oddPosistiveSum = 0, 
    positiveMult = 1,
    negativeMult = 1
;

for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (val > 0) {
        positiveCount++;
        positiveSum += val;
        positiveMult *= val;
        if (val % 2 == 0) {
            evenPosistiveCount++;
            evenPosistiveSum += val;
        }
        else {
            oddPosistiveCount++;
            oddPosistiveSum += val;
        }
    }
    if (val < 0) {
        negativeCount++;
        negativeSum += val;
        negativeMult *= val;
    }
    if (val > max) {
        max = val;
        maxIndex = i;
    }
    if (val < min) {
        min = val;
        minIndex = i;
    }
}

console.log(`
    Количество положительных элементов - ${positiveCount};
    Количество отрицательных элементов - ${negativeCount};
    Сумма положительных элементов - ${positiveSum};
    Сумма отрицательных элементов - ${negativeSum};
    Минимальныйе элемент - ${min};
    Индекс минимального элемента - ${minIndex};
    Максимальный элемент - ${max};
    Индекс максимального элемента - ${maxIndex};
    Количество положительных четных элементов - ${evenPosistiveCount};
    Сумма положительных четных элементов - ${evenPosistiveSum};
    Количество положительных нечетных элементов - ${oddPosistiveCount};
    Сумма положительных нечетных элементов - ${oddPosistiveSum};
    Произведение положительных элементов - ${positiveMult};
    Произведение отрицательных элементов - ${negativeMult};
`);

for (let i = 0; i < arr.length; i++) {
  const val = arr[i];
  if (val > max) {
    max = val;
  }
  if (val !== max) {
    val = 0;
  }
}

console.log(arr);
