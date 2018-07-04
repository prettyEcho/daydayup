//array => string

const arr = [1,2,3];
console.log( arr.toString() );
console.log( arr.join("-") );
console.log( JSON.stringify(arr) );

//string => array
const str = "echo";
console.log( str.split("") );

function Parent(name, age){
    "use strict";
    console.log(new.target === Parent);
    this.name = name;
    this.age = age;
}

Parent.prototype.getName = function(){
    "use strict";
    console.log(this.name);
};

const child = new Parent("echo",25);
child.getName();


var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        var that = this;
        return function(){
            return that.name;
        };
    }
};
console.log(object.getNameFunc()());
