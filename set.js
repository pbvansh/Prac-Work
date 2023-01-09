const mySet = new Set(); // use for store unique values of any type.

mySet.add(10)
mySet.add(20)
mySet.add(10)
mySet.add(30)

console.log(mySet); //{ 10, 20, 30 }
console.log(typeof mySet); // Object
console.log(mySet.has(30)); // true
console.log(mySet.has(40)); // false
console.log(mySet.delete(50)); // false
console.log(mySet.delete(10)); // true
console.log(mySet);
console.log(mySet.size); // 2
console.log([...mySet]); // [ 20, 30 ] - convert to array;

const arry = ['pratik','akil','jayesh','pratik'];
console.log(new Set(arry)); // { 'pratik', 'akil', 'jayesh' } - Array to set