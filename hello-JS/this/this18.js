var obj = {
    a: 20,
    getA() {
        setTimeout(function() {
            console.log(this.a)
        }.bind(this), 1000)
    }
}

obj.getA();

