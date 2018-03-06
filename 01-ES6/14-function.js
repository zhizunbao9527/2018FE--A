var person = {
    name: 'ql',
    getName: function() {
        //setTimeout(function() { console.log(this); }, 1000); //在浏览器执行的话this指向window
        setTimeout(() => console.log(this), 1000); //在浏览器执行的话this指向person
    }
}
person.getName();