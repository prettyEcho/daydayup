var People = function(name) {
    this.name = name;
}

var Programmer = function(name) {
    People.call(this, name)
}

Programmer.prototype.getName = function() {
    console.log( `${this.name} is a programmer!` );
}

var person = new Programmer('echo');

person.getName();