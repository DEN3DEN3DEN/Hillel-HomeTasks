//таблица умножения от 1 до 10

let multipleTable = 0;

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        multipleTable = i * j;
        if (multipleTable / 10 <= 1) {
            multipleTable = i * j;
        }
        if (j <= i) {
            console.log(j + " * " + i + " = " + multipleTable);
        }
    }
    console.log('  ');
}