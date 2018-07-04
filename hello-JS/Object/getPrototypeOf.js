function Foo(name) {
    this.name = name;
}

Foo.prototype.getName = function() {
    return name;
}

Object.getPrototypeOf(Foo).key = 'echo';

console.log( Object.getOwnPropertyNames(Foo.prototype) );