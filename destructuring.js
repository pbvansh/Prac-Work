const data = {
    Fname: 'Pratik',
    Lnmae: 'Vansh',
    email: 'pratik@gmail.com',
    password: 'pratik@123',
    age: 20
}

const [a, b, c] =[10, 20, 30];
console.log(a, b, c); // 10 20 30 

const { Fname, Lnmae, email, password, age } = data;

console.log(Fname, Lnmae, email, password, age); // Pratik Vansh pratik@gmail.com pratik@123 20