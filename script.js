function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    // Add subtractive combinations
    const subtractiveCombinations = [
        ['CM', 900],
        ['CD', 400],
        ['XC', 90],
        ['XL', 40],
        ['IX', 9],
        ['IV', 4]
    ];

    let result = '';

    // First, handle the subtractive combinations
    for (const [roman, value] of subtractiveCombinations) {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }

    // Then, handle the standard values
    for (let i = 0; i <= 6; i++) {
        const [roman, value] = obj[i];
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }

    return result;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
console.log(convertToRoman(36)); // Should output "XXXVI"

// do not edit below this line
module.exports = convertToRoman;