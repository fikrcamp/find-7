function findSeven(arr) {
    for (let num of arr) {
        if (num === 7 || num.toString().includes('7')) {
            return "Found!";
        }
    }
    return "there is no 7 in the array";
}

// Test cases
const arrays = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 6, 33, 100],
    [2, 55, 60, 97, 86],
    [17, 27, 37],
    [77, 87, 97],
    [123, 456, 789],
    [70, 71, 72],
    [17, 71, 77],
    [700, 701, 702],
    [0, 1, 2, 3, 4, 5, 6]
];

for (let i = 0; i < arrays.length; i++) {
    console.log(`Array ${i + 1}: ${findSeven(arrays[i])}`);
}
// Good Luck 💪🏾
