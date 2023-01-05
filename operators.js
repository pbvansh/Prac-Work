// //1. Arithmetic operators

let num1 = 10;
let num2 = 20;

console.log(num1+num2); //30
console.log(num1-num2); //-10
console.log(num1*num2); //200
console.log(num2/num1); //2
console.log(num2%num1); //0

//2. Comparison Operators

console.log(num1==num2); // false
console.log(num1!=num2); // true
console.log(num1=='10'); // true
console.log(num1===num2); // false
console.log(num1==='10'); // false
console.log(num1!==num2); // true

//3. Relation Operators

console.log(10 > 20); //  false
console.log(10 < 20); // true
console.log(10 <= 20);//true
console.log(10 < 20); //true
console.log(10 == 20);//false
console.log(10 != 20); //true

//4 .Assiment Operators 

let temp;

console.log(temp = 10) // 10
console.log(temp += 20) // 30 
console.log(temp -= 10)// 20
console.log(temp /= 2) // 10
console.log(temp *= 10) //100

//5 . Ternary Operator

let ans = true;

ans ? console.log('your answer is true') : console.log('your answer is false');