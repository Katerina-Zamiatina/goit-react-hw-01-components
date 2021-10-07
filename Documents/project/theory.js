// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// // Перебор ключей объекта hotel
// for (const key in hotel) {
//   console.log('Key: ', key);
// }

// for (const key in hotel) {
//   console.log('Value: ', hotel[key]);
// }

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
// const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
// console.log(Object.entries(hotel)); // [Array(2), Array(2), Array(2)]

// const entries = Object.entries(hotel);

// /*
//  * На каждой итерации по entries выберем первый элемент подмассива (ключ)
//  * в переменную key, а второй (значение) в переменную value
//  */
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20

// задачки

// const arr = ['a','b','c','d'];
// const str = `${arr[0]} + ${arr[1]}, ${arr[2]} + ${arr[3]}`;
// console.log(arr);
// console.log(arr[0], arr[1], arr[2]);
// console.log(str);
// const arrA = [2, 5, 3, 9];
// let result = (arrA[0] * arrA[1]) + (arrA[2] * arrA[3]);
// console.log(result);

// const obj = { 'a': 1, 'b': 2, 'c': 3 };
// console.log(obj['c']);
// console.log(obj.c);

// const obj = { Коля: '1000', Вася: '500', Петя: '200' };
// console.log(obj.Коля, obj.Петя);

// const obj = {
//   1: 'monday',
//   2: 'tuesday',
//   3: 'wednesday',
//   4: 'thursday',
//   5: 'friday',
//   6: 'saturday',
//   7: 'sunday',
// };
// console.log(obj[3]);

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];

// // Вертикальная запись удобнее для чтения
// const updatedHouses = [
//   ...houses.slice(0, 1),
//   'Frey of the Crossing',
//   ...houses.slice(2),
// ];

// console.log(updatedHouses);
// ['Arryn', 'Frey of the Crossing', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell']

// const add = function (...args) {
//   console.log(args); // массив всех аргументов
// };
// add(1, 2, 3);
// add(1, 2, 3, 4, 5);

// const add = function (value, ...args) {
//   console.log(value); // первый аргумент
//   console.log(args); // массив всех остальных аргументов
// };
// add('ghbdtn', 'kdkkd', 2, 3);
// add(15, 1, 2, 3, 4, 5);

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;
// console.log(red, green, blue);
// // Red: 200, Green: 255, Blue: 100

// const rgb = [200, 100, 255];

// const [red, green, blue, alfa = 0.3] = rgb;

// console.log(red, green, blue, alfa);
// // Red: 200, Green: 100, Blue: 255, Alfa: 0.3

// const repeatLog = function (n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// };

// repeatLog(5);

// const printValue = function(value) {
//   console.log(value);
// };

// const prettyPrint = function(value) {
//   console.log('Logging value: ', value);
// };

// const repeat = function(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2

// const repeat = function(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labels = [];

// repeat(5, value => {
//   labels.push(`Label ${value + 1}`);
// });

// console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]


// const filter = function(array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.table(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.table(fruitsWithQuantity); // массив с объектами apples и grapes


// const bar = function () {
//   console.log('bar');
// };

// const baz = function () {
//   console.log('baz');
// };

// const foo = function () {
//   console.log('foo');
//   bar();
//   baz();
// };

// foo();


// const createCounter = function() {
//   /*
//    * Локальная переменная privateValue доступна только в замыкании.
//    * Получить к ней доступ во внешнем коде невозможно.
//    */
//   let privateValue = 0;

//   const increment = function() {
//     privateValue += 1;
//     console.log(privateValue);
//   };

//   return {
//     increment,
//   };
// };

// const counterA = createCounter();
// counterA.increment(); // 1
// counterA.increment(); // 2

// const counterB = createCounter();
// counterB.increment(); // 1
// counterB.increment(); // 2
// counterB.increment(); // 3
// console.dir(counterA.increment);
// console.dir(counterB.increment);

// function fn() {
//   console.log(this);
// }

// fn(); // window без "use strict" и udefined с "use strict"

// const petya = {
//   name: 'Petya',
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.name);
//   },
// };

// petya.showThis(); // {name: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'



// function showThis() {
//   console.log('this in showThis: ', this);
// }

// // Вызываем в глобальном контексте
// showThis();
// // this in showThis: Window

// const user = { name: 'Mango' };

// // /*
// //  * Записываем ссылку на функцию в свойство объекта
// //  * Обратите внимание, что это не вызов - нет ()
// //  */
// user.showContext = showThis;

// // /*
// //  * Вызываем функцию в контексте объекта
// //  * this будет указывать на текущий объект, в контексте
// //  * которого осуществляется вызов, а не на глобальный объект.
// //  */

// user.showContext();
// // this in showThis: {name: "Mango", showContext: ƒ}


// const showThis = () => {
//   console.log('this in showThis: ', this);
// };

// showThis(); // this in showThis: window

// const user = { name: 'Mango' };
// user.showContext = showThis;

// user.showContext(); // this in showThis: window

// const hotel = {
//   name: 'Resort hotel',
//   showThis() {
//     const fn = () => {
//       /*
//        * Стрелки запоминают контекст во время объявления,
//        * из родительской области видимости
//        */
//       console.log('this in fn: ', this);
//     };

//     fn();
//     console.log('this in showThis: ', this);
//   },
// };

// hotel.showThis();
// // this in fn: {name: 'Resort hotel', showThis: ƒ}
// // this in showThis: {name: 'Resort hotel',showThis: ƒ}

// const greet = function() {
//   return `Wellcome to ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };

// console.log(greet.call(hotel)); // "Wellcome to Resort Hotel!"
// console.log(greet.apply(hotel)); // "Wellcome to Resort Hotel!"

// const greet = function(guest, stars) {
//   return `${guest}, welcome to ${stars}-star ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };
// const motel = { name: 'Sunlight Motel' };

// console.log(greet.call(hotel, 'Mango', 5));
// // "Mango, wellcome to 5-star Resort Hotel!"

// console.log(greet.call(motel, 'Poly', 4));
// // "Poly, wellcome to 4-star Sunlight Motel!"

