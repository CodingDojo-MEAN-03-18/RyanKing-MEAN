var _ = {
    map: function(array, callback) {
        const results = [];

        for (let i = 0; i < array.length; i++) {
            results.push(callback(array[i], i));
        }
        return results;
    },
    reduce: function(array, callback, memo) {
        const results = [].concat(array);

        if (memo === undefined) {
            memo = results.shift();
        }

        for (let i = 0; i < results.length; i++) {
            memo = callback(memo, results[i], i);
        }
        return memo;
    },
    find: function(array, callback) {
        let result;

        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                result = array[i];
                break;
            }
        }
        return result;
    },
    filter: function(array, callback) {
        const results = [];

        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                results.push(array[i]);
            }
        }
        return results;
    },
    reject: function(array, callback) {
        const results = [];

        for (let i = 0; i < array.length; i++) {
            if (!(callback(array[i]))) {
                results.push(array[i]);
            }
        }
        return results;
    }
}

nums = [1, 2, 3, 4, 5, 6];
strings = ['one', 'two', 'three'];
oddNums = [1, 3, 5, 7];
evenNums = [2, 4, 6, 8];

function add(num1, num2) {
    return num1 + num2;
}

function isEven(num) {
    return num % 2 === 0;
}

console.log(_.map(nums, function(element) { return element * 2; }));  // should multiply each number by 2

console.log(_.reduce(nums, add));  // should reduce to 21
console.log(_.reduce(strings, add));  // should reduce to 'onetwothree'

console.log(_.find(nums, isEven)); // should find 2 as the first even element
console.log(_.find(oddNums, isEven)); // should return undefined

console.log(_.filter(nums, isEven)); // should return [2, 4, 6]
console.log(_.filter(oddNums, isEven)); // should return an empty array

console.log(_.reject(nums, isEven)); // should return [1, 3, 5]
console.log(_.reject(evenNums, isEven)); // should return an empty array
