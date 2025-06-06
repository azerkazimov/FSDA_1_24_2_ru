
---

### 📘 1. Что такое операторы в JavaScript?

**Операторы** — это специальные символы или ключевые слова, с помощью которых JavaScript выполняет операции над значениями (или переменными).  
Операторы позволяют **производить вычисления**, **сравнивать значения**, **управлять логикой**, **выполнять присваивания** и многое другое.

Они являются **основной частью синтаксиса языка** и используются почти в каждом скрипте.

---

### 🎯 2. Зачем нужны операторы?

Операторы нужны, чтобы:

- **Выполнять математические вычисления** (`+`, `-`, `*`, `/`)
    
- **Сравнивать значения** (`==`, `===`, `>`, `<`)
    
- **Присваивать значения переменным** (`=`, `+=`)
    
- **Описывать условия и логику программы** (`&&`, `||`, `!`)
    
- **Работать с типами и объектами** (`typeof`, `instanceof`)
    
- **Управлять потоком исполнения через тернарный оператор** (`? :`)
    

Без операторов язык был бы просто набором переменных — именно операторы позволяют **создавать "логику" программы**.

---

### 🛠️ 3. Примеры кода:

```js
let a = 10;      // оператор присваивания (=)
let b = 5;
let sum = a + b; // арифметический оператор (+)

console.log(sum); // 15

console.log(a > b); // true — оператор сравнения

let isAdult = true;
console.log(!isAdult); // false — логический оператор (!)
```

---

### ⚠️ 4. Типичные ошибки:

- **Путаница между `=` и `==` или `===`:**  
    `=` — присваивание,  
    `==` — сравнение по значению,  
    `===` — строгое сравнение (по типу и значению).
    
- **Неправильное использование логических операторов**, особенно при проверке условий.
    

---

### 🧠 5. Контрольные вопросы:

1. Что такое оператор в контексте JavaScript?
    
2. Чем `=` отличается от `==` и `===`?
    
3. Какие типы операторов ты знаешь?
    
4. Что произойдёт в выражении `5 + "5"` и почему?
    

---
# **"Унарные, бинарные и тернарные операторы в JavaScript"**

---

### 📘 1. Что это такое?

Операторы в JavaScript классифицируются по количеству **операндов** — значений, над которыми они выполняют действие:

| Вид оператора | Кол-во операндов | Пример                            |
| ------------- | ---------------- | --------------------------------- |
| **Унарный**   | 1                | `-x`, `!x`                        |
| **Бинарный**  | 2                | `x + y`, `x > y`                  |
| **Тернарный** | 3                | `условие ? значение1 : значение2` |

---

### 🧩 2. Унарные операторы

**Унарные операторы** работают только с **одним операндом**.

#### 🔹 Примеры:

```js
let x = 5;
console.log(-x);     // -5 — унарный минус
console.log(typeof x); // "number" — оператор typeof
console.log(!true);  // false — логическое отрицание
```

#### 🔍 Часто используемые унарные операторы:

- `-x` — унарный минус (меняет знак)
    
- `+x` — унарный плюс (преобразует в число)
    
- `!x` — логическое "не"
    
- `typeof` — возвращает тип переменной
    
- `++x`, `x++` — инкремент (увеличение)
    
- `--x`, `x--` — декремент (уменьшение)
    
- `delete` — удаляет свойство объекта
    
- `void` — возвращает `undefined`
    

---

### 🔗 3. Бинарные операторы

**Бинарные операторы** принимают **два операнда** и являются самыми распространёнными.

#### 🔹 Примеры:

```js
let a = 10, b = 5;

console.log(a + b);  // 15 — арифметическое сложение
console.log(a > b);  // true — сравнение
console.log(a && b); // 5 — логическое "и"
```

#### 🔍 Основные бинарные операторы:

- Арифметические: `+`, `-`, `*`, `/`, `%`
    
- Сравнения: `==`, `!=`, `>`, `<`, `>=`, `<=`, `===`, `!==`
    
- Логические: `&&`, `||`
    
- Присваивания: `=`, `+=`, `-=`, `*=`, `/=`
    
- Побитовые: `&`, `|`, `^`, `<<`, `>>`, `>>>`
    

---

### 📘 1. Что такое конкатенация строк?

**Конкатенация** — это объединение (сцепление) строк в одну. В JavaScript для этого чаще всего используется **бинарный оператор `+`**.

---

### 🔗 2. Бинарный оператор `+` для строк

Если хотя бы **один из операндов — строка**, оператор `+` приводит другой операнд к строке и выполняет **объединение**:

