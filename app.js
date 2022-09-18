"use strict";
// // function add(n1:number,n2:number){
// //     console.log(n1+n2);
// //     return n1+n2;
// // }
// // // const number1=5;
// // const number2=4;
// // let number1=5
// // number1=5
// // add(number1,number2);
// // type User = { name: string; age: number };
// // function add(user: User): void {
// //   console.log(user.name);
// // }
// // console.log(add({ name: "name", age: 23 }));
// // let combine= (a: number, b: string="1") => {console.log('gi');
// // };
// // let a:string[]
// // a=[1,2,3,'g']
// // console.log(a);
// const a=(...numbers:number[])=>console.log(numbers);
// a(1,2,1);
class Main {
    constructor(m) {
        this.aman = 44;
        this.name = m;
    }
    describe() {
        console.log(this.name);
    }
}
const a1 = new Main("aman");
// a1.describe();
const onj = { describe: a1.describe };
onj.describe.bind(a1);
class lg {
    constructor() {
        this.name = "hi";
    }
    greet(a) {
        return "hi";
    }
}
console.log("hi");
const aman2 = { type: "aman", name: "hi" };
const htmlinput = document.querySelector('fdfas');
const htmlinput2 = document.querySelector('fdfas');
