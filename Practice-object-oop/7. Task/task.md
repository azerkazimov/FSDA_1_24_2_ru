### 🎯 Задание 7: Менеджер конфигурации

***Создайте объект для управления конфигурацией приложения:***

```js
const configuration = {
  // Default values
  defaultSettings: {
    language: "az",
    theme: "light",
    notifications: true,
    autosave: 10, // minutes
    fontSize: 14
  },
  
  userSettings: {},
  
  // Complete these methods:
  setSetting(key, value) {
    // Change a user setting
  },
  
  getSetting(key) {
    // Return user setting if exists, otherwise default
  },
  
  resetSettings() {
    // Clear user settings
  },
  
  getAllSettings() {
    // Merge default and user settings
  },
  
  exportSettings() {
    // Return settings as a JSON string
  },
  
  importSettings(jsonString) {
    // Load settings from JSON
  }
};
```