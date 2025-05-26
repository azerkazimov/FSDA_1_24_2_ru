// const callBackPromt = {
//   message: "Tell your Number",
//   showPromp() {
//     const number = prompt(this.message);
//     console.log(number);
//   },
//   showDefferedPrompt(ms) {
//     // setTimeout(() => this.showPromp(), ms);
//     setTimeout(this.showPromp.bind(this), ms);
//   },
// };
// callBackPromt.showDefferedPrompt(1000);

// const protoAuto = {

//   start: function () {
//     return `${this.mark} ${this.model} запущен`;
//   },
// };

// const auto = Object.create(protoAuto);
// auto.mark = "BMW";
// auto.model = "X6";

// console.log(auto.start());

//  ==== Функция-конструктор ====

// function Auto (mark, model, year) {
//   this.mark = mark;
//   this.model = model;
//   this.yeae = year;
//   this.start = function() {
//     return `${this.mark} ${this.model} запущен`;
//   };
// }

// const auto = new Auto("BMW", "X6", 2023);
// console.log(auto.start());

// class Auto {
//   constructor(mark, model, year) {
//     this.mark = mark;
//     this.model = model;
//     this.yeae = year;
//   }
//   start() {
//     return `${this.mark} ${this.model} запущен`;
//   }
// }

// const auto = new Auto("Mercedes", "GLS", 2023);
// console.log(auto.start());

// =================

// const greet = "Hi Gitler";

// sayHi("necesen");

// function walom(mes) {
//   const greet = "hello Gitler";
//   const kaput = "Gitler kaput";
//   console.log(`${greet}, ${kaput} - ${mes}`);
// }

// function sayHi(mes) {
//   walom(mes);
// }

// =================

// const obj = {
//   name: "Azer",
//   greet() {
//     console.log(this.name);
//   }
// };

// obj.greet(); // Azer

// const greetFn = obj.greet;
// greetFn(); // undefined (в обычной функции this — глобальный объект)

// const greetFn = obj.greet();
// greetFn();

// const obj2 = {
//   name: "JS",
//   arrow: () => {
//     console.log(this.name); // undefined
//   },
//   normal() {
//     console.log(this.name); // JS
//   },
// };
// // obj2.arrow();
// obj2.normal();

// const user = {
//   name: "Azer",
//   sayHi() {
//     console.log(this.name);
//   },
// };

// const usersGreet = user.sayHi.bind(user); // undefined
// console.log(usersGreet());

// setTimeout(() => user.sayHi(), 2000);
// setTimeout(user.sayHi.bind(user), 3000);

// const user2 = {
//   name: "Azer",
//   greet() {
//     console.log(`Hi, I'm ${this.name}`);
//   },
// };

// // const greetFn = user2.greet;
// // greetFn(); // ❌ undefined — потеря контекста

// const boundGreet = user2.greet.bind(user2);
// boundGreet();

// function multiply(a, b) {
//   return a * b;
// }

// const double = multiply.bind(null, 2);
// console.log(double(6));

// const human = {
//   name: "Лейла",
//   age: 28,
//   email: "leyla@example.com",
//   adress: {
//     city: "Баку",
//     district: "Насими",
//     street: "Низами",
//   },
// };

// const report = {
//   title: "Annual Report",
//   date: "2024",

//   // Method syntax (ES6)
//   getData() {
//     return `${this.title} - ${this.date}`;
//   },

//   // Traditional method syntax
//   print() {
//     console.log(this.getData());
//   },

//   // Arrow function (problem with this context!)
//   wrongMethod: () => {
//     // here, this will be window/undefined
//     console.log(this.title); // undefined
//   },
// };

// report.print()

// const user = {
//   _name: "",
//   _age: 0,

//   // Getter
//   get name() {
//     return this._name.toUpperCase();
//   },

//   // Setter
//   set name(value) {
//     if (value.length <= 2) {
//       throw new Error("Name must be at least 2 letters");
//     }
//     this._name = value;
//   },

//   get age() {
//     return this._age;
//   },

