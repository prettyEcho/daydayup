function People(name) {
    this.name = name;
}

People.prototype.getName = function() {
    return this.name;
}

var person = new People('echo');
console.log( person.name );