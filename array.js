const arr = [10, 20, 30, 40, 50, 60, 70, 87, 90, 60, 10];

arr.forEach((elm)=>{
    console.log(elm);
})

console.log(arr.indexOf(60)); // 5
console.log(arr.lastIndexOf(60)); // 9
console.log(arr.includes(60)); // true
console.log(arr.find((elm) => elm == 50)); // 50
console.log(arr.findIndex((elm) => elm == 70)); // 6
console.log(arr.reverse());
console.log(arr.sort());
console.log(arr.splice(0, 1)); // 10
console.log(arr.join('-student ')); // 20-student 30-student 40-student 50-student 60-student 60-student 70-student 87-student 90
console.log(arr.every((age) => age > 18)) // false
console.log(arr.some((age) => age > 18)) // true

// Subtract all numbers in an array left to right
const sub = arr.reduce((total,num)=>{
    return total+=num;
})
console.log(sub); // 517

// Subtract all numbers in an array
const numbers = [2, 45, 30, 100];
const ans = numbers.reduceRight((total,num)=>total-=num) // right to left side.
console.log(ans);
 arr.map((elm) =>console.log(elm))
