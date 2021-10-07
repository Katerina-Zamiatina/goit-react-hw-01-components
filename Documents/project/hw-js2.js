'use strict';

// задача 2-1
// const getItemsString = function (array) {
//     'use strict';
//     let result = '';
//     for (let i = 0; i < array.length; i += 1) {
//         result += `${i + 1} - ${array[i]}\n`;
//     };
//     return result;
// }
// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
// console.log(getItemsString([5, 10, 15]));

// задача 2-2
// const calculateEngravingPrice = (message = "", pricePerWord = 0) => {
//     pricePerWord;
//     return message.split(' ').length * pricePerWord;
// }

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

// console.log(calculateEngravingPrice('Uno', 100)); // 100

// задача 2-3
// function findLongestWord(string = "") {
//     const word = string.split(' ');
//     let biggestLength = 0;
//     let longestWord = '';
//     for (let i = 0; i < word.length; i +=1) {
//         if (word[i].length > biggestLength) {
//             biggestLength = word[i].length;
//           longestWord = word[i];
//         }
//     }
//     return longestWord;
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// // 'jumped'

// console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'

// задача 2-4
// function formatString (string, maxLength = 40) {
//   // Write code under this line

//     return string = string.length > maxLength ? string.slice(0, maxLength) + '...' : string;
// }

//  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// // 'Vestibulum facilisis, purus ne...'

// задача 2-5

// function checkForSpam (str) {
//   'use strict';
//   // Write code under this line
//     return (str =
//       str.toLowerCase().includes('spam') ||
//       str.toLowerCase().includes('sale') ||
//       false);
// }

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// задача 2-6
// function mapArray(array) {
//   'use strict';
//   const numbers = new Array(array.length);
//   for(let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//       numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));
// // [-20, 0, 20]

// console.log(mapArray([-2.5, 0, 2.5]));
// // [-25, 0, 25]

// задача 2-7
// function filterArray(array) {
//   'use strict';
//   const numbers = [];
//     for (let i = 0; i < array.length; i += 1) {
//         if (Number.isFinite(array[i]) === true) {
//             numbers.push(array[i]);
//         }
//     }
//   return numbers;
// };

// console.log(filterArray([-2, 0, 2]));
// // [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// // [1]

// console.log(filterArray([0, -0, 100, '100']));
// // [0, 0, 100]

// console.log(filterArray([undefined, false, null, [], 1]));
// // [1]

// console.log(filterArray([{}, () => {}, 2]));
// // [2]

// 2-8
// function reduceArray(array) {
//   let total = 0;
//     for (let i = 0; i < array.length; i += 1) {
//         total += array[i];
//     }

//   return total;
// };

// console.log(reduceArray([1, 2, 3]));
// // 6

// console.log(reduceArray([-2, 0, 2]));
// // 0

// console.log(reduceArray([1, 2, 2.5]));
// // 5.5

// 2-9
// function isLoginValid(login, min = 4, max = 16) {
//   if (login.length >= min && login.length <= max) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isLoginUnique(allLogins, login) {
//   if (allLogins.includes(login)) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function addLogin(allLogins, login) {
//   'use strict';
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;

//   if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
//     allLogins.push(login);
//     message = SUCCESS;
//     return message;
//   }

//   if (!isLoginValid(login)) {
//     return (message = ERROR);
//   }

//   if (!isLoginUnique(allLogins, login)) {
//     return (message = REFUSAL);
//   }
// }

// else if (!isLoginUnique(allLogins, login)) {
//         return (message = REFUSAL);
//     } else {
//         logins.push(login);
//         return (message = SUCCESS);
//   }
// if (isLoginValid(login)) {
//   isLoginUnique(allLogins, login);
//   allLogins.push(login);
//   message = SUCCESS;
//   return message;
//   } else if (!isLoginUnique(allLogins, login)) {
//     return (message = REFUSAL);
//   } else isLoginValid(login);
//   {
//     if (login.length < min && login.length > max) {
//       return (message = ERROR);
//     }
//   }

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// console.log(addLogin(logins, 'Ajax'));
// // 'Логин успешно добавлен!'

//   console.log(addLogin(logins, 'robotGoogles'));
// // 'Такой логин уже используется!'
// console.log(logins);
// // console.log(addLogin(logins, 'Zod'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, 'jqueryisextremelyfast'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'
