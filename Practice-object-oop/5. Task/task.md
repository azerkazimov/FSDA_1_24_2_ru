### 🎯 Задание 5: Калькулятор Корзины

*** Система расчёта для e-commerce корзины: ***

```js
const shoppingCart = {
  products: [
    { name: "Apple iPhone", price: 1000, quantity: 1, taxPercent: 18 },
    { name: "Samsung TV", price: 800, quantity: 2, taxPercent: 18 },
    { name: "Book", price: 20, quantity: 3, taxPercent: 0 }
  ],
```
  // Реализуйте эти методы:
  calculateTotalPrice() {
    // Общая цена без налога
  },
  
  calculateTax() {
    // Общая сумма налога
  },
  
  totalPriceWithTax() {
    // Общая цена с налогом
  },
  
  addProduct(product) {
    // Добавить новый товар или увеличить количество существующего
  },
  
  removeProduct(productName) {
    // Удалить товар из корзины
  },
  
  clearCart() {
    // Удалить все товары
  }

```