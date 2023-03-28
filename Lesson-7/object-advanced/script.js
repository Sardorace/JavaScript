// object distructure

let car = { brand: "Audi", year: 2023, performance: { speed: 320, engine: "V12", } }

// console.log(Object.keys(car)); // distruct all object keys

// console.log(car.performance.engine);  //distructure in console by dot "."

// let {brand: newBrand, year, performance} = car 
// console.log(performance);
// this is distructure case value in left,
//and there all values are variables and we cant anymore make variables with same name
// let brand = "Audi" // Error case
//but we can update that info which will distructed with newName and newBrand = brand but brand in global = BMW

// let brand = "BMW"
// console.log(brand);
// console.log(newBrand);

//if we got object in object

// let { performance: { speed } } = car; // if key: newKey this is updating of name, if key: {} this is distructure.

// console.log(speed); // output 320

// function getData({performance: {speed}}){
//     console.log(speed);
// }

// getData(car)