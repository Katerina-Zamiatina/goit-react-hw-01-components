// let camelSentence = function camelSentence(str) {
//   return (' ' + str)
//     .toLowerCase()
//     .replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
//       return chr.toUpperCase();
//     });
// };
// // console.log(camelSentence('The-Stealth-Warrior'));

// function toCamelCase(str) {
//   return str
//     .split(/[ _-]/g)
//     .map(function (word, index) {
//       if (index > 0) {
//         return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
//       }
//       return word;
//     })
//     .join('');
// }

// console.log(toCamelCase('The-Stealth-Warrior'));

// function persistence(num) {
//   let persistence = 0;
//   num = num.toString();
//   while (num.length > 1) {
//     num = num
//       .split('')
//       .map(Number)
//       .reduce((a, b) => a * b)
//       .toString();
//     persistence++;
//   }
//   return persistence;
// }

// console.log(persistence(39));

// function findShort(s) {
//   const word = s.split(' ');
//   let shortestWord = word[0];
//   for (let i = 1; i < word.length; i += 1) {
//     if (word[i].length < shortestWord.length) {
//       shortestWord = word[i];
//     }
//   }
//   return shortestWord.length;
// }

// function findShort(s) {
//   return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
// }

// function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }
// console.log(findShort('Dogecoin ProofOfWork Bitcoin'));



function validBraces(braces) {
  const regex = /\(\)|\[\]|\{\}/;
  return regex.test(braces)
    ? validBraces(braces.replace(regex, ''))
    : '' === braces;
}

console.log(validBraces('({{}})')); // true
console.log(validBraces('{[()]}')); // true
console.log(validBraces('{{}[}')); // false
console.log(validBraces('{{]}}')); // false
