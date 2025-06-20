
## 1. Что такое RESTful API?

**REST** (Representational State Transfer) — это архитектурный стиль для создания веб-сервисов, который использует стандартные HTTP методы для взаимодействия с ресурсами.

### Основные принципы REST:

- **Stateless** — каждый запрос содержит всю необходимую информацию
- **Client-Server** — разделение ответственности между клиентом и сервером
- **Cacheable** — ответы могут кэшироваться
- **Uniform Interface** — единообразный интерфейс взаимодействия

## 2. HTTP Методы

### GET

- **Назначение**: Получение данных
- **Многоразовый**: Да (можно вызывать много раз без изменения состояния)
- **Пример**: `GET /api/users` — получить список пользователей

### POST

- **Назначение**: Создание новых ресурсов
- **Многоразовый**: Нет
- **Пример**: `POST /api/users` — создать нового пользователя

### PUT

- **Назначение**: Полное обновление ресурса
- **Многоразовый**: Да
- **Пример**: `PUT /api/users/1` — полностью обновить пользователя с ID 1

### DELETE

- **Назначение**: Удаление ресурса
- **Многоразовый**: Да
- **Пример**: `DELETE /api/users/1` — удалить пользователя с ID 1

### PATCH

- **Назначение**: Частичное обновление ресурса
- **Многоразовый**: Да
- **Пример**: `PATCH /api/users/1` — частично обновить пользователя

## 3. Принципы дизайна Endpoints

### Хорошие практики:

```
✅ Правильно:
GET /api/users          # Получить всех пользователей
GET /api/users/1        # Получить пользователя с ID 1
POST /api/users         # Создать пользователя
PUT /api/users/1        # Обновить пользователя с ID 1
DELETE /api/users/1     # Удалить пользователя с ID 1

❌ Неправильно:
GET /api/getUsers
POST /api/createUser
GET /api/user/delete/1
```

### Правила именования:

- Используйте существительные, не глаголы
- Используйте множественное число для коллекций
- Используйте иерархическую структуру
- Используйте строчные буквы и дефисы

## 4. JSON структура

### Пример структуры пользователя:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zipcode": "10001"
  },
  "phone": "+1-234-567-8900",
  "website": "johndoe.com"
}
```

### Структура ответа API:

```json
{
  "data": [...],
  "status": "success",
  "message": "Users retrieved successfully",
  "meta": {
    "total": 100,
    "page": 1,
    "per_page": 10
  }
}
```

## 5. Fetch API в React

### Базовый GET запрос:

```javascript
const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
```

### POST запрос:

```javascript
const createUser = async (userData) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
```

## 6. Axios в React

### Установка:

```bash
npm install axios
```

### Базовая настройка:

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Интерцепторы для обработки ошибок
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);
```

### GET запрос с Axios:

```javascript
const fetchUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    throw error;
  }
};
```

### POST запрос с Axios:

```javascript
const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
```

## 7. Управление состоянием API в React

### Использование useState и useEffect:

```javascript
import React, { useState, useEffect } from 'react';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
```

## 8. Кастомные хуки для API

### useApi хук:

```javascript
import { useState, useEffect } from 'react';

const useApi = (apiFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiFunction();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error };
};

// Использование:
const { data: users, loading, error } = useApi(fetchUsers);
```

## 9. Обработка ошибок

### Типы ошибок:

- **Network errors** — проблемы с сетью
- **HTTP errors** — ошибки сервера (404, 500, etc.)
- **Parsing errors** — ошибки парсинга JSON
- **Timeout errors** — превышение времени ожидания

### Обработка ошибок:

```javascript
const handleApiCall = async (apiFunction) => {
  try {
    const result = await apiFunction();
    return { data: result, error: null };
  } catch (error) {
    let errorMessage = 'Произошла неизвестная ошибка';
    
    if (error.response) {
      // Ошибка HTTP
      errorMessage = `Ошибка сервера: ${error.response.status}`;
    } else if (error.request) {
      // Проблемы с сетью
      errorMessage = 'Проблемы с сетевым соединением';
    } else {
      errorMessage = error.message;
    }
    
    return { data: null, error: errorMessage };
  }
};
```

## 10. Оптимизация и лучшие практики

### Кэширование:

```javascript
const cache = new Map();

const fetchWithCache = async (url) => {
  if (cache.has(url)) {
    return cache.get(url);
  }
  
  const data = await fetch(url).then(res => res.json());
  cache.set(url, data);
  return data;
};
```

### Отмена запросов:

```javascript
useEffect(() => {
  const controller = new AbortController();
  
  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        signal: controller.signal
      });
      // обработка ответа
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Запрос был отменен');
      }
    }
  };
  
  fetchData();
  
  return () => {
    controller.abort();
  };
}, []);
```

### Дебаунсинг для поиска:

```javascript
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
```

## 11. Тестирование API запросов

### Мокирование fetch:

```javascript
// В тестах
global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

test('should fetch users', async () => {
  const mockUsers = [{ id: 1, name: 'John' }];
  
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockUsers,
  });

  const users = await fetchUsers();
  expect(users).toEqual(mockUsers);
});
```

## 12. Заключение

### Ключевые моменты:

- REST API — стандарт для веб-сервисов
- Используйте правильные HTTP методы
- Обрабатывайте ошибки корректно
- Применяйте loading состояния
- Кэшируйте данные когда это возможно
- Тестируйте API взаимодействия
- Используйте TypeScript для типизации данных