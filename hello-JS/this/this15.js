function sum(a, b) {
    console.log(this.c + a + b);
}

var obj = {
    c: 10
}

sum.call(obj, 20, 30);
sum.apply(obj, [20, 30]);