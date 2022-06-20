/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let arrays = [];
    let symbols = {  //Object properties ;key value pairs
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of strng) {
        if (!symbols[char]) {
            arrays.push(char)
            console.log(arrays)
        }
        else if (arrays.pop() !== symbols[char]) {
            return 'invalid';
        }
    }
    if (arrays.length === 0) {
        return 'valid'
    }
    else {
        return 'invalid'
    }

}

module.exports = isValid;
