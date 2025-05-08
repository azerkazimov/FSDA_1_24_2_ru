// Comment types

// make comment by both slash
/*  Another way 
var a = 5;
a = 7;

var a = 8;
*/

// Var
var a = 5;
a = 7;

var a = 8;
console.log("var:", a);

// Let
// console.log("b:", b); // Reference error cannot access "b" before inicialization
let b = "hello";
b = 55;

// let b = "hi" // Uncaught SyntaxError: Identifier 'b' has already been declared
console.log("b:", b);

// Const
const c = 33;

// c=44; // Error

console.log("c", c);
// на будующее
// области видимости
function testLet() {
  if (true) {
    var x = 10; // no problem, will show in console
    // let x = 10; // return error: Uncaught ReferenceError: x is not defined
    // const x = 10; // return error: Uncaught ReferenceError: x is not defined
    const b = "Learn JS";
    console.log("in block scobe:", b);
  }
  console.log("scobe-differenses:", x); // Ошибка: x не определён если let или const
}
testLet();

// (но объекты/массивы можно мутировать)
const y = 5;
// y = 10; // ❌ Ошибка

const arr = [1, 2];
arr.push(3);

const button = document.querySelector("a");
if (button) {
  button.innerText = "hello world";
}
