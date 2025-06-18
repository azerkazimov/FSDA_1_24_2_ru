

## 🔹 1. React и его особенности


### Основные особенности React:

- **Virtual DOM** - Повышает производительность
- **Component-based** - Переиспользуемые компоненты
- **One-way data flow** - Данные движутся только в одном направлении
- **Declarative** - Вы пишете что хотите, как это будет сделано решает React

# Создание React приложения

Я помогу вам создать ваше первое React приложение! Вот пошаговое руководство для начала работы.

## Предварительные требования

Убедитесь, что у вас установлен Node.js на компьютере. Вы можете скачать его с [nodejs.org](https://nodejs.org/).

## Создание первого React приложения

**1. Откройте терминал/командную строку**

**2. Создайте новое React приложение используя Create React App:**

```bash
npx create-react-app my-first-app
```

(Замените "my-first-app" на любое имя, которое хотите дать вашему проекту)

**3. Перейдите в папку проекта:**

```bash
cd my-first-app
```

**4. Запустите сервер разработки:**

```bash
npm start
```

Это автоматически откроет ваше новое React приложение в браузере по адресу `http://localhost:3000`. Вы должны увидеть стандартную страницу приветствия React с вращающимся логотипом React.

## Понимание структуры проекта

Ваше новое React приложение будет иметь следующую структуру:

```
my-first-app/
├── public/
├── src/
│   ├── App.js          # Основной компонент
│   ├── App.css         # Стили для App
│   ├── index.js        # Точка входа
│   └── index.css       # Глобальные стили
├── package.json
└── README.md
```

## Внесение первых изменений

Попробуйте отредактировать файл `src/App.js` - измените какой-нибудь текст и сохраните файл. Вы увидите изменения мгновенно в браузере благодаря горячей перезагрузке!

---

## 🔹 2. JSX и структура компонентов

### Что такое JSX?

JSX (JavaScript XML) - позволяет писать HTML внутри JavaScript.

```jsx
// Пример JSX
const element = <h1>Привет Мир!</h1>;

// Преобразуется в JavaScript:
const element = React.createElement('h1', null, 'Привет Мир!');
```

### Правила JSX:

1. Должен быть **один родительский элемент**
2. Используйте **className** (не class)
3. Используйте **CamelCase**
4. **Self-closing теги** обязательны

```jsx
// Правильный JSX
function App() {
  return (
    <div>
      <h1 className="title">Заголовок</h1>
      <img src="image.jpg" alt="Изображение" />
    </div>
  );
}
```

### React Fragment:

```jsx
// Использование Fragment
function App() {
  return (
    <React.Fragment>
      <h1>Заголовок</h1>
      <p>Текст</p>
    </React.Fragment>
  );
}

// Короткая запись
function App() {
  return (
    <>
      <h1>Заголовок</h1>
      <p>Текст</p>
    </>
  );
}
```

---

## 🔹 3. Props и State

### Props (Properties)

Props - это параметры, передаваемые компонентам. Неизменяемы (immutable).

```jsx
// Родительский компонент
function App() {
  return (
    <div>
      <Welcome name="Алексей" age={25} />
      <Welcome name="Анна" age={22} />
    </div>
  );
}

// Дочерний компонент
function Welcome(props) {
  return (
    <div>
      <h1>Привет {props.name}</h1>
      <p>Возраст: {props.age}</p>
    </div>
  );
}

// С destructuring
function Welcome({ name, age }) {
  return (
    <div>
      <h1>Привет {name}</h1>
      <p>Возраст: {age}</p>
    </div>
  );
}
```

### Default Props:

```jsx
function Welcome({ name = "Гость", age = 0 }) {
  return (
    <div>
      <h1>Привет {name}</h1>
      <p>Возраст: {age}</p>
    </div>
  );
}
```

### State

State - внутреннее состояние компонента. Может изменяться.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Увеличить
      </button>
    </div>
  );
}
```

---

## 🔹 4. Хуки (Hooks)

### useState Hook

Для использования state в функциональных компонентах.

```jsx
import { useState } from 'react';

function Example() {
  // Объявление state
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Array state
  const [items, setItems] = useState([]);

  // Object state
  const [user, setUser] = useState({
    name: '',
    email: ''
  });

  const updateUser = () => {
    setUser(prevUser => ({
      ...prevUser,
      name: 'Новое имя'
    }));
  };

  return (
    <div>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <p>Имя: {name}</p>
    </div>
  );
}
```

### useEffect Hook

Для побочных эффектов (API вызовы, подписки, изменения DOM).

```jsx
import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // Выполняется при монтировании компонента
  useEffect(() => {
    console.log('Компонент загружен');
  }, []); // Пустой массив - выполняется только один раз

  // Выполняется при изменении count
  useEffect(() => {
    document.title = `Счетчик: ${count}`;
  }, [count]); // count в зависимостях

  // Выполняется при каждом рендере
  useEffect(() => {
    console.log('Выполняется при каждом рендере');
  }); // Нет массива зависимостей

  // Cleanup функция
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Таймер работает');
    }, 1000);

    // Очистка
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Увеличить
      </button>
    </div>
  );
}
```

### useRef Hook

Для прямого доступа к DOM элементам и сохранения значений.

```jsx
import { useRef, useEffect } from 'react';

