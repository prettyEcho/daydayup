let obj = Object.defineProperties({}, {
    'a': {
        value: 1,
        writable: true
    },
    'b': {
        value: 2,
        writable: true
    },
    'p1':  {
        get: function() {
            return this._a_;
        },
        set: function(x) {
            this._a_ = x + 1;
        }
    },
    'p2': {
        get: function() {
            return this.a + this.b;
        },
        set: function() {
            this.a = this.a + 1;
        }
    }
})

obj.p1 = 2;
obj.p2 = 2;

console.log( obj._a_ );
console.log( obj.p1 );
console.log( obj.a );
console.log( obj.p2 );


