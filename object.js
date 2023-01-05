
//assign - create object from multiple objects.
let sem1 = {
    math : 70
}

let sem2 = {
    Java : 80,
    Python : 60,
}

const total = Object.assign({},sem1,sem2)
console.log(total); // { math: 70, Java: 80, Python: 60 }

//DefineProperties
const obj1 = {}
Object.defineProperties(obj1,{
    name : {
        value : 'pratik',
    }
})
console.log(obj1.name); // pratik

//DefineProperties
Object.defineProperties(obj1,{
    age : {
        value : 20
    },
    address : {
        value: 'socialpilot'
    }
})

console.log(obj1.age); // 20

const obj2 = {
    s1: 80,
    s2: 70,
    s3: 30
}

//entries - convet object to key value paire
const arr = Object.entries(obj2);
console.log(arr); // [ [ 's1', 80 ], [ 's2', 70 ], [ 's3', 30 ] ]

//freeze - freeze the object
Object.freeze(obj2);
obj2.s2 = 30;
console.log(obj2); // { s1: 80, s2: 70, s3: 30 }

//fromEntries - convert map to object
const product = new Map([
    ['name', 'mango'],
    ['price', '150']
])
console.log(Object.fromEntries(product)); //{ name: 'mango', price: '150' }

//getOwnPropertyDescriptor
let d = Object.getOwnPropertyDescriptor(obj2, 's1')
console.log(d); //{ value: 80, writable: false, enumerable: true, configurable: false }

//getOwnPropertyDescriptors
d = Object.getOwnPropertyDescriptors(obj2)
console.log(d);  // {
//     s1: { value: 80, writable: false, enumerable: true, configurable: false },
//     s2: { value: 70, writable: false, enumerable: true, configurable: false },
//     s3: { value: 30, writable: false, enumerable: true, configurable: false }
//   }

// getOwnPropertyNames - get object property name
console.log(Object.getOwnPropertyNames(obj2)); // [ 's1', 's2', 's3' ]

//getOwnPropertySymbols
const symObj = {};
const first = Symbol('firstName');
const last = Symbol('lastName');
symObj[first] = 'pratik';
symObj[last] = 'vansh';
console.log(Object.getOwnPropertySymbols(symObj)); // [ Symbol(firstName), Symbol(lastName) ]

//getPrototypeOf
console.log(Object.getPrototypeOf(obj2)); //[Object: null prototype] {}


//Object.is is same as '==='
console.log(Object.is(10, 10)); //true
console.log(Object.is(obj2, obj2)); //true
console.log(Object.is(obj2, symObj)); //flase

//isExtensible - check if is extensible or not
const isEx = {}
console.log(Object.isExtensible(isEx)); // true

//isFrozen  - retun true is object is frozed
console.log(Object.isFrozen(obj2)); //true

//seal - seal object .after seal we can not add new property. only we can change value.
console.log(Object.seal(obj2));

//isSealed - retun true if object is sealed
console.log(Object.isSealed(obj2)); //true

//Keys - retun all keys in object
console.log(Object.keys(obj2)); //[ 's1', 's2', 's3' ]

//preventExtensions
Object.preventExtensions(isEx); // This method makes the target immutable
console.log(Object.isExtensible(isEx)); // false

// setPrototypeOf - set prototype
const setPObj = {}
console.log(Object.setPrototypeOf(setPObj,null)); // null prototype
