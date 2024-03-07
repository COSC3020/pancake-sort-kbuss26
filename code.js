/*
    Keifer Buss 
    COSC-3020-01 
    Last modified Feb. 22 2024
    Sources: 
    - https://www.freecodecamp.org/news/how-to-insert-an-element-into-an-array-in-javascript/
*/

// Flip function - recursively defined
function flip(array, n) {
    // Base, array is either less than size 1 or undefined (cannot be flipped)
    if (n <= 1 || n === undefined) {
        return array;
    }
    // Insurance to avoid extending beyond array bounds
    if (n > array.length) {
        n = array.length;
    }
    // Heart of function - first flips each element to first position followed by recursive call
    var newArray = [].concat(array[n - 1], flip(array.slice(0, n - 1), n - 1));
    // Then concatenates the rest of array onto the new array
    if (n < array.length) {
        newArray = newArray.concat(array.slice(n, array.length));
    } 
    return newArray;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    var maxValPos;
    for (var i = array.length - 1; i >= 0; i--) {
        maxValPos = 0;

        // Finding max value position to flip (n in n)
        for (var j = 0; j <= i; j++) {
            if (array[maxValPos] < array[j]) {
                // console.log("New max val: " + array[j] + " at position " + j);
                maxValPos = j;
            }
        }

        // Array manipulations
        array = flip(array, maxValPos + 1);
        array = flip(array, i + 1);
    }
    return array;
}
