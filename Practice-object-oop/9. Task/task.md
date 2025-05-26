### 🎯 Задание 9: Калькулятор стоимости

Система расчёта стоимости для разных типов товаров:
```js
const priceCalculator = {
  taxRates: {
    standard: 18,
    food: 0,
    luxury: 25
  },
  
  discountCodes: {
    "STUDENT": 10,
    "VIP": 15,
    "FIRST": 20
  },
  
  deliveryPrices: {
    "Baku": 5,
    "other_city": 10,
    "village": 15
  },
  
  // Write these methods:
  calculateProductPrice(basePrice, category) {
    // Price including tax
  },
  
  applyDiscount(price, discountCode) {
    // Apply discount code
  },
  
  calculateDelivery(location, orderValue) {
    // Free delivery for orders over 100 AZN
  },
  
  calculateTotal(productsList, discountCode, deliveryAddress) {
    // Full calculation: products + tax + discount + delivery
  },
  
  createInvoice(customerInfo, orderDetails) {
    // Create a detailed invoice object
  }
};
```

*** // Test data: ***
```js
const orderProducts = [
  { name: "Laptop", basePrice: 1000, category: "standard" },
  { name: "Bread", basePrice: 2, category: "food" },
  { name: "Gold Watch", basePrice: 5000, category: "luxury" }
];
```