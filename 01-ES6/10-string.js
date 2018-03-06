var name = 'ql',
    age = 12;

function desc(strings, ...values) {
    console.log(strings, values);
}
desc `${name} is ${age} old!`;