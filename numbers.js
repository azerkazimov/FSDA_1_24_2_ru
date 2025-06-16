const parseArr = (arr) => arr.map((el) => Number, parseFloat(el));

0.1 + 0.2 === 0.3;

// const multiRound = num => [Math.round(num), Math.floor(num), Math.ceil(num), Math.trunc(num)]
const multiRound = (num) => [
  Math.round(num * 100) / 100,
  Math.floor(num * 100) / 100,
  Math.ceil(num * 100) / 100,
  Math.trunc(num * 100) / 100,
  num.toFixed(2),
];

multiRound(Math.PI);

// ===================

// const getMaxNum = (arr) => {
//   let max = -Infinity;
//   arr.forEach((num) => {
//     if (Math.abs(num) > max) {
//       max = Math.abs(num);
//     }
//   });
//   return max;
// };

// ===================

// const getMaxNum = (arr) => {
//   const absolute = arr.map((num) => Math.abs(num));
//   const max = Math.max(...absolute);
//   return max;
// };

const getMaxNum = (arr) => {
  return Math.max(...arr.map((num) => Math.abs(num)));
};

const getMaxNumA = (arr) => Math.max(...arr.map((num) => Math.abs(num)));

// ===================
// Генерация случайного числа от 1 до 10

let price = 4.75;

console.log("Math.round:", Math.round(price)); // до ближайшего
console.log("Math.floor:", Math.floor(price)); // вниз
console.log("Math.ceil:", Math.ceil(price)); // вверх

// Проблема с 0.1 + 0.2

console.log(0.1 + 0.2);               // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);       // false
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true


// =====================================
// ============== String ===============
// =====================================

const splitText = (text, len) => {
  const strArr = [];
  while (true) {
    let chunk = text.substr(0, len);
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
  }
};

// Длина строки и доступ к символам
let word = "JavaScript";

console.log(word.length);   // 10
console.log(word[0]);       // J
console.log(word[word.length - 1]); // t

//Работа с регистром

let greeting = "ПрИвЕт Мир";

console.log(greeting.toLowerCase()); // привет мир
console.log(greeting.toUpperCase()); // ПРИВЕТ МИР

// Поиск в строке
let text = "Я учу JavaScript";

console.log(text.includes("учу"));        // true
console.log(text.startsWith("Я"));        // true
console.log(text.endsWith("Script"));     // true

// Замена и обрезка
let messy = "   hello world   ";

console.log(messy.trim());                // "hello world"
console.log(messy.replace("world", "JS")); // "   hello JS   "

//Разделение строки
let fruits = "apple,banana,orange";

let list = fruits.split(",");
console.log(list); // ["apple", "banana", "orange"]

// Шаблонная строка
let name = "Azer";
let age = 25;

console.log(`Меня зовут ${name}, мне ${age} лет.`);
