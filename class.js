class Avtomobil {
  constructor(marka, model, year) {
    this.marka = marka;
    this.model = model;
    this.year = year;
  }

  fly() {
    console.log(this.marka + " " + this.model + " лети");
  }
}

var car = new Avtomobil("BYD", "kitayskiy", 2020);
car.fly();


class Student {
    constructor(name, surname, age, faculty) {
        if (!name.trim() || !surname.trim()) {
            throw new Error('Name and surname are required')
        }

        this.name = name.trim();
        this.surname = surname.trim();
        this.age = age
        this.faculty = faculty
        this.grade = []
    }

    fullName() {
        return `${this.name} ${this.surname}`
    }

    addGrade(subject, grade) {
        this.grade.push({ subject, grade, date: new Date() })
    }

    calcAverage() {
        if (this.grade.length === 0) return 0
        const sum = this.grade.reduce((acc, item) => acc + item.grade, 0)
        return Math.round((sum / this.grade.length) * 100) / 100
    }

    showInfo() {
        return {
            fullName: this.fullName(),
            age: this.age,
            faculty: this.faculty,
            average: this.calcAverage(),
            grades: this.grade.length
        }
    }
}

const student = new Student(" aaa", " vvvv", 45, "Xudojestvennaya gimnastika")
// console.log(student);
// student.addGrade("Gimnastika", 90)
// student.addGrade("Risovaniye", 85)
// console.log(student.showInfo());


// ======= Calculator ======

class Calculator {
    constructor() {
        this.res = 0;
        this.history = []
    }

    add(num) {
        this.hist('add', num)
        this.res += num
        return this
    }

    sub(num) {
        this.hist('sub', num)
        this.res -= num
        return this
    }

    mul(num) {
        this.hist('mul', num)
        this.res *= num
        return this
    }

    div(num) {
        this.hist('div', num)
        if (num === 0) throw new Error("hitler kaput")
        return this.res /= num
    }

    pow(num) {
        this.hist('pow', num)
        this.res = Math.pow(this.res, num)
        return this
    }
    sqrt() {
        if (this.res < 0) throw new Error("SQRT from negative num")
        this.hist('sqrt', null)
        this.res = Math.sqrt(this.res)
        return this
    }

    hist(oper, val) {
        this.history.push({ oper, val, prev: this.res, })
    }

    clear() {
        this.res = 0;
        this.history = []
    }

    getRes() {
        return this.res
    }

    gethistory() {
        return this.history
    }
}

const calc = new Calculator()
const res = calc.add(9).add(2).add(2).sub(1).mul(3).sqrt()



// ==== getter setter =====


class User {
    constructor(name, email, age) {
        this._name = name
        this._email = email
        this._age = age
        this.birtday = new Date()
    }

    static getFullName() {
        console.log(`${this.name} ${this.email}`);
    }

    get name() {
        return this._name
    }
    set name(value) {
        if (typeof value !== "string" || value.length < 2) throw new Error("Name must include min 2 symbol")
        this._name = value.trim()
    }
    get email() {
        return this._email
    }

    set email(value) {

        this._email = value.trim()
    }

}

// const user = new User("Firdovski", "firdovski@gmial.com", 22)

// console.log(user);
// user.name = "Veli"
// user.email = "veli@gmail.com"
// console.log(user.name);
// console.log(user.email);

// console.log(User.getFullName);


// class Automobile {
//     constructor(make, model, year, engine) {
//         this.make = make
//         this.model = model
//         this.year = year
//         this.engine = engine
//     }

//     static bmw(model, year) {
//         return new Automobile('Bmw', model, year, "benzin")
//     }
//     static ford(model, year) {
//         return new Automobile('ford', model, year, "benzin")
//     }
//     static tesla(model, year) {
//         return new Automobile('tesla', model, year, "electro")
//     }
//     static audi(model, year) {
//         return new Automobile('audi', model, year, "benzin")
//     }

//     info() {
//         return `${make}, ${model}, ${year}, ${engine}`
//     }
// }

// const bmw = Automobile.bmw("f30", 2022)
// console.log(bmw);

// const bmw = new Automobile()
// console.log(bmw.bmw("f30", 2022));



// ============= inheritance ================

class Organizm {
    constructor(name) {
        this.name = name;
        this.isAlive = true
    }

    breeze() {
        console.log(`${this.name} are breeze`);
    }
}

class Animal extends Organizm {
    constructor(name, age, type) {
        super(name)
        this.age = age
        this.type = type
        this.health = 100
    }

    sound() {
        console.log(`${this.name} make a sound`);
        this.health -= 5
    }

    eat() {
        console.log(`${this.name} eat`);
        this.health += 25
        if (this.health > 100) this.health = 100
    }

    sleep() {
        console.log(`${this.name} sleep`);
        this.health += 50
        if (this.health > 100) this.health = 100
    }

    status() {
        return {
            name: this.name,
            age: this.age,
            type: this.type,
            health: this.health,
        }
    }
}

class Iguana extends Animal {
    constructor(name, age, owner) {
        super(name, age, "Lizard")
        this.owner = owner
    }

    sound() {
        console.log(`${this.name} make a sound: tir tir tir tir`);
        this.health -= 5
    }

    makeSound() {
        super.sound()
    }

    develop() {
        console.log(`${this.name} are codding`);
        this.health -= 99
    }

    eatOwner() {
        console.log(`${this.name} eat his ${this.owner} owner. HAHAAHAHA`);
        this.health += 105
        if (this.health >= 105) this.health = 105
    }
}

const iguana = new Iguana("Kim Cin inn", "iguAnna", "Tamerlan Hasanov")

// iguana.eatOwner()
// console.log(iguana);
// iguana.develop()
// console.log(iguana);
// iguana.sound()
// console.log(iguana);
// iguana.sound()
// console.log(iguana);
// iguana.eatOwner()
// console.log(iguana);
// iguana.develop()
// console.log(iguana);
// iguana.sleep()
// console.log(iguana);
// iguana.makeSound()
// console.log(iguana);


// new.target

class Transport {
    constructor() {
        if (new.target === Transport) {  // ==> для абстрактности
            throw new Error("You can't create inheritance of abstract class")
        }
    }
    move() {
        throw new Error("You can't use methods of abstract class")
    }
}

class Bus extends Transport {
    constructor(name) {
        super()
        this.name = name
    }

    move() {
        console.log(`${this.name} bus are drive forward`);
    }

    isMove() {
        super.move()
    }

}

const bus = new Bus("Isuzu")
bus.move()


const Constrution = class {
    constructor(type, name) {
        this.type = type
        this.name = name
    }

    build() {
        console.log(`${this.name} are build by ${this.type}`);
    }
}

const house = new Constrution("building", "AzTech")
house.build()

// ===== private fields in Class =====

class BankAccount {
    #balance
    constructor(owner, balance) {
        this.owner = owner
        this.#balance = balance
    }

    #showBalance() {
        return this.#balance
    }
    checkBalance() {
        return this.#showBalance
    }

    withdraw(amout) {
        if (amout <= this.#balance) {
            this.#balance -= amout
            return true
        }
        return false
    }
}

const acc = new BankAccount("Tamerlan", 100)
console.log(acc.withdraw(25));
console.log(acc);
console.log(acc.withdraw(65));
console.log(acc);















 