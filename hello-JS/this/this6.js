"use strict"

var a = 10;
function foo(cb) {
    var a = 20;
    cb();
}

function fn() {
    var a = 30;
    console.log( this.a );
}

foo(fn);