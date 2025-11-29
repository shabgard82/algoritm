const TAX_RATE = 0.09;
const PHONE_PRICE = 300;
const ACCESSORY_PRICE = 30;
const SPENDING_THRESHOLD = 800;

let bankBalance = 2000;

let totalAmount = 0;

function calculateTax(amount) {
  return amount * TAX_RATE;
}

function formatPrice(amount) {
  return "$" + amount.toFixed(2);
}

while (totalAmount + PHONE_PRICE <= bankBalance) {
  totalAmount += PHONE_PRICE;

  while (
    totalAmount + ACCESSORY_PRICE <= SPENDING_THRESHOLD &&
    totalAmount + ACCESSORY_PRICE <= bankBalance
  ) {
    totalAmount += ACCESSORY_PRICE;
  }
}

const totalWithTax = totalAmount + calculateTax(totalAmount);

console.log("Purchase amount:", formatPrice(totalWithTax));

if (totalWithTax > bankBalance) {
  console.log("You can't afford this purchase. :(");
} else {
  console.log("You can afford this purchase. :)");
}
