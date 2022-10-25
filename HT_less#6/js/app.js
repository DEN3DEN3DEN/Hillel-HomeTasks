const EXCHANGE = 41;
const DISCOUNT_STARTS_FROM = 100000;
const DISCOUNT_STR = 10;
const DISCOUNT = DISCOUNT_STR / 100;

function showProducts() {
  for (let i = 0; i < products.length; i++) {
    console.log(`#${(i+1)} Name: ${products[i].name} \nPrice: ${products[i].price}`);
  }
}

function getProductNumber() {
    let value;
    do {
    value = prompt('Enter the product you wanna buy:');
    value--;
    } while(value < 0 || value > products.length - 1 || isNaN(value));
    return value;
}

function getAmount() {
    let value2;
    do {
    value2 = parseInt(prompt('Enter the amount of products you wanna buy:'));
    } while(value2 <= 0 || isNaN(value2));
    return value2;
}

function calculatestartprice(price, amount) {
    return price * amount;
}

function calculateDiscount(startPrice) {
    if (startPrice * EXCHANGE > DISCOUNT_STARTS_FROM) {
    return startPrice - startPrice * DISCOUNT;
    }
    return null;
}

function showPrice(startPrice, priceWithDiscount) {
    console.log('The price is $' + startPrice);
    if (priceWithDiscount) {
        console.log(`Congrats! You got discount ${DISCOUNT_STR}%:`);
        console.log('Please pay $' + priceWithDiscount);
    }
}

(function() {
    showProducts();
    const productNumber = getProductNumber();
    const selectedProduct = products[productNumber];
    const amount = getAmount();
    const startPrice = calculatestartprice(selectedProduct.price, amount);
    const priceWithDiscount = calculateDiscount(startPrice);
    showPrice(startPrice, priceWithDiscount);
})();



