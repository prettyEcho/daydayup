"use strict"

var a = 10;

var obj = {
    a: 20,
    b: this.a + 10,
    fn: function() {
        console.log( this.b );
    }
}

obj.fn();