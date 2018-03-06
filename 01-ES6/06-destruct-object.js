var obj = { name: 'ql', age: 22 };
let { name, age } = obj;

let { name: myname, age: myage } = obj;

console.log(name, age, myname, myage);