"use strict";
// function add(n1:number,n2:number){
//     console.log(n1+n2);
function add(user) {
    console.log(user.name);
}
console.log(add({ name: "name", age: 23 }));
let combine = (a, b = "1") => {
    console.log('gi');
};