function Example() {
  const inputRef = useRef(null);
  const countRef = useRef(0);

  useEffect(() => {
    // Установить фокус на input
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    countRef.current += 1;
    console.log('Количество кликов:', countRef.current);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>
        Нажми
      </button>
    </div>
  );
}
```

---

## 🔹 5. Контролируемые формы

### Контролируемые компоненты

Значение элементов формы управляется React state.

```jsx
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    gender: '',
    isSubscribed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные формы:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Имя:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Сообщение:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
        />
      </div>

      <div>
        <label>Пол:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Выберите</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="isSubscribed"
            checked={formData.isSubscribed}
            onChange={handleChange}
          />
          Подписаться на новости
        </label>
      </div>

      <button type="submit">Отправить</button>
    </form>
  );
}
```

---

## 🔹 6. Жизненный цикл компонента

### Функциональные компоненты (с хуками)

```jsx
import { useState, useEffect } from 'react';

function LifecycleExample() {
  const [count, setCount] = useState(0);

  // componentDidMount
  useEffect(() => {
    console.log('Компонент смонтирован');
    
    // componentWillUnmount
    return () => {
      console.log('Компонент размонтирован');
    };
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log('Count изменился:', count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Увеличить
      </button>
    </div>
  );
}
```

### Классовые компоненты (традиционный способ)

```jsx
import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor выполнен');
  }

  componentDidMount() {
    console.log('Компонент смонтирован');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Count изменился:', this.state.count);
    }
  }

  componentWillUnmount() {
    console.log('Компонент будет размонтирован');
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Увеличить
        </button>
      </div>
    );
  }
}
```

---

## 🔹 7. To-Do List приложение - Практическое задание

### Полный компонент To-Do List:

```jsx
import React, { useState, useEffect, useRef } from 'react';
import './TodoApp.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed
  const inputRef = useRef(null);

  // Загрузить данные из localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Записать в localStorage при изменении todos
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Установить фокус на input при монтировании компонента
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Добавить новое todo
  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toLocaleString()
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
      inputRef.current.focus();
    }
  };

  // Удалить todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Изменить состояние todo
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  // Редактировать todo
  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, text: newText }
        : todo
    ));
  };

  // Очистить завершенные todo
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Выбрать/снять выбор со всех
  const toggleAll = () => {
    const allCompleted = todos.every(todo => todo.completed);
    setTodos(todos.map(todo => ({
      ...todo,
      completed: !allCompleted
    })));
  };

  // Показать todo согласно фильтру
  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  // Статистика
  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="todo-app">
      <h1>📝 To-Do List</h1>
      
      {/* Форма добавления todo */}
      <form onSubmit={addTodo} className="add-form">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Добавить новую задачу..."
          className="add-input"
        />
        <button type="submit" className="add-button">
          ➕ Добавить
        </button>
      </form>

      {/* Статистика */}
      {todos.length > 0 && (
        <div className="stats">
          <span>Всего: {todos.length}</span>
          <span>Активных: {activeCount}</span>
          <span>Завершенных: {completedCount}</span>
        </div>
      )}

      {/* Операции */}
      {todos.length > 0 && (
        <div className="actions">
          <button 
            onClick={toggleAll}
            className="toggle-all-btn"
          >
            {todos.every(todo => todo.completed) ? '🔲' : '☑️'} 
            Выбрать все
          </button>
          
          {completedCount > 0 && (
            <button 
              onClick={clearCompleted}
              className="clear-completed-btn"
            >
              🗑️ Удалить завершенные
            </button>
          )}
        </div>
      )}

      {/* Кнопки фильтров */}
      <div className="filters">
        <button 
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          Все
        </button>
        <button 
          onClick={() => setFilter('active')}
          className={filter === 'active' ? 'active' : ''}
        >
          Активные
        </button>
        <button 
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'active' : ''}
        >
          Завершенные
        </button>
      </div>

      {/* Список todo */}
      <div className="todo-list">
        {filteredTodos.length === 0 ? (
          <p className="empty-message">
            {filter === 'all' 
              ? 'Пока нет задач 🤷‍♂️'
              : filter === 'active'
              ? 'Нет активных задач ✅'
              : 'Нет завершенных задач 📝'
            }
          </p>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}

// Отдельный компонент Todo Item
function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const editInputRef = useRef(null);

  // Установить фокус на input при переходе в режим редактирования
  useEffect(() => {
    if (isEditing) {
      editInputRef.current.focus();
    }
  }, [isEditing]);

  const handleEdit = () => {
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      
      {isEditing ? (
        <input
          ref={editInputRef}
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={handleKeyDown}
          className="edit-input"
        />
      ) : (
        <span 
          className="todo-text"
          onDoubleClick={() => setIsEditing(true)}
          title="Дважды кликните для редактирования"
        >
          {todo.text}
        </span>
      )}
      
      <div className="todo-actions">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="edit-btn"
          title="Редактировать"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="delete-btn"
          title="Удалить"
        >
          🗑️
        </button>
      </div>
      
      <small className="todo-date">{todo.createdAt}</small>
    </div>
  );
}

