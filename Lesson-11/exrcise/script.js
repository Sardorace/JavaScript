// // find sum of numbers in array
// let numbers = [1,23,3,44,65,652,32,313,4,3];
// let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(sum);



// //find how many times each character used in array of string

// let array = ['webbrain', 'academy'];
// let charCount = {};
// array.forEach(array => {
//     array.split('').forEach(char => {
//         if (charCount.hasOwnProperty(char)) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     });
// });
// console.log(charCount);

// Description of solution:
// In the code above, we first define an array of words.
// Then, we create an empty object called charCount to store the character counts.
// We loop over each word in the array using the forEach() method 
// and split each word into an array of characters using the split() method.
// We then loop over each character in the array and check if it exists as a property
// in charCount using the hasOwnProperty() method.If it does, we increment its count by 1.
// Otherwise, we add it as a new property with a count of 1. Finally, we log the charCount object to the console.



// //to camel case

// let str = "-webbrain-academy"; 
// str = str.replace(/-([a-z])/g, function (g) {return g[1].toUpperCase(); })
// str = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(str);



// //cars

// let automobile = [
//     { id:1, year: 1998, engine: 1, name: "Tico" },
//     { id:2, year: 2005, engine: 1.2, name: "Matiz" },
//     { id:3, year: 2010, engine: 1.6, name: "Gentra" },
//     { id:4, year: 2010, engine: 1.5, name: "Cobalt" },
//     { id:5, year: 2012, engine: 2, name: "Malibu" },
//     { id:6, year: 2000, engine: 1.2, name: "Damas" },
//     { id:7, year: 2018, engine: 2.4, name: "Tico" },
// ];