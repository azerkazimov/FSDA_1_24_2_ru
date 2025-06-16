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

// const obj = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
//   hobbies: ["reading", "gaming"],
// };

// const newObj = obj;

// newObj.name = "Alice";
// newObj.greeting = "Hello, World!";

// console.log("obj-name:", obj.name);
// console.log("obj:", obj);

// console.log(Number("17.17"));

// ==================
// ==== Function ====
// ==================


// SayHi("Anna");

// function SayHi(first_name, second_name = "Cate") {
//   let greet = "Hello";

//   if (first_name && second_name) {
//     return console.log(`${greet} ${first_name} and ${second_name}`);
//   }
//   if (first_name) {
//     return console.log(`${greet} ${first_name}`);
//   }

//   console.log("no one to greeting :(");
// }

// ==================

// let num = 5;

// function change(x) {
//   x = 10;
//   console.log("x:", x);
//   return x;
// }
// console.log("kjasgfjksgjdfgshj");

// change(num);
// console.log(num);

// ==================

// function setData(item) {
//   let num = 0;
//   return (num = num + item);
//   console.log("under return");
// }

// const result = setData(17);
// console.log(result);

// ==================

// const callback = (callback) => {
//     console.log("Hello");
//     callback;

// };

// const consoleW = (world) => {
//   console.log(world);
// };

// callback(consoleW("World!"));

// ==================

// const factorial = function fact(n) {
//   if (n <= 1) return 1;
//   return n * fact(n - 1);
// };
// console.log(factorial(5));

// ==================

// const func = () => console.log("Arrow function");
// func();

// const func2 = (num) => (num <= 1 ? 1 : num * func2(num - 1));

// console.log(func2(5));

// const func3 = (num) => ({
//   name: "John",
//   age: 30,
//   isAdmin: true,
//   hobbies: ["reading", "gaming"],
// });

// const user = {
//   name: "Анна",
//   age: 25,
//   isAdmin: "yes",
//   sayHi: function () {
//     setTimeout(() => {
//       console.log("Привет, " + this.name + " " + this.age + " " + this.isAdmin);
//     }, 1000);
//   },
// };

// user.sayHi();

// ==================

// function greet(name, callback) {
//   console.log("Привет, " + name);
//   callback(); // вызываем переданную функцию
// }

// function sayBye() {
//   console.log("Пока!");
// }

// greet("Анна", sayBye);

// =================
// ===== Array =====
// =================

// const arr2 = new Array(6, 7, 8, 9, 10);
// const arr3 = new Array(5); // массив длиной 5

const arr = [11, 22, 33, 44, 55];

let fruits = [`яблоко`, 2, { киви: 3 }, [1, 2, 3]];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

fruits.forEach((item, index) => {
  console.log(`index: ${index}, item: ${item}`);
});

fruits.map((item, index) => {
  console.log(`index: ${index}, item: ${item}`);
  return item;
});

arr.push(66);
const last = arr.pop();
console.log("last:", last);

arr.unshift(0);

const first = arr.shift();
console.log("first:", first);

console.log("arr:", arr);

const fruits2 = ["яблоко", "банан", "киви"];

const [...others] = fruits2;
console.log(others);
