
const arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const arr2 = [100, 200, 300, ...arr1];

console.log(arr2); //[100, 200, 300, 10, 20, 30,  40,  50, 60, 70, 80,  90, 100]

let student = {
    name: 'pratik',
    mobile: 7096227996
}

const address = {
    city: 'kodinar',
    'pincode': 362720
}

student = { ...student, ...address }
console.log(student); // {
                      //  name: 'pratik',
                      //  mobile: 7096227996 ,
                      //  city: 'kodinar',
                      //  pincode: 362720
                      // }

