"use strict";
// // // function add(n1:number,n2:number){
// // //     console.log(n1+n2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// // //     return n1+n2;
// // // }
// // // // const number1=5;
// // // const number2=4;
// // // let number1=5
// // // number1=5
// // // add(number1,number2);
// // // type User = { name: string; age: number };
// // // function add(user: User): void {
// // //   console.log(user.name);
// // // }
// // // console.log(add({ name: "name", age: 23 }));
// // // let combine= (a: number, b: string="1") => {console.log('gi');
// // // };
// // // let a:string[]
// // // a=[1,2,3,'g']
// // // console.log(a);
// // const a=(...numbers:number[])=>console.log(numbers);
// // a(1,2,1);
// class Main {
//   private readonly name: string;
//   protected aman: number = 44;
//   constructor(m: string) {
//     this.name = m;
//   }
//   public describe(this: Main) {
//     console.log(this.name);
//   }
// }
// const a1 = new Main("aman");
// // a1.describe();
// const onj = { describe: a1.describe };
// onj.describe.bind(a1);
// interface aman {
//   type:"aman";
//   name: string;
// }
// class lg  {
//   name="hi";
//   greet(a:string){
//     return "hi"
//   }
// }
// console.log("hi");
// const aman2:aman={type:"aman",name:"hi"}
// const htmlinput:HTMLInputElement=document.querySelector('fdfas')!;
// const htmlinput2=<HTMLInputElement>document.querySelector('fdfas')!;
// const htmlinput3=document.querySelector('fdfas')! as HTMLInputElement;
// interface lengthy{
//   length:number
// }
// function countAndDescribe<T extends lengthy>(elemnt:T):[T,string]{
//   let des="got not Elements";
//   if(elemnt.length==1){
//     des="1 Element"
//   }
//   else if(elemnt.length>1){
//     des=`${elemnt.length}`;
//   }
//   return [elemnt,des]
// }
// console.log(countAndDescribe(['sport']));
// function extract <T extends object,U extends keyof T> (obj:T,s:U){
//   return obj[s];
// }
// console.log(extract({aman:"lol"},"aman"));
// // console.log(extract({damanm:"lol"},"aman"));
function Logger(cons) {
    console.log(cons);
}
function WithTemplate(template, hookid) {
    return function (constructor) {
        const hookEl = document.getElementById(hookid);
        const cons = new constructor();
        // const cons = new constructor("aman");
        console.log(hookEl);
        if (hookEl) {
            hookEl.innerHTML = template;
            console.log(hookEl.querySelector("h1"));
            hookEl.querySelector("h1").textContent = cons.name;
        }
    };
}
let Mains = class Mains {
    constructor(name) {
        this.name = name;
        console.log("hello");
    }
};
Mains = __decorate([
    WithTemplate("<h1>HEllo</h1>", "app")
], Mains);
const a12 = new Mains("aman");
