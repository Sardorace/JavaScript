// const obj = {
//  key: "value",
//  key1: "value1",
//  key2: "value2",
//  key3: "value3",
//  key4: "value4",
//  key5: "value5",
//  key6: "value6",
//  innerObj: {
//     key: "value",
//     key1: "value11",
//     key2: "value22",
//     key3: "value33",
//     key4: "value44",
//     key5: "value55",
//     key6: "value66",
//     innerObj1: {
//         key: "value",
//         key1: "value111",
//         key2: "value222",
//         key3: "value33",
//         key4: "value44",
//         key5: "value55",
//         key6: "value66",
//        }
//    }
// };

// let {key6, innerObj:{key, innerObj1:{key6:olim} }} = obj

// console.log(olim);

const array = [1,2,4,3,5,6];

const sum = array.reduce((prev, value)=>{
    console.log(prev);
    return value
},1849812);
