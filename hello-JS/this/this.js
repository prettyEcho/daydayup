

var a = 10;

var obj = {
    a: 20,
    fn: function() {
        console.log( this.a );
    }
}

obj.fn();
