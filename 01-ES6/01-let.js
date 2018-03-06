function fn1() {
    for (var index = 0; index < 5; index++) {
        setTimeout(function() {
            console.log(index);
        }, 100);
    }
}

/* 
  fn1中for循环输出结果都是5
  原因是什么？
  根据作用域规则访问了外层变量index
  解决办法办法呢？fn2
*/

function fn2() {
    for (var index = 0; index < 5; index++) {
        setTimeout((function(i) {
            return function re() {
                console.log(i);
            }
        })(index), 100);
    }
}

//fn2();

/* fn2 解决思路是
   自执行匿名函数返回一个函数re
   因为 i是一个形参
   为了函数re能够执行, 绑定i的值 所以输出结果是0-4
*/

/*  
  ES6 有let const 有块级作用域就很好解决这个问题了
*/

function fn3() {
    console.log('fn3');
    for (let index = 0; index < 5; index++) {
        setTimeout(function() {
            console.log(index);
        }, 100);
    }
}

//fn3()

function fn4() {
    console.log('fn4');
    for (let index = 0; index < 5; index++) {
        const PI = 3.1415926;
        setTimeout(function() {
            console.log(PI);
        }, 100);
    }
}

fn4();