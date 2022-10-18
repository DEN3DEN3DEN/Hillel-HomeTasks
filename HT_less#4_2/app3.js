//-Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа N

let number = 678;

for( let i = 1, j = 1; i <= 100, j <= number ; i++, j++) {
    let j = i * i;
    if(j<=number && i<=100) {
        console.log(i);
    }
    else {
        break;
    }

}