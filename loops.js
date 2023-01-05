// For loop

for ( let i = 1 ; i<=100 ; i++){
    console.log(i);
}

//while loop

let i =1;
while (i<=100) {
    console.log(i);
    i++;
}


//forEach loop
const arr = [10,20,30,40,50,60,70,80,90,100]

arr.forEach((elm)=>{
    console.log(elm);
})

// ForIn loop

const product = {
    name : "mango",
    price : 100,
    desc : "mango is king of fruits",
    stock : 500
}

for (const key in product) {
   console.log(key); // print the all key of prodct
}
