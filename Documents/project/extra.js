// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
//     switch (password) {
//         case null:
//             message = 'Отменено пользователем!';
//             break;
//         case ADMIN_PASSWORD:
//             message = 'Добро пожаловать!';
//             break;
//         default:
//             message = 'Доступ запрещён, неверный пароль!';
//     }
//     return message;
// }
// console.log(checkPassword('jqueryismyjam'));

// function getShippingCost(country) {
//   let message;
//   // Пиши код ниже этой строки
//   let price;
//   switch (country) {
//     case 'Китай':
//       price = 100;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     case 'Чили':
//       price = 250;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     case 'Австралия':
//       price = 170;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     case 'Ямайка':
//       price = 120;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     default:
//       message = 'Извините, в вашу страну доставки нет';
//   }
//   // Пиши код выше этой строки
//   return message;
// }

// function getNameLength(name) {
//   const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку

//   return message;
// }

// const user = {
//   firstName: 'Ivan',
//   lastName: 'Test',
//   age: 16,
//   is18() {
//     return this.age < 18
//       ? `${this.firstName} нельзя`
//       : `${this.firstName} можно`;
//   },
//   setFullName(fullName) {
//     const arr = fullName.split(' ');
//     this.firstName = arr[0];
//     this.lastName = arr[1];
//     return;
//   },
// };
// console.log(user.setFullName('Alex Test2'));
// console.log(user.is18());

// const addIndex = (element, index) => element + index;
// const subIndex = (element, index) => element - index;
// function mapArray(array, cb) {
//   'use strict';
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     const element2 = array[i];
//     const index2 = i;
//     numbers[i] = cb(element2, index2);
//   }
//   return numbers;
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(mapArray(arr, addIndex));

// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log(this);
//   },
// };

// const fn = function (callback) {
//   callback();
// };

// fn(hotel.showThis.bind(hotel));

// class StringBuilder {
//   constructor(value) {
//     this._value = value;
//   }
//   get value() {
//     return this._value;
//   }
//   append(str) {
//     this._value = `${this._value}${str}`;
//     return str;
//   }
//   prepend(str) {
//     this._value = `${str}${this._value}`;
//     return this._value;
//   }
//   pad(str) {
//     this._value = `${this.prepend(str)}${this.append(str)}`;
//   }
// }

// function getSubstring(string, length) {

//   const substring = string.slice(0, length);

//   return substring;
// }

// function formatMessage(message, maxLength) {
//   let result;

//   result =
//     message.length <= maxLength ? message : (message.slice(0, maxLength) + '...');
//   return result;
// }

// console.log(formatMessage('Curabitur ligula sapien', 16));
// console.log(formatMessage('Curabitur ligula sapien', 23));
// console.log(formatMessage('Vestibulum facilisis purus nec', 20));
// console.log(formatMessage('Vestibulum facilisis purus nec', 30));
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));

// function checkForSpam(message) {
//   let result;
//   result =
//     message.toLowerCase().includes('spam') ||
//     message.toLowerCase().includes('sale')
//       ? true
//       : false;
//   return result;
// }

// function slugify(title) {
//     let words = title.toLowerCase().split(' ');
//     let slug = words.join('-')
//   return slug;
// }
// console.log(slugify('Массивы для новичков'));

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   }
//   return newArray;
// }
// console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));

// function numbersInRange(start, end) {
//   for (let i = start; i <= end; i += 1) {
//     console.log(i);
//   }
// }
// console.log(numbersInRange(3, 7));

// функция возвращает сумму всех чисел внутри целого числа
// первый вариант использую мат.формулу Карла Фридриха Гаусса const numSum = (n) => n * (n+1) / 2;
// function calculateTotal(number) {

//     return number * (number + 1) / 2;
// }

// второй вариант через цикл for
// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//       total = total + order[i];
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function findLongestWord(string) {
//   let array = string.split(' ');
//   let longestWord = array[0];
//   for (let i = 1; i < array.length - 1; i += 1) {
//     if (array[i].length > longestWord.length) {
//       longestWord = array[i];
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// function filterArray(numbers, value) {
//     const newNumbers = [];
//     for (const number of numbers) {
//         if (number > value) {
//             newNumbers.push(number)
//         }
//     }
//   return newNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function getCommonElements(array1, array2) {
//     let newArrray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//       if (array1.includes(array2[i])) {
//       newArrray.push(array2[i]);
//     }
//   }
// второй вариант
//   // for (const element of array1) {
//   //     if (array1.includes(element) & array2.includes(element)) {
//   //         newArrray.push(element);
//   //   }
//   // }
//   return newArrray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));

// function getEvenNumbers(start, end) {
//   let numbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       numbers.push(i);
//     }
//   }
//   return numbers;
// }

// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// function includes(array, value) {
//   for (const item of array) {
//     if (item === value) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'),
// );
// console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви'));

// *******
// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount = propCount + 1;
//       // propCount ++;
//       // propCount += 1;
//     }
//   }
//   return propCount;
// }
// console.log(countProps({ name: 'Mango', age: 2 }));
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });

// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1;
//   }
//   return propCount;
// }

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// *******

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
//   return null;
// }

// function getProductPrice(productName) {
//   let result = null;
//   products.find(
//     product => (result = product.name === productName ? product.price : result),
//   );
//   return result;
// }

