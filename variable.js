var number = 10; // globle scope. also change in future.
number = 100;
console.log(number); // 100

const name = "vansh pratik"; // const is immutable. block scope.
name = "pratik"; // TypeError: Assignment to constant variable.

let count = 20; // we can change variable in future. block scope.
count++; // 
console.log(count); // 21
