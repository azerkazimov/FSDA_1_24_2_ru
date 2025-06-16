const arr = [1, 4, 2, , 6, 7, 12, 15, 17, 14, 11];

// ==== for ====

// const getSpecNum = (num) => {
//     let specNum = [];

//     for (let i = 0; i < num.length; i++) {
//         if (num[i] % 3 === 0) {
//             specNum.push(num[i]);
//         }
//     }

//     return specNum;
// };

// =================
// ==== forEach ====
// =================

// const getSpecNum = (num) => {
//   let specNum = [];

//   function chechNum(number) {
//     if (number % 3 === 0) {
//       specNum.push(number);
//     }
//   }

//   num.forEach(chechNum);

//   return specNum;
// };

// const getSpecNum = (num) => {
//   let specNum = [];

//   num.forEach(function chechNum(number) {
//     if (number % 3 === 0) {
//       specNum.push(number);
//     }
//   });

//   return specNum;
// };

// const getSpecNum = (num) => {
//   let specNum = [];

//   num.forEach((number) => (number % 3 === 0 ? specNum.push(number) : ""));

//   return specNum;
// };

// =================
//  ==== filter ====
// =================

// const getSpecNum = (num) => {
//   let specNum = [];

//   const result = num.filter((number) => (number % 3 === 0 ? true : false));

//   return result;
// };

// const getSpecNum = (num) => {
//   return num.filter((number) => (number % 3 === 0));
// };
const getSpecNum = (num) => num.filter((number) => number % 3 === 0);
getSpecNum(arr);

arr.filter((num) => num % 3 === 0);

// ==============================
// ===== sort & unsort array ====
// ==============================

const sortArray = (num) => {
  //   const sortedArray = num.sort(); // мутирующий нет необходимости присваивать к переменной
  //    num.sort(); // сортирует по ASCII table

  //   function compare(a, b) {
  //     if (a > b) {
  //       return 1;
  //     }
  //     return -1;
  //   }

  //   num.sort(compare);

  num.sort((a, b) => a > b);
  num.sort((a, b) => a - b);

  //   в обратном порядке
  num.sort((a, b) => b - a);

  return num; // возвращает исходный массив
};

const sortArray1 = (num) => {
  const copy = num.slice(); // копирует массив

  copy.sort((a, b) => a > b);
  copy.sort((a, b) => a - b);

  //   в обратном порядке
  copy.sort((a, b) => b - a);

  return copy; // возвращает новый массив
};

const sortArray2 = (num) => {
  //   const copy = num.slice(); // можно не использовать промежкточение переменные

  num.slice().sort((a, b) => a > b);
  num.slice().sort((a, b) => a - b);

  //   в обратном порядке
  num.slice().sort((a, b) => b - a);

  return num; // возвращает новый массив
};

// ==========================================
// ==== Многомерные массивы в JavaScript ====
// ==========================================

// const arrM = [1, [2, 3, 4], 5, [6, 7]]  => [1,2,3,4,5,6,7];
// use concat
const arrM = [1, [2, 3, 4], 5, [6, 7]];
// const flatArray = (arr) => {
//     const flatArray = arr.reduce((acc, elem) => {
//         return acc.concat(elem)
//     }, [])
//     return flatArray
// };
// flatArray(arrM)

// более оптимально
const flatArray = (arr) => {
  return arr.reduce((acc, elem) => acc.concat(elem), []);
};
flatArray(arrM);

// [1, 2, 3, 4] => 10;
const redArr = [1, 2, 3, 4];

redArr.reduce(function (acc, num) {
  return acc + num;
});
redArr.reduce((acc, num) => acc + num);

// ==== flat ====

const flatArr = (arr) => {
  return arr.flat();
};
flatArr(arrM);

// failed Studets

const allStudents = ["Anna", "Tom", "Bob", "Kate"];
const failedStudents = ["Tom", "Bob"];

// use indexOf
const getPassedStudents = (allStudents, failedStudents) => {
  const passedStudents = allStudents.filter(
    (name) => failedStudents.indexOf(name) === -1
  );
  return passedStudents;
};
getPassedStudents(allStudents, failedStudents);

const getPassedStudents2 = (allStudents, failedStudents) => {
  const passedStudents = allStudents.filter((name) =>
    failedStudents.includes(name)
  );
  return passedStudents;
};
getPassedStudents2(allStudents, failedStudents);

// use map to add message body
const getPassedStudentsMessage = (allStudents, failedStudents) => {
  const passedStudents = allStudents.filter(
    (name) => !failedStudents.includes(name)
  );
  const message = passedStudents.map((name) => `Good job ${name}`);
  return message;
};
getPassedStudentsMessage(allStudents, failedStudents);

const getPassedStudentsMessageOptimize = (allStudents, failedStudents) =>
  allStudents
    .filter((name) => !failedStudents.includes(name))
    .map((name) => `Good job ${name}`);

getPassedStudentsMessageOptimize(allStudents, failedStudents);
