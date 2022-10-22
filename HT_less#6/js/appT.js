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
  // Show products
  for (let i = 0; i < products.length; i++) {
    console.log(`#${(i+1)} Name: ${products[i].name} \nPrice: ${products[i].price}`);
  }
}

// Get product number
let productNumber;
do {
  productNumber = prompt('Enter the product you wanna buy:');
  productNumber--;
} while(productNumber < 0 || productNumber > products.length - 1 || isNaN(productNumber));

const selectedProduct = products[productNumber];

// Get amount of products to be bought
let amount;
do {
  amount = parseInt(prompt('Enter the amount of products you wanna buy:'));
} while(amount <= 0 || isNaN(amount));

// Calculate the initial price
const finalPrice = selectedProduct.price * amount;

console.log('The price is $' + finalPrice);

// Check if discount needed
if (finalPrice * EXCHANGE > DISCOUNT_STARTS_FROM) {
  const superFinalPrice = finalPrice - finalPrice * DISCOUNT;
  
  console.log(`Congrats! You got discount ${DISCOUNT_STR}%:`);
  console.log('Please pay $' + superFinalPrice);
}

showProducts();