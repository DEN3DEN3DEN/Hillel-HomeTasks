//- дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень. (Например, числа 9, 81 можно получить, а 13 - нельзя)




function raiseANumberToAPower(digit) {
    while (digit % 3 == 0) {
      digit = digit/3;
    }
    return digit == 1;
  }
  
  console.log(raiseANumberToAPower(9));
  console.log(raiseANumberToAPower(98));