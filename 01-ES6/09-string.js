function replace(desc) {
    return desc.replace(/\$\{([^}]+)\}/g, function(matched, key) {
        //return eval(key);
        console.log('matched', matched);
        console.log('key', key);
    });
}

var name = 'ql',
    age = 22;
let desc = '${name} is ${age} old!';

replace(desc);