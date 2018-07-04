var a = 10;

function foo() {
	console.log( this.a );
}

var obj = {
	a: 20
}

foo.call(obj); // 20 this -> obj
foo.apply(obj); // 20 this -> obj