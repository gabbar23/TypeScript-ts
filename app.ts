// function add(n1:number,n2:number){
//     console.log(n1+n2);

//     return n1+n2;
// }

// // const number1=5;
// const number2=4;

// let number1=5
// number1=5
// add(number1,number2);

type User = { name: string; age: number };

function add(user: User): void {
  console.log(user.name);
}
console.log(add({ name: "name", age: 23 }));

let combine: (a: number, b: string) => void;
