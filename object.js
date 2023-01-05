

// let sem1 = {
//     math : 70
// }

// let sem2 = {
//     Java : 80,
//     Python : 60,
// }

// const total = Object.assign({},sem1,sem2)
// console.log(total); // { math: 70, Java: 80, Python: 60 }

// //DefineProperties
// const obj1 = {}
// Object.defineProperties(obj1,{
//     name : {
//         value : 'pratik',
//     }
// })
// console.log(obj1.name); // pratik

// //DefineProperties
// Object.defineProperties(obj1,{
//     age : {
//         value : 20
//     },
//     address : {
//         value: 'socialpilot'
//     }
// })

// console.log(obj1.age); // 20

const obj2 = {
    s1 : 80,
    s2 : 70,
    s3 : 30 
}

const arr = Object.entries(obj2);
console.log(arr); // [ [ 's1', 80 ], [ 's2', 70 ], [ 's3', 30 ] ]

Object.freeze(obj2);
obj2.s2 = 30;
console.log(obj2);