export default TodoApp;
```

### CSS стили (TodoApp.css):

```css
.todo-app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.todo-app h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.add-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.add-input {
  flex: 1;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 5px;
  outline: none;
}

.add-input:focus {
  border-color: #007bff;
}

.add-button {
  padding: 12px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.add-button:hover {
  background: #0056b3;
}

.stats {
  display: flex;
  justify-content: space-between;
  background: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 14px;
}

.actions {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.toggle-all-btn, .clear-completed-btn {
  padding: 8px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: white;
  cursor: pointer;
}

.toggle-all-btn:hover, .clear-completed-btn:hover {
  background: #f8f9fa;
}

.filters {
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
  justify-content: center;
}

.filters button {
  padding: 8px 15px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 5px;
}

.filters button.active {
  background: #007bff;
  color: white;
}

.filters button:hover {
  background: #f8f9fa;
}

.filters button.active:hover {
  background: #0056b3;
}

.todo-list {
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
  gap: 10px;
}

.todo-item:last-child {
  border-bottom: none;
}

.todo-item.completed {
  background: #f8f9fa;
  opacity: 0.7;
}

.todo-checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.todo-text {
  flex: 1;
  cursor: pointer;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #666;
}

.edit-input {
  flex: 1;
  padding: 5px;
  border: 1px solid #007bff;
  border-radius: 3px;
  outline: none;
}

.todo-actions {
  display: flex;
  gap: 5px;
}

.edit-btn, .delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
}

.edit-btn:hover, .delete-btn:hover {
  opacity: 0.7;
}

.todo-date {
  font-size: 11px;
  color: #999;
  white-space: nowrap;
}

.empty-message {
  text-align: center;
  padding: 40px;
  color: #666;
  font-style: italic;
}

/* Адаптивность */
@media (max-width: 768px) {
  .todo-app {
    padding: 10px;
  }
  
  .add-form {
    flex-direction: column;
  }
  
  .stats {
    flex-direction: column;
    gap: 5px;
  }
  
  .todo-item {
    flex-wrap: wrap;
  }
  
  .todo-date {
    order: 1;
    width: 100%;
    margin-top: 5px;
  }
}
```

---

## 🔹 8. Дополнительная информация

### Обработка событий:

```jsx
function Button() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('Button clicked');
  };

  const handleMouseEnter = () => {
    console.log('Mouse entered');
  };

  return (
    <button 
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      Нажми
    </button>
  );
}
```

### Условный рендеринг:

```jsx
function ConditionalExample({ isLoggedIn, user }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Добро пожаловать, {user.name}!</h1>
      ) : (
        <h1>Пожалуйста, войдите в систему</h1>
      )}
      
      {isLoggedIn && <p>Ваш личный кабинет</p>}
      
      {!isLoggedIn && <button>Войти</button>}
    </div>
  );
}
```

### Рендеринг списков:

```jsx
function ListExample() {
  const items = [
    { id: 1, name: 'Яблоко', price: 2 },
    { id: 2, name: 'Банан', price: 3 },
    { id: 3, name: 'Апельсин', price: 4 }
  ];

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name} - {item.price} руб
        </li>
      ))}
    </ul>
  );
}
```

### Оптимизация производительности:

```jsx
import { memo, useMemo, useCallback } from 'react';

// React.memo - уменьшает re-render компонента
const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  return <div>{data}</div>;
});

// useMemo - кэширует тяжелые вычисления
function OptimizedComponent({ items }) {
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  return <div>Общая стоимость: {expensiveValue}</div>;
}

// useCallback - кэширует функции
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
```

Этот конспект охватывает основные концепции React.js и вы можете проверить свои знания с помощью практического приложения To-Do List. Изучайте каждую часть постепенно и много практикуйтесь!