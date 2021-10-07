// МОДУЛЬ 3 ОБЪЕКТЫ
//*************** задача 3 - 1

// let message = '';
// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };

// user.mood = 'happy';
// user['full time'] = true;
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//   message += `${key} : ${user[key]}\n`;

// }
// console.log(message);

// const entries = Object.entries(user);
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];
//   message = `${key}: ${value}\n`;
//   console.log(message);
// }

// const keys = Object.keys(user);
// for (const key in user) {
//   message = `${key} : ${user[key]}\n`;
//   console.log(message);
// }

//*************** задача 3-2 Напиши функцию countProps(obj),
// которая возвращает число - количество свойств в объекте.
// Циклы не должны использоваться

// // const countProps = function (obj) {
//   'use strict';
// let total = Object.values(obj).length;
//   return total;
// };

// const countProps = function (obj) {
//   'use strict';
//   // Write code under this line
//   let total = 0;
//   const keys = Object.keys(obj);
//   total = keys.length;
//   return total;
// };

//  console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({a:1, b:1, c:1, d:1, e:1})); // 5

//*************** задача 3-3

// const findBestEmployee = function (employees) {
//   const work = Object.values(employees);
//   const worker = Object.keys(employees);
//   let bestWork = work[0];
//   let bestWorker = [''];
//   let index = 0;
//   for (let i = 0; i < work.length; i += 1) {
//     if (work[i] > bestWork) {
//       bestWork = work[i];
//       index = i;
//     }
//   }
//   if (worker.length === 0) {
//     return '';
//   }

// //   bestWorker = worker[index];
// //   return bestWorker;
// // };

// const findBestEmployee = function (employees) {
//   let bestWork = 0;
//   let bestEmployee = '';
//   for (const developer in employees) {
//     if (employees[developer] > bestWork) {
//       bestWork = employees[developer];
//       bestEmployee = developer;
//     }
//   }
//   return bestEmployee;
// };

// // const empty = {};
// // console.log(findBestEmployee(empty));
// // // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// console.log(findBestEmployee(supports));

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };
// console.log(findBestEmployee(sellers));

//*************** задача 3-4
// const countTotalSalary = function(employees) {
//   const values = Object.values(employees);
//   let totalSalary = 0;
//   for (const value of values) {
//     totalSalary += value;
//   }
//   return totalSalary;
// };

// // Объекты и ожидаемый результат
// const developers = {
//     mango: 300,
//     poly: 250,
//     alfred: 450,
// };
// console.log(countTotalSalary(developers));

// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// }
// console.log(countTotalSalary(supports));

//*************** задача 3-5
// Напиши функцию getAllPropValues(arr, prop),
// которая получает массив объектов и имя свойства.
// Функция возвращает массив значений определенного свойства
// prop из каждого объекта в массиве.
// Используй метод push для добавления значения в массив и оператор
//  in для проверки наличия свойства в объекте.

// function getAllPropValues(array, prop) {
//   const newArray = [];
//   for (const item of array) {
//     if (prop in item) {
//       newArray.push(item[prop]);
//     }
//   }
//   return newArray;
// }
// // Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, 'name'));
// // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity'));
// // [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, 'category'));
// //  []

//*************** задача 3-6
// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта(значение свойства
// name).Возвращает общую стоимость продукта(цена умноженная на
// количество).
// Вызовы функции для проверки работоспособности твоей реализации.

// function calculateTotalPrice(array, prop) {
//   let total = 0;
//   for (const item of array) {
//     if (prop === item.name) {
//       total += item.price * item.quantity;
//     }
//   }
//   return total;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(calculateTotalPrice(products, 'Радар'));
// 9080;
// console.log(calculateTotalPrice(products, 'Сканер'));
// // 10200;

// console.log(calculateTotalPrice(products, 'Захват'));
// // 2400;

// console.log(calculateTotalPrice(products, 'Дроид'));
// // 2800;

// calculateTotalPrice(products, 'Радар');
// 9080

// calculateTotalPrice(products, 'Сканер')); // 10200

// calculateTotalPrice(products, 'Захват')); // 2400

// calculateTotalPrice(products, 'Дроид')); // 280



