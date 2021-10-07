// задача 1 ******
// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
// };
// Account.prototype.getInfo = function () {
//     let string = `login : ${this.login}, email: ${this.email}`;
//     return string;
// };
// console.log(typeof Account.prototype.getInfo);
// // 'function'

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo());
// // 'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account('Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com'

// задача 2 ******
// class User {
//   constructor(name, age, followers) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }
//   getInfo() {
//     let string = `User ${this.name}
// is ${this.age} years old and has ${this.followers} followers`;
//     return string;
//   }
// }
// console.log(typeof User);
// // ('function');

// const mango = new User('Mango', 2, 20);
// console.log(mango.getInfo());
// // ('User Mango is 2 years old and has 20 followers');

// console.log(typeof mango.getInfo);
// // ('function');

// const poly = new User('Poly', 3, 17);
// console.log(poly.getInfo());
// // ('User Poly is 3 years old and has 17 followers');

// задача 3 ******

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     return this.items.push(item);
//   }
//   removeItem(item) {
//     for (let i = 0; i < this.items.length; i+=1) {
//         if (this.items[i] === item) {
//         this.items.splice(i, 1);
//       }
//     }
//     return this.items;
//   }
// removeItem(item) {
//     const itemIndex = this.items.indexOf(item);
//     this.items.splice(itemIndex, 1);
//  };
// }

// console.log(typeof Storage);
// // 'function'

// const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

// const storage = new Storage(goods);

// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ] */

// storage.addItem('Дроид');
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */

// storage.removeItem('Пролонгер');
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */

// задача 4 ******

// class StringBuilder {
//     #value;
//     constructor(baseValue) {
//     this.#value = baseValue;
//   }
//   getValue () {
//     return this.#value;
//   };
//   padEnd(str) {
//     this.#value += str;
//   };
//   padStart(str) {
//     this.#value = str + this.#value;
//   };
//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   };
//   }

// class StringBuilder {
//   constructor(value) {
//     this._value = value;
//   }
//   get value() {
//     return this._value;
//   }
//   append(str) {
//     this._value = `${this.value}${str}`;
//     return this._value;
//   }

//   prepend(str) {
//     this._value = `${str}${this.value}`;
//     return this._value;
//   }

//   pad(str) {
//     this._value = this.append(str);
//     this._value = this.prepend(str);
//     return this._value;
//   }
// }

// // console.log(typeof StringBuilder);
// // 'function'

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value);

// builder.prepend('^');
// console.log(builder.value);

// builder.pad('=');
// console.log(builder.value);

// задача 5 ******

// class Car {
//   static getSpecs(car) {
//     return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed},
// isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
//   }
//   constructor(car) {
//     this.speed = 0;
//     this._price = car.price;
//     this.maxSpeed = car.maxSpeed;
//     this.isOn = false;
//     this.distance = 0;
//   }

//   get price() {
//     return this._price;
//   }
//   set price(value) {
//     this._price = value;
//   }
//   turnOn() {
//     this.isOn = true;
//   }
//   turnOff() {
//     this.isOn = false;
//     return (this.speed = 0);
//   }
//   accelerate(value) {
//     if (this.speed + value > this.maxSpeed) {
//       this.speed = this.maxSpeed;
//     } else {
//       this.speed = this.speed + value;
//       return this.speed;
//     }
//   }
//   decelerate(value) {
//     if (this.speed - value > 0) {
//       this.speed = this.speed - value;
//     } else {
//       this.turnOff();
//     }
//     return this.speed;
//   }
//   drive(hours) {
//     if (this.isOn) {
//       this.distance += hours * this.speed;
//       return this.distance;
//     }
//   }
// }
// from Ivetta
// class Car {
//     // Write code under this line
//     static getSpecs(car) {
//         return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed},
// isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
//     }
//     constructor({ maxSpeed, price, speed = 0, isOn = false, distance = 0 }) {
//         this.maxSpeed = maxSpeed;
//         this.speed = speed;
//         this.isOn = isOn;
//         this.distance = distance;
//         this._price = price;
//     }
//     get price() {
//         return this._price;
//     }
//     set price(value) {
//         return this._price = value;
//     }
//     turnOn() {
//         return this.isOn = true;
//     }
//     turnOff() {
//         this.speed = 0;
//         return this.isOn = false;
//     }
//     accelerate(value) {
//         if (value < this.maxSpeed) {
//             this.speed = this.speed + value;
//         } else {
//             this.speed = this.maxSpeed;
//         }
//         return this.speed;
//     }
//     decelerate(value) {
//         if (this.speed - value > 0) {
//             this.speed = this.speed - value;
//         } else {
//             this.speed = 0;
//         }
//         return this.speed;
//     }
//     drive(hours) {
//         if (!this.isOn) {
//             this.distance = this.distance;
//         }
//         if (this.isOn) {
//             this.distance = this.distance + (hours * this.speed);
//         }
//         return this.distance;
//     }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// console.log(Car.getSpecs(mustang));
// // // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// // // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
