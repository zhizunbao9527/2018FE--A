const obj = {
    a: {
        name: 'ql'
    }
}

obj.age = 22;

console.log(obj);

delete obj.a;

console.log(obj);

/* 说明用const 定义常量如果是对象可以添加 删除 修改属性 */