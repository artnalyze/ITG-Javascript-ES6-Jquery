// Chapter 1 : Into Programming
// Code
// Statements
// a = b * 2;

// Input
// age = prompt("Please tell me your age: ");
// console.log(age);

// function
// function printAmount() {
//   console.log(amount.toFixed(2));
// }

// var amount = 99.99;

// printAmount(); // "99.99"

// amount = amount * 2;

// printAmount(); // "199.98"

//-------------------------------------------------
const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount) {
  return amount * TAX_RATE;
}

function formatAmount(amount) {
  return "$" + amount.toFixed(2);
}

// keep buying phones while you still have money
while (amount < bank_balance) {
  // buy a new phone!
  amount = amount + PHONE_PRICE;

  // can we afford the accessory?
  if (amount < SPENDING_THRESHOLD) {
    amount = amount + ACCESSORY_PRICE;
  }
}

// don't forget to pay the government, too
amount = amount + calculateTax(amount);

console.log("Your purchase: " + formatAmount(amount));
// Your purchase: $334.76

// can you actually afford this purchase?
if (amount > bank_balance) {
  console.log("You can't afford this purchase. :(");
}
// You can't afford this purchase. :(
