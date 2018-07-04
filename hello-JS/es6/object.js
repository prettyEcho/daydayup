//属性简写
let foo = 'baz';
let baz = {foo};
console.log( baz );

//方法简写
let obj = {
    getName() {
        console.log(1);
    }
}

//表达式定义属性名

let last_word = 'last_world';
let obj1 = {
    "first_word": 'hello',
    [last_word]: 'world'
}
console.log( obj1[last_word] );

//表达式定义方法名

let obj2 = {
    ['h' + 'ello']() {
        return 'hi';
    }
}

console.log( obj2.hello() );

