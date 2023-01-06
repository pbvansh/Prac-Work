
// Arrow Function

const add = (a,b)=>{
    return a+b;
}
console.log(10+30); // 40

const sub =(a,b)=>a-b;
console.log(sub(20,10)); // 10

const student = {
  no: 34,
  mobile : 7096227996,
  setMobile: (n) => console.log(this.mobile, this),
  getMobile() {
    console.log(this.mobile, this);
  },
};

student.setMobile(); //  undefined {}
student.getMobile(); // 7096227996 {....ObjectData}