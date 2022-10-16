//-Вывести квадраты чисел от 10 до 20//

let squareNumber = ' ';

for(let i = 10; i <= 20; i++) {
    let j = i * i;
    i == 10 ? (squareNumber = squareNumber + j) : (squareNumber = squareNumber + ' , ' + j);
}
console.log('Вывести квадраты чисел от 10 до 20: ' + squareNumber + ' .');

