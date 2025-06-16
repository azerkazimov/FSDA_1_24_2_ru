// literal notation or functional
const person = {}
const alien = new Object


// object
const prop = 'my'
const transaction = {
    // 1243234^*amount: 17, // неправильное заявление ключа
    'my& name': "Bob",
    // [prop + name]: "Jack",
    amount: 17,
    target: 'bank',
    name: 'Tom',
}

console.log(transaction.amount);

transaction.name = "John"
console.log(transaction.name);
console.log(transaction['my& name']);
// console.log(transaction[prop + name]);

// ===================
// transform to object 
// ===================
const transformToObj = arr => {
    let obj = {}

    arr.forEach(element => {
        obj[element] = element
    });

    return obj
}

const arr = [121, 4343, "asdad", "asdasd"]
const result = transformToObj(arr)

console.log(result);

// =====================

const user = {
    name: "Tom"
}

user.name = "Bob" // correct name:" Bob"

// BUt if i want to change user to another obj it return me error
// user = {} // TypeError - because I want to change reference of constant varaible 


// ===================

const a = {}
const b = {}

console.log(a == b); // false
console.log(a === b); // false

// but when 
// const a = {}
// const b = a

// console.log(a == b); // true
// console.log(a === b); // true


// ===================

const name = 'Tom'

const user2 = {
    name: name // => we can change it to one 'name'
}


// ======================
// ==== concat props ====
// ======================

// for run just with arrays

const arr2 = ['a', 'a', 'b'];

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

// for...of run just with arrays
for (let value of arr2) {
    console.log(value);
}

// for...in run  with arrays and object nut use for objects
const user3 = {
    name: "Jack",
    age: 17,
    email: "mail@gmail.com",
}

for (let key in user3) {
    console.log(user3[key]);
}

// ======================
// let get obj and return array with obj values

const concatProps = (obj) => {
    let arr = []
    for (let key in obj) {
        arr.push(obj[key])
        // arr.concat(obj[key]) // => return new arr
    }
    return arr
}

console.log(concatProps(user3));


// =====================================
// ==== object keys, values entries ====
// =====================================

Object.entries(user3)
Object.keys(user3)
Object.values(user3)

// ==== GET ADULTS ====
const users = {
    'Tom': 12,
    'John': 23,
    'Bob': 20,
}

// ======= v1 ======
// const getAdults = obj => {
//     const usersArr = Object.entries(obj)
//     const filtered = usersArr.filter(user => user[1] >= 18)
//     // return filtered => array from colection [name: age]

//     const users = filtered.map(user => user[0])
//     return users
// }

// ======= v2 ======
// const getAdults = obj => {
//     const result = Object.entries(obj)
//     .filter(user => user[1] >= 18)
//     // return filtered => array from colection [name: age]

//     .map(user => user[0])
//     return result
// }

// ======= v3 ======
const getAdults = obj => Object.entries(obj)
    .filter(user => user[1] >= 18)
    .map(user => user[0])


console.log(getAdults(users));

// ======= last version ======
console.log(Object.entries(users).filter(user => user[1] >= 18)
    .map(user => user[0]));


// =====================================
// =========== copy object =============
// =====================================

const player = users
console.log(player); // get same reference for users and if we change something in player it will change in users
console.log(player === users); // true

const players = { Tom: 12, John: 23, Bob: 40 }

const copyUsers = Object.assign(users, players)
console.log(copyUsers);

console.log(copyUsers === players); // false

// ===== function to copy object =====

const copyObj = obj => Object.assign({}, obj)
console.log(copyObj(copyUsers));

// ============== spread ==============

const spreadCopy = { ...users }
console.log(spreadCopy);
console.log(spreadCopy === users);

const { Tom, Kate = "yoxdur", ...rest } = spreadCopy
console.log(Tom, Kate, rest);

const play = {
    game: 'JS',
    ...rest
}
console.log(play);

// =====================================
// ============= methods ===============
// =====================================


const user5 = {
    name: 'Tom',
    age: 17,
    sayHi: function () {
        console.log(`hello ${this.name}`); 
    }
}

user5.sayHi() // Методы объектов

console.log('text'.toUpperCase()); // Методы для примитивов

 