//   set age(value) {
//     if (value < 0 || value > 150) {
//       throw new Error("Age must be between 0-150");
//     }
//     this._age = value;
//   },
// };
// user.name = "Hitler";
// user.age = 33;

// delete user._age
// console.log(user.name);
// console.log(user.age);

// const human = {
//   name: "Nigar",
//   age: 30,
//   profession: "Teacher",
// };

// for (let key in human) {
//   console.log(`${key} - ${human[key]}`);
// }

// const constantObject = Object.freeze({
//   name: "JavaScript",
//   type: "Programming Language",
// });

// // constantObject.name = "Python"; // Will not work

// console.log(constantObject.name); // JavaScript

// const sealed = Object.seal({
//   name: "React",
//   version: "18.0",
// });

// sealed.name = "Vue"; // Will work
// // sealed.new_field = "test"; // Will not work
// // delete sealed.version; // Will not work

// console.log(sealed.hasOwnProperty("name")); // true
// console.log("name" in sealed); // true
// console.log("toString" in sealed); // true (из прототипа)
// console.log(sealed.hasOwnProperty("toString"));

// const original = {
//     name: "Kenan",
//     age: 33,
//     hobbies: ["reading", "sports"]
// };

// // With Object.assign()
// const copy1 = Object.assign({}, original);

// // With spread operator
// const copy2 = { ...original };

// // Problem: nested objects still share references
// copy1.hobbies.push("music");
// console.log(original.hobbies); // ["reading", "sports", "music"]

const user = {
  name: "Sabina",
  age: 38,
  email: "sabina@gmail.com",
  city: "Ganja",
};

const { name, age, email = "" } = user;
// console.log(name);    // Sabina
// console.log(age);     // 28
// console.log(email);

// const { name: userName, age: userAge } = user;
// console.log(userName); // Sabina
// console.log(userAge); // 28

// const company = {
//     name: "TechAZ",
//     address: {
//         city: "Baku",
//         district: "Yasamal",
//         postal_code: "AZ1000"
//     },
//     employees: 250
// };

// const { name: companyName, address: {city, district} , employees } = company;

// console.log(companyName); // TechAZ
// console.log(city);        // Baku
// console.log(district);

// function userInfo({ name, age, email }) {
//   return `${name} (${age}) - ${email}`;
// }

// const info = userInfo(user);
// console.log(info); // Sabina (38) - sabina@gmail.com

// With default parameters
// function createProfile({
//   name,
//   age,
//   city = "Baku",
//   profession = "Not specified",
// } = {}) {
//   return { name, age, city, profession };
// }

// const animal = {
//     type: "Mammal",
//     makeSound() {
//         console.log("Animal makes a sound");
//     }
// };

// const dog = Object.create(animal);
// dog.breed = "Golden Retriever";
// dog.makeSound = function() {
//     console.log("Woof woof!");
// };

// console.log(dog.type);     // Mammal (from prototype)
// dog.makeSound();

// class Person {
//   constructor(name, age, profession) {
//     this.name = name;
//     this.age = age;
//     this.profession = profession;
//   }

//   // Method (shared on prototype)
//   getInfo() {
//     return { name: this.name, age: this.age, profession: this.profession };
//   }
// }

// const person1 = new Person("Elnur", 32, "Bedbaxt");
// const { name: personName, age: personAge, profession: personProfession } = person1;
// console.log(personName, personAge, personProfession);

function Car(make, model) {
    // 1. A new object is created: {}
    // 2. this refers to the new object
    // 3. this.__proto__ = Car.prototype

    this.make = make;
    this.model = model;

    // 4. this is returned (implicit return)
}

// Safe constructor call (handles missing 'new')
function SafeCar(make, model) {
    if (!(this instanceof SafeCar)) {
        return new SafeCar(make, model);
    }

    this.make = make;
    this.model = model;
}

// Example usage:
const car1 = new Car("Toyota", "Corolla");
console.log(car1); // Car { make: 'Toyota', model: 'Corolla' }

const car2 = SafeCar("Honda", "Civic"); // works with or without 'new'
console.log(car2); // SafeCar { make: 'Honda', model: 'Civic' }
