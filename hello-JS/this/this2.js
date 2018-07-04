"use strict"
var a = 10;

function fn() {
    var a = 20;
    console.log( this.a );
}

function foo() {
    var a = 30;
    fn();
}

foo();