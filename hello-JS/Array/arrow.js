//嵌套的箭头函数
/*
function insert(value){
    return {
        init: function(array){
            return {
                after: function(afterValue){
                    array.splice(array.indexOf(afterValue) + 1, 0, value);
                    return array;
                }
            }
        }
    }
}*/


//es6
const insert = value =>
    ({ init: array =>
        ({
                after: afterValue => {
                    array.splice(array.indexOf(afterValue) + 1, 0, value);
                    return array;
                }
            })
    });

console.log( insert(2).init([1,3]).after(1) );

const pipeline = function(...funcs){
    return function(val){
        return funcs.reduce(function(a, b){
            return b(a);
        }, val);
    }
};

const plus1 = function(a){
    return a + 1;
};

const mult2 = function(a){
    return a * 2;
};

const addThenMult = pipeline(plus1, mult2);

const result = addThenMult(5);

console.log( result );

const pipe = (...funcs) =>
    (val) => funcs.reduce((a, b) => b(a), val );