#### 🔹 Примеры:

```js
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName); // "John Doe"
```

```js
let age = 30;
let message = "Age: " + age;
console.log(message); // "Age: 30" — число преобразуется в строку
```

---

### 💡 3. Приведение типов при `+`

Если один операнд строка, **второй тоже приводится к строке**:

```js
console.log("5" + 1); // "51"
console.log("Result: " + true); // "Result: true"
```

> Это поведение называется **неявное приведение типов (type coercion)**.

---

### ⚠️ 4. Типичные ошибки

- ❌ **Ожидали сложение чисел, а получили строку:**
    

```js
let a = 10;
let b = "5";
console.log(a + b); // "105", а не 15
```

- ❌ **Неправильный порядок выражений:**
    

```js
console.log(1 + 2 + "3"); // "33"
console.log("1" + 2 + 3); // "123"
```

> Оператор `+` работает слева направо: сначала `1 + 2 = 3`, затем `"3" + "3"` → "33".

---

### 🛠️ 5. Современная альтернатива: шаблонные строки (template literals)

Более читаемый способ объединения:

```js
let name = "Alice";
let age = 25;
console.log(`Name: ${name}, Age: ${age}`); // Name: Alice, Age: 25
```

---

### 🧠 6. Контрольные вопросы:

1. Что произойдёт при выражении `"Hello" + 5 + 10` и почему?
    
2. Чем отличается `"2" + 2` от `2 + "2"`?
    
3. Почему `true + "!"` возвращает строку?
    
4. Какое преимущество шаблонных строк перед конкатенацией через `+`?
    





```js
// Конкатенация
let result = "Привет, " + name + "! Тебе " + age + " лет.";

// Шаблонная строка
let result = `Привет, ${name}! Тебе ${age} лет.`;

```


---

### 📘 Что такое `Infinity`?

В JavaScript `Infinity` — это **специальное числовое значение**, которое означает **бесконечность**.  
Оно появляется, когда результат вычисления выходит за пределы представимых чисел в языке.

---

### 🔹 Примеры появления `Infinity`

```js
console.log(1 / 0);       // Infinity
console.log(-1 / 0);      // -Infinity
console.log(Number.MAX_VALUE * 2); // Infinity
```

---

### 🧠 Ключевые свойства `Infinity`:

| Свойство                | Значение                                                        |
| ----------------------- | --------------------------------------------------------------- |
| Тип (`typeof Infinity`) | `"number"` — это числовой тип                                   |
| Знак                    | Бывает `Infinity` (положительное) и `-Infinity` (отрицательное) |
| Глобальная переменная   | `Infinity` — это глобальное значение в JavaScript               |

---

### 🔎 Как использовать и сравнивать:

```js
let x = 1 / 0; // Infinity
console.log(x === Infinity); // true
```

```js
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
```

---

### ⚠️ Особенности и подводные камни:

1. `Infinity` — не ошибка:
    
    ```js
    let result = 1 / 0;
    // не выдаёт ошибку, просто возвращает Infinity
    ```
    
2. Математические операции с `Infinity`:
    
    ```js
    console.log(Infinity + 1);    // Infinity
    console.log(Infinity - Infinity); // NaN (неопределённый результат!)
    console.log(Infinity * 0);    // NaN
    ```
    
3. Логические сравнения:
    
    ```js
    console.log(Infinity > 1000000000); // true
    console.log(-Infinity < -999999999); // true
    ```
    

---

### 📌 Полезно знать:

- `Infinity` — не «бесконечность» в математическом смысле, а **ограничение числового диапазона** в языке.
    
- Не путать с `NaN` — `Infinity` появляется при **делении на 0**, а `NaN` — при **некорректных математических операциях**.
    

---

### 🧠 Контрольные вопросы:

1. Что вернёт выражение `typeof Infinity`?
    
2. Почему `Infinity - Infinity` даёт `NaN`?
    
3. В каких случаях может появиться `Infinity` в реальном коде?
    
4. Чем отличается `Infinity` от `NaN`?
    



## 📘 Математические операции с `undefined` и `null` в JavaScript

---

### 🔍 1. Поведение `null` в математических операциях

В математическом контексте `null` **преобразуется в 0**.

#### 🔹 Примеры:

```js
console.log(null + 5);     // 5
console.log(null - 3);     // -3
console.log(null * 4);     // 0
console.log(null / 2);     // 0
```

> ✅ `null` => 0 при численном преобразовании

---

### ⚠️ 2. Поведение `undefined` в математике

`undefined` **не может быть преобразован в число корректно**, результат — всегда **`NaN`** (Not-a-Number).

