### 🎯 Задание 8: Анализ текста

*** Создайте объект для анализа текста: ***

```js
const textAnalyzer = {
  text: "",
  
  setText(newText) {
    this.text = newText;
    return this;
  },
  
  // Implement these methods:
  letterCount() {
    // Number of letters without spaces
  },
  
  wordCount() {
    // Number of words
  },
  
  sentenceCount() {
    // Number of sentences (ending with . ! ?)
  },
  
  longestWord() {
    // Find the longest word
  },
  
  wordFrequency() {
    // Return an object with the frequency of each word
  },
  
  mostFrequentWord() {
    // Find the most frequently used word
  },
  
  averageWordLength() {
    // Average word length
  },
  
  statistics() {
    // Return all results in one object
  }
};
```

*** // Test: ***
```js
textAnalyzer.setText("This text will be analyzed. Very interesting text!")
  .statistics();
```