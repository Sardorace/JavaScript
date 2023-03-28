let array = [123, "abc", function test() { }, null, undefined, true, false,]

// console.log(array);
// console.log(array[2]);  // access by [index] -> [Function: test]
// console.log(array[array.length -1]); // output array length = 7, but by index we have from 0 to 6.
// To get last item you need to array length - 1 = last index.
// console.log(array.at(-2)); // .at(-2) can gets minus value. output true
// console.log(array);