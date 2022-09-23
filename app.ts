// // // function add(n1:number,n2:number){
// // //     console.log(n1+n2);

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
// const htmlinput3=document.qu rySelector('fdfas')! as HTMLInputElement;

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

// function Logger(cons: Function) {
//   console.log(cons);
// }
// function WithTemplate(template: string, hookid: string) {
//   return function (constructor: any) {
//     const hookEl = document.getElementById(hookid);
//     const cons = new constructor();
//     // const cons = new constructor("aman");
//     console.log(hookEl);

//     if (hookEl) {
//       hookEl.innerHTML = template;
//       console.log(hookEl.querySelector("h1"));

//       hookEl.querySelector("h1")!.textContent = cons.name;
//     }
//   };
// }

// @WithTemplate("<h1>HEllo</h1>", "app")
// class Mains {
//   private name: string;
//   constructor(name:string) {
//     this.name = name;
//     console.log("hello");
//   }
// }

// const a12 = new Mains("aman");

class Main{
   private readonly s="11";

set setname(name:String){
}
}