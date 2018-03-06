var s = 'qinlei';

console.log(s.startsWith('q')) // true
console.log(s.endsWith('i')) // true
console.log(s.includes('l')) // true

var s = 'qinlei';
console.log(s.startsWith('n', 2)); // true
console.log(s.endsWith('i', 2));
// endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束

console.log(s.includes('l', 2)); // false