#### 🔹 Примеры:

```js
console.log(undefined + 5);   // NaN
console.log(undefined - 3);   // NaN
console.log(undefined * 4);   // NaN
console.log(undefined / 2);   // NaN
```

> ❌ `undefined` => NaN при численных операциях

---

### 🧠 3. Почему такое поведение?

- JavaScript автоматически **приводит значения к числам**, если используется арифметический оператор (`+`, `-`, `*`, `/` и др.).
    
- Приведение типов:
    
    - `Number(null)` → `0`
        
    - `Number(undefined)` → `NaN`
        

---

### 🧪 4. Проверка руками:

```js
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN
```

---

### 📌 5. Оператор `+` с `undefined` и `null`

Если используется **строковая конкатенация**, `null` и `undefined` становятся строками:

```js
console.log("Value is: " + null);      // "Value is: null"
console.log("Value is: " + undefined); // "Value is: undefined"
```

---

### 🧠 Контрольные вопросы:

1. Что будет при `null + 10`?
    
2. Почему `undefined - 5` даёт `NaN`?
    
3. В чём разница между `null` и `undefined` при арифметике?
    
4. Как проверить, к какому типу приведёт значение?
    

---


# 4. Тернарный оператор

**Тернарный оператор** — это единственный оператор в JavaScript, который принимает **три операнда**.

#### 💡 Синтаксис:

```js
условие ? значение_если_истина : значение_если_ложь
```

#### 🔹 Пример:

```js
let age = 18;
let access = (age >= 18) ? "Разрешено" : "Запрещено";
console.log(access); // "Разрешено"
```

Тернарный оператор часто используется вместо `if...else` в кратких проверках.

---

### ⚠️ 5. Ошибки :

- Не путай **унарный минус `-x`** и **бинарный минус `a - b`** — контекст важен!
    
- Тернарный оператор читается плохо при вложенности — лучше использовать `if...else`.
    
- `++x` и `x++` работают похоже, но возвращают разные значения — будьте внимательны.
    

---

### 🧠 6. Контрольные вопросы:

1. В чём разница между унарным и бинарным оператором?
    
2. Что делает тернарный оператор и в каких случаях он полезен?
    
3. Как работает выражение `typeof null`? (Подвох!)
    
4. Что вернёт `+"123"` и почему?
    

---



## Явное привидение типов



  
## 📘 Операторы сравнения в JavaScript

---

### 🔍 Что такое операторы сравнения?

Операторы сравнения — это конструкции, которые **сравнивают два значения** и **возвращают логический результат** (`true` или `false`).

---

### 🔢 Основные операторы сравнения:

| Оператор | Название            | Пример      | Результат                              |
| -------- | ------------------- | ----------- | -------------------------------------- |
| `==`     | Равно (нестрого)    | `5 == '5'`  | `true` (приводит типы)                 |
| `===`    | Строгое равенство   | `5 === '5'` | `false` (сравнивает и тип, и значение) |
| `!=`     | Не равно (нестрого) | `5 != '5'`  | `false`                                |
| `!==`    | Строго не равно     | `5 !== '5'` | `true`                                 |
| `>`      | Больше              | `10 > 3`    | `true`                                 |
| `<`      | Меньше              | `2 < 8`     | `true`                                 |
| `>=`     | Больше или равно    | `5 >= 5`    | `true`                                 |
| `<=`     | Меньше или равно    | `4 <= 3`    | `false`                                |

---

### ⚠️ Отличие `==` и `===` (нестрогое и строгое сравнение)

```js
console.log(5 == '5');   // true — типы приводятся автоматически
console.log(5 === '5');  // false — типы разные
```

> 🧠 Всегда предпочитайте `===` и `!==` для **предсказуемости и надёжности**.

---

### 🔄 Сравнение разных типов

JS приводит типы **автоматически** в случае нестрогих операторов:

```js
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log('0' == 0); // true
console.log('' == false); // true
```

> Такие случаи часто приводят к ошибкам, поэтому важно понимать **приведение типов** и использовать строгие сравнения.

---

### 🔎 Примеры сравнения:

```js
console.log(3 > 2);     // true
console.log(2 >= 2);    // true
console.log(2 < 1);     // false
console.log('apple' > 'banana'); // false (сравнение по Unicode)
```

> При сравнении строк — сравниваются **посимвольно по кодам символов**.

---

### 🧠 Контрольные вопросы:

1. В чём разница между `==` и `===`?
    
2. Что вернёт `null == undefined` и `null === undefined`?
    
3. Почему `'5' == 5` — `true`, а `'5' === 5` — `false`?
    
