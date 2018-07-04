
var a = 10;

function foo() {
    var a = 20;

    console.log( this );
}

foo();