/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let romanToNum = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900
    };
    let romans = roman.toUpperCase();
    let num = 0;
    let i = 0;
    //let roman = "MCMXLIV";
    let keysInArray = [];

    for (let key in romanToNum) {
        keysInArray.push(key);
        // keysInArray
    }
    while (i < romans.length) {
        if (i + 1 < romans.length && keysInArray.includes(romans.slice(i, i + 2))) {
            num += romanToNum[romans.slice(i, i + 2)]
            i += 2
        }
        else {
            num += romanToNum[romans.slice(i, i + 1)]
            i += 1
        }
    }
    return num;
}
romanToDecimal("MCMXLIV")



module.exports = romanToDecimal;
