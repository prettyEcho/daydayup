function foo(arg1, arg2, arg3) {
    console.log( arg2 );
}

var arr = [1,2,3];
foo.apply(null, arr);