// вебинар обьекты ************

// Работа с коллекцией: корзина товаров
// работа с моделью(данными)
// const cart = {
//   items: [
//     { name: 'apple', price: 50, quantity: 1 },
//     { name: 'lemon', price: 60, quantity: 1 },
//   ],
//   getItems() {
//     return this.items;
//   },

//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         console.log('такой продукт уже есть, увеличиваем кол-во');
//         item.quantity += 1;
//         return;
//       }
//     }
//     console.log('new product in cart');
//     product.quantity = 1;
//     this.items.push(product);
//   },

//   //  чтобы удалить нам нужен индекс поэтому цикл со счетчиком
//   remove(productName) {
//     for (let i = 0; i < this.items; i += 1) {
//       const item = this.items[i];
//       if (productName === item.name) {
//         // передаем индекс с какого насинать и сколько надо удалить
//         this.items.splice(i, 1);
//       }
//     }
//   },

//   clear() {
//     // this.items.length = 0; не самый лучший способ
//     // лучше использовать такой способ, просто записать пустой массив
//     this.items = [];
//   },

//   //
//   countTotalPrice() {
//     let total = 0;
//     for (const item of items) {
//       total += item.price * item.quantity;
//     }
//     return total;
//   },

//   //
//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//       }
//     }
//   },

//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         if (item.quantity - 1 === 0) {
//           this.remove(productName);
//           return;
//         }

//         item.quantity -= 1;
//       }
//     }
//   },
// };

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// console.table(cart.getItems());
// // cart.remove('apple');
// // cart.clear();

/*
 * Напиши скрипт управления личным кабинетом интернет банка.
 * Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
 * */

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,
//   nextId: 400,

//   getNextId() {
//     this.nextId += 1;
//     return this.nextId;
//   },

//   // История транзакций
//   transactionsList: [],
//   transactionsMap: {},

/*
 * Метод создает и возвращает объект транзакции.
 * Принимает сумму и тип транзакции.
 */
//   createTransaction(amount, type) {
//     return {
//       id: this.getNextId(),
//       amount,
//       type
//     }
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.balance += amount;
//     this.transactionsList.push(transaction);
//     this.transactionsMap[transaction.id] = transaction;
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     if (amount > this.balance) {
//       console.error('Naf-Naf Minerals!');
//       return;
//     }

//     this.balance -= amount;
//     this.transactionsList.push(transaction);
//     this.transactionsMap[transaction.id] = transaction;
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     return this.transactionsMap[id] || null;
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     if (!Object.values(Transaction).includes(type)) {
//       console.error(`Unknown transaction type "${type}"`);
//       return;
//     }

//     let total = 0;

//     for (const transaction of this.transactionsList) {
//       if (transaction.type !== type) {
//         continue;
//       }

//       total += transaction.amount;
//     }

//     return total;
//   },
// };

// console.log(account.getTransactionDetails(300));
// account.deposit(1200)
// account.withdraw(700)
// account.withdraw(800)
// account.deposit(300)
// console.log(account.getTransactionTotal('unknown'))
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionDetails(401));

// const foo = function () {
//   const x = 5;
//   return function () {
//     console.log(x);
//   };
// };
// const globFn = foo();
// globFn();
// console.dir(globFn)

// class Student {
//   constructor() { }
// }
// console.log(typeof Student)


