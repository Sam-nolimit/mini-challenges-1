/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let transposeArray = [];
    for (let i = 0; i < array[0].length; i++) {
        let row = [];
        for (let j = 0; j < array.length; j++) {
            let element = array[j]; // this store the first array
            row.push(element[i]); // stores the value and pushes the assay to the row
        }
        transposeArray.push(row)
    }
    return transposeArray;
}

module.exports = transpose;
