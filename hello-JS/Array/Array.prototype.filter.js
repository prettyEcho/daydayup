let arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
];

/*
function invalidEntries(obj){
    return obj !== null && typeof obj.id === "number";
}

function getNum(item){
    return item.id === 0 || item.id && !isNaN(item.id);
}

let first = arr.filter(invalidEntries);
console.log( first.filter(getNum) );*/

function isNumber(id){
    return typeof(id) === "number" && !isNaN(id);
}

function filterById(obj){
    if(isNumber(obj.id)){
        return true;
    }
    return false;
}

//console.log( arr.filter(filterById) );

/*
let fruits = ["apple","banana","mango","orange"];

function filterByStr(obj, str){
    return obj.filter(function(item){
        return item.toLowerCase().indexOf(str) > -1;
    })
}

console.log( filterByStr(fruits, "o") );*/


let fruits = ["apple","banana","mango","orange"];

const filterName = (obj, str) => {
  return obj.filter(item => item.toLowerCase().indexOf(str) > -1 )
};


console.log( filterName(fruits, "o") );