---

## 📘 Логические операторы в JavaScript

---

### 🔍 Что такое логические операторы?

Логические операторы используются для объединения **булевых выражений** и управления логикой выполнения кода. Они возвращают **логическое значение** или **одно из операндов**, в зависимости от ситуации.

---

### 🔢 Основные логические операторы:

| Оператор | Название | Пример          | Результат |
| -------- | -------- | --------------- | --------- |
| `&&`     | И (AND)  | `true && false` | `false`   |
| `        |          | `               | ИЛИ (OR)  |
| `!`      | НЕ (NOT) | `!true`         | `false`   |

---

### ✅ Оператор `&&` (И)

- Возвращает `true`, **только если оба операнда true**.
    
- Если первый операнд — `false`, второй даже не вычисляется (**короткое замыкание**).
    

```js
console.log(true && true);    // true
console.log(true && false);   // false
console.log(5 > 3 && 10 < 20); // true
```

---

### ✅ Оператор `||` (ИЛИ)

- Возвращает `true`, **если хотя бы один операнд true**.
    
- Если первый операнд — `true`, второй даже не проверяется.
    

```js
console.log(true || false);   // true
console.log(false || false);  // false
console.log(5 > 10 || 10 < 20); // true
```

---

### ✅ Оператор `!` (НЕ)

- Инвертирует булевое значение: `true` становится `false`, и наоборот.
    

```js
console.log(!true);  // false
console.log(!false); // true
console.log(!(5 > 3)); // false
```

---

### 🔎 Пример с условиями:

```js
let age = 25;
if (age > 18 && age < 30) {
  console.log("Молодой взрослый");
}
```

---

### 🧠 Логические операторы и не-булевы значения

JavaScript **не всегда возвращает true/false**, а может вернуть **значение операнда**:

```js
console.log(null || "default");     // "default"
console.log("user" && "admin");     // "admin"
```

- `||` возвращает **первое "истинное" значение**
    
- `&&` возвращает **первое "ложное" значение**, иначе — последнее
    

---

### 📌 Примеры:

```js
console.log(0 || false || "hello"); // "hello"
console.log(1 && null && 3);        // null
```

---

### 🧠 Контрольные вопросы:

1. Что делает `!false`?
    
2. Чем `||` отличается от `&&` в логике и поведении?
    
3. Почему `console.log(null || "текст")` выведет `"текст"`?
    

---

## 📘 Условные операторы в JavaScript

---

### ❓ Что такое условные операторы?

Условные операторы позволяют выполнять **разные блоки кода в зависимости от условий**. Это основа для создания **логики принятия решений** в программе.

---

### 🔹 Основной синтаксис: `if`, `else if`, `else`

```js
if (условие) {
  // код выполняется, если условие истинно (true)
} else if (другое_условие) {
  // если первое ложно, проверяется это
} else {
  // если ни одно из условий не выполнено
}
```

---

### ✅ Пример:

```js
let age = 20;

if (age >= 18) {
  console.log("Доступ разрешён");
} else {
  console.log("Доступ запрещён");
}
```

---

### 🔹 Блок `else if`

Позволяет добавить **дополнительную проверку**:

```js
let grade = 85;

if (grade >= 90) {
  console.log("Отлично");
} else if (grade >= 70) {
  console.log("Хорошо");
} else {
  console.log("Нужно постараться");
}
```

---

### ⚠️ Важно: условие должно быть **булевым значением** (`true` или `false`)

---

### 🧠 Истинные и ложные значения (truthy / falsy)

JavaScript воспринимает некоторые значения как ложные:

```js
// falsy значения: false, 0, "", null, undefined, NaN
if (0) console.log("не выполнится");
if ("hello") console.log("выполнится"); // true
```

---

### 🔹 Тернарный оператор (короткая форма условия)

```js
условие ? выражение_если_true : выражение_если_false;
```

Пример:

```js
let message = age >= 18 ? "Вход разрешён" : "Вход запрещён";
```

---

### 🔹 `switch` — альтернатива множественным `if`

```js
let color = "green";

switch (color) {
  case "red":
    console.log("Стоп");
    break;
  case "green":
    console.log("Можно идти");
    break;
  default:
    console.log("Цвет не распознан");
}
```

> Используется, когда нужно сравнивать одно значение с несколькими вариантами.

---

### 🧠 Контрольные вопросы:

1. В чём отличие `if` и `switch`?
    
2. Что делает `else` и зачем он нужен?
    
3. Что вернёт выражение: `5 > 3 ? "Да" : "Нет"`?
    

---


  

