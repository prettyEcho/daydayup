var obj = {
    a: 20,
    fn() {
        console.log( this.a );
    }
}

obj.fn();