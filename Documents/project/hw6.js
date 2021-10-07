// ***************
// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUserNames = array => array.map(({ name }) => name);
// // console.log(getUserNames(users));

// // ***************

// const getUsersWithEyeColor = (array, color) =>
//   array.filter(({ eyeColor }) => eyeColor === color);
// // console.log(getUsersWithEyeColor(users, 'blue'));

// // ***************

// const getUsersWithGender = (array, gender) =>
//   array
//     .filter(({ gender: newGender }) => newGender === gender)
//     .map(({ name }) => name);
// // console.log(getUsersWithGender(users, 'male'));

// // **********

// const getInactiveUsers = array => array.filter(({ isActive }) => !isActive);

// // *******

// const getUserWithEmail = (array, mail) =>
//   array.find(({ email }) => email === mail);
// // console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));

// // *******
// const getUsersWithAge = (array, min, max) =>
//   array
//     .filter(({ age }) => age > min && age < max)
//     .map(({ name, email }) => ({ name, email }));

// // console.log(getUsersWithAge(users, 20, 30));

// // *********

// const calculateTotalBalance = array =>
//   array.reduce((totalBalance, { balance }) => totalBalance + balance, 0);

// // console.log(calculateTotalBalance(users));

// // **********

// const getUsersWithFriend = (array, friendName) =>
//   array
//     .filter(({ friends }) => friends.includes(friendName))
//     .map(({ name }) => name);

// // console.log(getUsersWithFriend(users, 'Briana Decker'));
// // console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// // **********

// const getNamesSortedByFriendsCount = array =>
//   [...array]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(({ name }) => name);

// console.log(getNamesSortedByFriendsCount(users));
// eslint-disable-next-line max-len
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// **********

// const getSortedUniqueSkills = array =>
//   [...array]
//     .reduce((allSkills, { skills }) => allSkills.concat(skills), [])
//     .filter((skills, indx, array) => array.indexOf(skills) === indx)
//     .sort();

// console.log(getSortedUniqueSkills(users));

// eslint-disable-next-line no-unused-vars
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// }

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
//   firstArray.forEach((el) => {
//       if (secondArray.includes(el)) {
//           commonElements.push(el);
//       }
//   })
//     for (let i = 0; i < firstArray.length; i += 1) {
//       if (secondArray.includes(firstArray[i])) {
//         commonElements.push(firstArray[i]);
//       }
//     }
//     return commonElements;
//     // Пиши код выше этой строки
//   }
// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
//     orderedItems.forEach((item) => {totalPrice += item;})

//     return totalPrice;
//   }
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     // Пиши код выше этой строки
//     return filteredNumbers;
//  }
// function changeEven(numbers, value) {
//     const newArray = [];
//     numbers.forEach(num => {
//         if (num % 2 === 0) {
//           num += value;
//         }
//       newArray.push(num);
//       })
//     return newArray;
// }