// console.log(getProductPrice('Радар'));
// console.log(getProductPrice('Захват'));
// console.log(getProductPrice('Сканер'));
// console.log(getProductPrice('Дроид'));
// console.log(getProductPrice('Ldbkjuhfk'));

// ******
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const propValues = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       propsValues.push(product[propName]);
//     }
//   }
//   return propValues;
// }
// console.log(getAllPropValues('name'));

// ********
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let total = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//         total += product.price * product.quantity;
//     }
//   }
//   return total;
// }
// // console.log(calculateTotalPrice('Бластер'));
// console.log(calculateTotalPrice('Радар'));

// ********

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const { yesterday, today, tomorrow } = highTemperatures;
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { high: todayHigh, low: todayLow },
//     tomorrow: { high: tomorrowHigh, low: tomorrowLow },
//   } = forecast;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
//   const newData = { completed, category, priority, ...data };
//   return newData;
//   // Пиши код выше этой строки
// }

// console.log(makeTask({}));
// console.log(
//   makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }),
// );
// console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' }));
// console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }));

// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(12, 4, 11, 48));
// console.log(add(74, 11, 62, 46, 12, 36));

// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }

//   return total;
// }

// function findMatches(arr, ...args) {
//   console.log(arr, args);
//   const matches = [];
//   for (const arg of args) {
//     if (arr.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// const bookShelf = {
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`;
//   },
// };

// console.log();
// console.log(bookShelf.removeBook('Красный закат'));
// console.log(bookShelf.updateBook('Пески Дюны', 'Дюна'));

// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//     return this.books.splice(bookIndex, 1, newName);
//   },
// };

// console.log(bookShelf.updateBook('Последнее королевство', 'Дюна'));

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex, 1, newName);
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.removePotion('Дыхание дракона'));

// ********* Задача 41 модуль 3
// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     for (const potion of this.potions) {
//       if (potionName === potion) {
//         return `Зелье ${potionName} уже есть в инвентаре!`;
//       }
//     }
//     this.potions.push(potionName);
//     return this.potions;
//   },
// removePotion(potionName) {
//   for (let i = 0; i < this.potions.length; i += 1) {
//     const potion = this.potions[i];
//     potionName === potion.name
//       ? this.potions.splice(i, 1)
//       : console.log(`Зелья ${potionName} нет в инвентаре!`);
//   }
//   return console.log(this.potions)
// },
//   for (let i = 0; i < this.potions.length; i += 1) {
//     const potion = this.potions[i];
//     potionName === potion.name
//       ? this.potions.splice(i, 1)
//       : console.log(`Зелья ${potionName} нет в инвентаре!`);
//   }
//   return console.log(this.potions)
// },
// for (let element of this.potions) {
//   if (element.name===potionName) {
//   this.potions.splice(this.potions.indexOf(element),1);
//   }
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (oldName === potion.name) {
//         potion.name = newName;
//       }
//     }
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
// console.log(atTheOldToad.removePotion('Дыхание'));
// console.log(atTheOldToad.removePotion('Зелье скорости'));
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));

// ****** МОДУЛЬ 6

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING).map((book) => book.author)
//   .sort((authorA, authorB) => authorA.localeCompare(authorB));
// console.log(names);

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
//  ];

// const getNamesSortedByFriendCount = [...users]
//   .sort((friendsA, friendsB) => friendsA.friends.length - friendsB.friends.length)
//   .map((user) => user.name);
// const getSortedFriends = users
//   .flatMap((user) => user.friends)
//   .filter((friends, i, array) => array.indexOf(friends) === i)
//   .sort((a, b) => a.localeCompare(b));
// const getTotalBalanceByGender = users
//   .filter((user, gender) => user.gender === gender)
//   .reduce((total, { balance }) => total + balance, 0);




//   bodyRef.classList.add(`${Theme.LIGHT}`);
//   localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
//   const savedTheme = localStorage.getItem('theme');
  
//   if (savedTheme === JSON.stringify(Theme.DARK)) {
//   toDarkTheme()
//   }
  
//   function toDarkTheme() {
//     switcherRef.setAttribute('checked', 'true');
//     bodyRef.classList.replace(`${Theme.LIGHT}`, `${Theme.DARK}`);
//     localStorage.setItem('theme', JSON.stringify(Theme.DARK));
//   }
  
//   function toLigthTheme() {
//     switcherRef.removeAttribute('checked');
//     bodyRef.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`);
//     localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
//   }
  
//   function changeTheme() {
//     if(switcherRef.hasAttribute('checked')){
//       toLigthTheme()
//     }
//     toDarkTheme()
//   }
  
//   switcherRef.addEventListener('change', changeTheme);


function toCamelCase(str) {
    console.log(str.split(' '))
    return str
      .split('')
      .map(function (word, index) {
        if (index > 0) {
          return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
        }
        return word
      })
      .join('');
  }

  function toCamelCase(str) {
    console.log(str.split('_' || '-'));
    return str
      .split(' ')
      .map(function (word, index) {
        // If it is the first word make sure to lowercase all the chars.
        if (index > 0) {
          const newWord =
            word.charAt(0).toUpperCase() + word.slice(0).toLowerCase();
          console.log(newWord);
          return newWord;
        }
        return word;
      })
      .join('');
  }