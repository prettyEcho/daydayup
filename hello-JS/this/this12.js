
var a = 10;
var obj = {
    a: 20,
    fn: function() {
        (() => {
            var a = 30;
            console.log( this.a );
        })();
    }
}

obj.fn();