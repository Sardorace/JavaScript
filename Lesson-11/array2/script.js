//array distructure

let brandCars = ["Audi", "Bentley", "BMW", "Cadillac", "Acura"];

// let [zero] = brandCars; // arrays will distructured by id

// console.log(zero); // brandCars[0] == "Audi"


// let [zero, one, ...other] = brandCars; // ...other will output all data but not distructred, other can be named any

// console.log(other); // ['BMW', 'Cadillac', 'Acura' ]

function getData([uno]){
    console.log(uno);
}

getData(brandCars) // output Audi bc first id = 0 = Audi





//array.reduce(()=>{},0) ===============================================================================

// const items = [
//     {name: "Rice", price: 5},
//     {name: "Book", price: 20},
//     {name: "Chicken", price: 10},
//     {name: "Monitor", price: 100},
// ]

// let totalPrice = 0
// items.forEach(item => {
//     totalPrice += item.price
// })

// const totalPrice = items.reduce((total, item) => {
//     console.log(`Total: ${total}`);
//     console.log(`Item: ${item.price}`);
//     return total + item.price
// }, 0) // 0 is default parametr

// console.log(totalPrice);


//group people by age
// const people = [
//     { name: "Kyle", age: 19 },
//     { name: "John", age: 22 },
//     { name: "Sally", age: 42 },
//     { name: "Jill", age: 42 },
// ]

// const result = people.reduce((groupedPeople, person) => {
//     const age = person.age
//     if (groupedPeople[age] == null) groupedPeople[age] = []
//     groupedPeople[age].push(person)
//     return groupedPeople
// }, {}) //{} default parametr

// console.log(result);
// {emtyObject} because we want to make object data like ->
// {
//    42: ['Sally', 'Jill' ] // because these two both 42
//    19: ['Kyle'] // she is 19 in this group
// }


//sum numbers
// const numbers = [10, 5, 15]

// const sum  = numbers.reduce((total, number, index, array) => {
// console.log(`Total: ${total}`);
// console.log(`Number: ${number}`);
// console.log(index);
// console.log(array);
// return total + number
// },0) // 0 is default parametr

// console.log(sum);


// const luxuryCars = [
//     { id: 1, year: 2022, type: "Sedan", name: "Maybach" },
//     { id: 2, year: 2023, type: "Coupe", name: "Porsche" },
//     { id: 3, year: 2019, type: "Five door", name: "Maserati" },
//     { id: 4, year: 2021, type: "SUV", name: "Bentley" },
//     { id: 5, year: 2019, type: "SUV", name: "Cadillac" },
//     { id: 6, year: 2011, type: "Sedan", name: "Rolls-Royce" },
//     { id: 7, year: 2009, type: "Coupe", name: "Lexus" },
// ]



// const result = luxuryCars.reduce((previousValue, currentValue) => {
//     // console.log(previousValue, currentValue);
//     return 1;
// }, luxuryCars)

// console.log(result);


//===============================================================================================================

