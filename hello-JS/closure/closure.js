function foo() {
    let a = 2;

    function bar() {
        console.log( a );
    }

    return bar;
}

let baz = foo();

baz();