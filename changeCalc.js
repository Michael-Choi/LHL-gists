let calculateChange = function(total, cash) {
  // Your code here
  let inv = {};
  let currency = [
    "Twenty",
    "Ten",
    "Five",
    "Two",
    "One",
    "Quarter",
    "Dime",
    "Nickel",
    "Penny"
  ];
  let currencyVal = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];

  let amtOwing = cash - total;

  for (let i = 0; i < currency.length; i++) {
    while (amtOwing >= currencyVal[i]) {
      if (inv[`${currency[i]}`] == null) {
        inv[`${currency[i]}`] = 0;
      }
      inv[`${currency[i]}`] += 1;
      amtOwing -= currencyVal[i];
    }
  }
  return inv;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
