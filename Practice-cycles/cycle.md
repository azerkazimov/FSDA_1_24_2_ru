### 🧠 Циклы в JavaScript: зачем нужны, какие бывают, и что такое бесконечные циклы

---

## 📌 1. Для чего нужны циклы в JavaScript

Циклы позволяют **повторять один и тот же блок кода несколько раз** без необходимости дублировать его вручную.

**Примеры использования:**

- Перебор элементов массива
    
- Обработка данных из формы
    
- Вывод чисел от 1 до 100
    
- Автоматическая генерация элементов на странице (например, карточек товаров)
    

💡 **Главная идея**: автоматизация повторяющихся действий.

---

## 🔁 2. Какие циклы есть в JavaScript

JavaScript поддерживает несколько видов циклов, каждый из которых подходит для определённых ситуаций:

### ▶️ `for`

Используется, когда известен точный **счётчик итераций**.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

⏳ Выполняется:

1. Инициализация: `let i = 0`
    
2. Проверка условия: `i < 5`
    
3. Выполнение тела цикла
    
4. Шаг: `i++`
    

---

### ▶️ `while`

Работает, пока выполняется условие.  
Подходит, когда **неизвестно, сколько раз выполнять цикл**.

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

---

### ▶️ `do...while`

Отличается тем, что **тело цикла выполнится хотя бы один раз**, даже если условие ложно.

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

---

### ▶️ `for...in`

Используется для **перебора свойств объектов**.

```js
const user = { name: "Alice", age: 25 };
for (let key in user) {
  console.log(key, user[key]);
}
```

---

### ▶️ `for...of`

Применяется для **перебора значений итерируемых объектов** (массивы, строки, `Map`, `Set` и т.д.).

```js
const arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}
```

---

## ⚠️ 3. Что такое бесконечный цикл

**Бесконечный цикл** — это цикл, который **никогда не завершится**, потому что условие выхода из него **никогда не становится ложным**.

Пример:

```js
while (true) {
  console.log("Это бесконечный цикл");
}
```

---

### ❌ Почему это плохо:

- Может **зависнуть браузер**
    
- **Высокая нагрузка на процессор**
    
- Приложение может перестать отвечать
    

---

### ✅ Как избежать бесконечных циклов

1. **Обязательно обновляйте переменные-счетчики**
    
2. **Следите за условием** выхода из цикла
    
3. Используйте отладку (`console.log`) во время разработки
    

Пример безопасного цикла:

```js
let i = 0;
while (i < 10) {
  console.log(i);
  i++; // важно!
}
```

---

### 💡 Когда бесконечные циклы полезны

- В **системных скриптах** (например, игровой цикл `game loop`)
    
- При **работе с асинхронными задачами**, если есть встроенные точки выхода (`break`)
    
- В **серверных приложениях**, где программа всегда должна "слушать" входящие данные
    

Пример с выходом:

```js
while (true) {
  const input = prompt("Введите число (или 'exit' для выхода):");
  if (input === 'exit') break;
  console.log("Вы ввели:", input);
}
```

---

## ✅ Выводы 

- Циклы нужны, чтобы **автоматизировать повторяющиеся действия**
    
- Главное — **понять, когда и какой цикл лучше использовать**
    
- Бесконечные циклы — **опасны**, но могут быть полезны при правильном контроле
    

---

## 🔄 `continue` в цикле `for` — Пропуск итерации

### 📌 Что делает `continue`

Ключевое слово `continue` используется **внутри цикла**, чтобы **прервать текущую итерацию** и **перейти к следующей**, **не завершая полностью цикл**.

Это полезно, когда нужно **пропустить определённые значения** при выполнении цикла.

---

### ▶️ Синтаксис `continue` в `for`:

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i); // выведет только нечётные числа
}
```

### 🔍 Пояснение:

- Цикл `for` идёт от `0` до `9`
    
- Если `i` — чётное (`i % 2 === 0`), то срабатывает `continue`, и `console.log(i)` **пропускается**
    
- Таким образом, **в консоли будут только нечётные числа**: `1, 3, 5, 7, 9`
    

---

### 💡 Полезный пример: Пропустить пустые значения в массиве

```js
const names = ["Alice", "", "Bob", "", "Charlie"];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "") continue;
  console.log(names[i]);
}
```

**Вывод:**

```
Alice  
Bob  
Charlie
```

---

### ⚠️ Важно:

- `continue` **не завершает весь цикл**, только **одну итерацию**
    
- Может использоваться **в любом цикле** (`for`, `while`, `do...while`)
    
- Используется часто вместе с `if`, чтобы фильтровать данные
    

---
    

---

## 🔚 `break` — Прерывание цикла

### 📌 Что делает `break`

Ключевое слово `break` используется внутри циклов, чтобы **полностью прервать** выполнение цикла и выйти из него досрочно.

---

### ▶️ Синтаксис:

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

**Результат:**

```
1  
2  
3  
4
```

➡️ Цикл останавливается, как только `i === 5`

---

### 🔍 Когда использовать `break`

- Когда **найден нужный элемент** в массиве
    
- Когда **дальше продолжать итерации бессмысленно**
    
- В **бесконечных циклах**, чтобы их контролировать
    

---

### ✅ Пример: Найти первое отрицательное число в массиве

```js
const numbers = [4, 2, 7, -1, 5, -3];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    console.log("Первое отрицательное число:", numbers[i]);
    break;
  }
}
```

---

## 📚 Массивы в JavaScript (основы)

### 📌 Что такое массив?

Массив — это **упорядоченная коллекция данных**, хранящихся в **одной переменной**. Элементы массива индексируются с нуля.

```js
const fruits = ["apple", "banana", "cherry"];
```

- `fruits[0]` → `"apple"`
    
- `fruits[1]` → `"banana"`
    
- `fruits.length` → `3`
    

---

### 🔁 Перебор массива:

```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

---

## 🧱 Объекты в JavaScript (основы)

### 📌 Что такое объект?

Объект — это **структура данных**, которая хранит пары **ключ: значение**.

```js
const user = {
  name: "Alice",
  age: 25,
  isAdmin: false
};
```

- `user.name` → `"Alice"`
    
- `user["age"]` → `25`
    

---

### 🔁 Перебор объекта с `for...in`:

```js
for (let key in user) {
  console.log(key, ":", user[key]);
}
```

**Результат:**

```
name : Alice  
age : 25  
isAdmin : false
```

---

### ✅ Пример: Массив объектов

```js
const users = [
  { name: "Tom", age: 20 },
  { name: "Anna", age: 23 },
  { name: "Mike", age: 30 }
];

for (let i = 0; i < users.length; i++) {
  console.log(users[i].name + " is " + users[i].age + " years old.");
}
```

**Результат:**

```
Tom is 20 years old.  
Anna is 23 years old.  
Mike is 30 years old.
```

---

