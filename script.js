// // Comment types

// // make comment by both slash
// /*  Another way
// var a = 5;
// a = 7;

// var a = 8;
// */

// // Var
// var a = 5;
// a = 7;

// var a = 8;
// console.log("var:", a);

// // Let
// // console.log("b:", b); // Reference error cannot access "b" before inicialization
// let b = "hello";
// b = 55;

// // let b = "hi" // Uncaught SyntaxError: Identifier 'b' has already been declared
// console.log("b:", b);

// // Const
// const c = 33;

// // c=44; // Error

// console.log("c", c);
// // на будующее
// // области видимости
// function testLet() {
//   if (true) {
//     var x = 10; // no problem, will show in console
//     // let x = 10; // return error: Uncaught ReferenceError: x is not defined
//     // const x = 10; // return error: Uncaught ReferenceError: x is not defined
//     const b = "Learn JS";
//     console.log("in block scobe:", b);
//   }
//   console.log("scobe-differenses:", x); // Ошибка: x не определён если let или const
// }
// testLet();

// // (но объекты/массивы можно мутировать)
// const y = 5;
// // y = 10; // ❌ Ошибка

// const button = document.querySelector("a");
// if (button) {
//   button.innerText = "hello world";
// }

// const a = 5;
// const arr = [1, 2];
// arr.push(3);

// const user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
//   "likes JS": true,
// };
// user.name = "Cate";
// user.age = 25;
// user["likes JS"] = false;
// user["likes JS"] = true;

// const user2 = {
//   name: "",
// };

// // user2 = {
// //   name: "Azer",
// // };

// user2.name = "Azer";
// user2.age = 25;

// // ...
// // ...
// // ...

// const lastName = "Doe";
// const lastname = "Smith";

// let name = "Alice"; // string
// let age = 25; // number
// let isOnline = true; // boolean
// let empty = null; // null
// let notSet; // undefined
// let id = Symbol("id"); // symbol
// let big = 123456789123456789n; // bigint

// let arr = [1, 2, null, 3, undefined, "", Number(), String()]; // array
// // let arr = {}

// function sayHello() {
//   console.log("Hello!");
// }

// console.log(typeof sayHello);

// const text = "Hello, World!";

// const name = new String("John Doe");

// console.log("text:",text, "name:", name);
// console.log("text:", typeof text, "name:", typeof name);

// const num = 42;

// const numObj = new Number(42);
// console.log("num:", num, "numObj:", numObj);
// console.log("num:", typeof num, "numObj:", typeof numObj);

// const isTrue = true;
// const isTrueObj = new Boolean(true);
// console.log("isTrue:", isTrue, "isTrueObj:", isTrueObj);
// console.log("isTrue:", typeof isTrue, "isTrueObj:", typeof isTrueObj);

// const sym = Symbol("symbol");
// console.log("sym:", sym, );
// console.log("sym:", typeof sym, );

// const user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
//   hobbies: ["reading", "gaming"],
// }

// const userObj = new Object({
//   name: "John",
//   age: 30,
//   isAdmin: true,
//   hobbies: ["reading", "gaming"],
// });
// console.log("user:", user, "userObj:", userObj);
// console.log("user:", typeof user, "userObj:", typeof userObj);

// const arr = [1, 2, 3, 4, 5];

// const arrObj = new Array(1, 2, 3, 4, 5);

// console.log("arr:", arr, "arrObj:", arrObj);
// console.log("arr:", typeof arr, "arrObj:", typeof arrObj);

// function greet(name) {
//       return "Привет, " + name;
//     }
// greet("Мир");

// //  const greeting = new Function("name", 'return "Привет, " + name');
// console.log(greet("Мир"));
// console.log(typeof greet);

// const date = new Date();
// console.log("date:", date);
// console.log("date:", typeof date);

//   const pattern = /abc/i;
//   const patternObj = new RegExp("abc", "i");
//   console.log("pattern:", pattern, "patternObj:", patternObj);
//   console.log("pattern:", typeof pattern, "patternObj:", typeof patternObj);

const obj = {
  name: "John",
  age: 30,
  isAdmin: true,
  hobbies: ["reading", "gaming"],
};

const newObj = obj;

newObj.name = "Alice";
newObj.greeting = "Hello, World!";

console.log("obj-name:", obj.name);
console.log("obj:", obj);
