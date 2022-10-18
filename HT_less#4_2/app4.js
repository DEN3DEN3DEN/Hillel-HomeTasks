//-Дано целое число. Выяснить, является ли оно простым (простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя).

function integer(digit) {
    let _true = 'Простое число!';
    let _false = 'Fatal error!!!';
    if (digit <= 1 && digit > 1000) {
        return _false};
    if (digit == 2) {
        return _true};
    for (let i = 2; i <= digit / 2; i++) {
        if (digit % i == 0) {
        return _false;
        }
    }   
    return _true;
}
console.log(integer(1008));
console.log(integer(3));
