
// With help of rest parameters we can allows a function to accept an indefinite number of argumentsallows a function to accept an indefinite number of arguments
const sum = (...numbers)=>{
    console.log(numbers);
        const sum = numbers.reduce((total,num)=>{
           return total+=num;
        })
        console.log(sum);
}


sum(10,20,30,40,50) // 150