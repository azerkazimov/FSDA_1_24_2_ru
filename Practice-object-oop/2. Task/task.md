### Задание 2: Фильтр Каталога Товаров

Дан массив товаров. Примените различные фильтры:

js
```js
const products = [
  { name: "Laptop", price: 1200, category: "electronics", inStock: true },
  { name: "Phone", price: 800, category: "electronics", inStock: false },
  { name: "Table", price: 300, category: "furniture", inStock: true },
  { name: "Book", price: 25, category: "education", inStock: true },
  { name: "Computer", price: 1500, category: "electronics", inStock: true }
];
```

*** Задания: ***

1. Показать только товары в наличии
2. Найти товары с ценой меньше 500
3. Найти товары из категории "электроника"
4. Найти самый дорогой товар
5. Посчитать количество товаров по категориям (в виде объекта)