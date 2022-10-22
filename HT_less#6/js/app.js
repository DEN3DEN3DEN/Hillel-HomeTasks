let products = [
  {
    name: 'AKM',
    price: 700,
  },
  {
    name: 'AR-15',
    price: 1500,
  },
  {
    name: 'Savage 110',
    price: 500,
  },
  {
    name: 'Mossberg 500',
    price: 1000
  },
  {
    name: 'Glock 17',
    price: 600,
  },
];

products.push({ name: 'iPhone', price: 1000 });

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
    let productNumber;
    do {
    productNumber = prompt('Enter the product you wanna buy:');
    productNumber--;
    } while(productNumber <= 0 || productNumber > products.length - 1 || isNaN(productNumber));
    const selectedProduct = products[productNumber];
    return selectedProduct;
}

function getAmount() {
    let amount;
    do {
    amount = parseInt(prompt('Enter the amount of products you wanna buy:'));
    } while(amount <= 0 || isNaN(amount)); 
    return amount;
}

function calculatePrice() {
    const finalPrice = getProductNumber().price * getAmount();
    console.log('The price is $' + finalPrice);
    return finalPrice;
}

function calculateDiscount() {
    if (calculatePrice() * EXCHANGE > DISCOUNT_STARTS_FROM) {
    const superFinalPrice = calculatePrice() - (calculatePrice() * DISCOUNT);
    console.log(`Congrats! You got discount ${DISCOUNT_STR}%:`);
    console.log('Please pay $' + superFinalPrice);
    }
}

function shop() {
    showProducts();
    getProductNumber();
    getAmount();
    let price = calculatePrice();
    if (price) {
      calculateDiscount();
    }  
}
shop();

