var obj = {
    a: 10
}
setTimeout(function() {
    console.log(this.a);
}.bind(obj), 1000)