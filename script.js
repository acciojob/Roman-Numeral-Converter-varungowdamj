function convertToRoman(num) {
  // Roman numeral symbols and their corresponding values
  const romanSymbols = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = '';

  // Loop through each symbol, from largest to smallest
  for (let [symbol, value] of romanSymbols) {
    // Append the symbol while the current value can be subtracted from num
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// Example usage
console.log(convertToRoman(14)); // XIV
console.log(convertToRoman(798)); // DCCXCVIII