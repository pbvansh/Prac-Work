const sum = (a,b)=>{
    console.log(a+b);
}

sum(5,5) // 10
sum(5) // NaN

const defaulArgSum = (a,b=0)=>{
    console.log(a+b)
}

defaulArgSum(5,5) // 10
defaulArgSum(5) // 5
defaulArgSum(5,undefined) // 5