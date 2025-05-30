1) Выбор элементов массива по заданному критерию (фильтрация)

**Условие**

Создайте функцию getSpecialNumbers, которая будет принимать массив чисел и возвращать отфильтрованный массив

**Задание:**

    - Функция должна называться `getSpecialNumbers`
    - Функция должна отбросить все элементы исходного массива, которые не кратны 3, и вернуть массив из элементов кратных 3-м
    - Исходный массив не должен поменяться

2) Отсортируйте элементы массива по убыванию

**Условие**

Создайте функцию sortDesc, которая будет сортировать перданный массив чисел по убыванию

**Задание:**

    - Функция должна называться `sortDesc`
    - Функция должна отсортировать исходный массив в порядке убывания
    - Исходный массив не должен измениться

3) Плоский массив

**Условие**

Создайте функцию flatArray, которая будет принимать массив, элементами которого могут быть одномерные массивы и преобразует его в плоский массив

**Задание:**

    - Функция должна называться `flatArray`
    - Исходный массив может содержать массивы в качестве элементов
    - Функция должна создать плоский массив из исходного массива
    - Исходный массив не должен измениться

4) Деструктуризация массива и спред прератор

**Условие**

Создайте функцию getMessagesForBestStudents, которая будет генерировать сообщения для студентов, которые сдали экзамен

**Задание:**

    - Функция должна называться `getMessagesForBestStudents`
    - Функция должна принимать первым аргументом массив имен всей группы, вторым аргументом массив имен студентов, которые не сдали экзамен (оба массива содержат строки - имена в качестве элементов. Второй массив содержит часть имен из первого массива)
    - Функция должна выбрать имена, которые есть в первом массиве, но нет во втором и вернуть новый массив, элементы которого - строки, которые содержат сообщение вида 'Good job, Ann'. Где Ann - это имя, которое есть в первом массиве, но нет во втором
    - Исходные массивы не должны меняться
    - Условный пример работы ф-ции: ['a', 'b', 'c', 'd'], ['b', 'd'] -> ['Good job, a', 'Good job, c'] 

5) 


5.1. **Найти все простые числа в массиве**  
    _(Создай функцию isPrime и отфильтруй массив)_
    
5.2. **Транспонировать двумерный массив**
    
    ```js
    const matrix = [
      [1, 2],
      [3, 4],
      [5, 6]
    ];
    // => [[1, 3, 5], [2, 4, 6]]
    ```
    
5.3. **Уникальные значения**  
    Убрать дубликаты из массива.  
    _(Подсказка: `new Set()` или `filter` + `indexOf`)_
    
5.4. **Сгруппировать студентов по первой букве имени**  
    Вернуть объект:
    
    ```js
    {
      A: ["Anna"],
      T: ["Tom"],
      ...
    }
    ```
    
5.5. **Найти число, встречающееся чаще всего**  
    Верни значение и количество повторений.  
    _(Подсказка: использовать объект-счётчик)_
    
5.6. **Создать массив квадратов только нечётных чисел**  
    Используй `filter()` и `map()` вместе.
    
5.7. **Разделить массив на подмассивы по N элементов**  
    Например, массив из 10 элементов разделить по 3 → `[[1,2,3],[4,5,6],[7,8,9],[10]]`
    
5.8. **Проверить, все ли элементы массива — строки**  
    Используй `every()`.
    
5.9. **Форматировать студентов в строку**  
    Преобразовать `["Anna", "Tom"]` → `"Students: Anna, Tom"`  
    _(Использовать `join()`)_
    
5.10. **Вычислить среднее значение массива**  
    Использовать `reduce()` и `length`.
    

---



