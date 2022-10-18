//-Один доллар стоит 27 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов

let dollar = 27;

for ( i = 10; i <= 100; i++ ) {
    if(i % 10 == 0){
    let exchange = i * dollar;
    console.log(exchange);
    }
}
