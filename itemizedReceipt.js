// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const logReceipt = (receipt1, receipt2, receipt3) => {
  const arrayOfObject = [receipt1, receipt2, receipt3]
  arrayOfObject.forEach((receipt)=>{
    console.log(`${receipt.descr} - $${receipt.price}`)
  })
  console.log(`Total - $${receipt1.price + receipt2.price + receipt3.price}`)
}

// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
