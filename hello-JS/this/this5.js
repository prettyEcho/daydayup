"use strict"

var a = 10;

function foo() {
    var a = 20;

    setTimeout(function() {
        var a = 30;
        console.log( this.a );
    })
}

foo();