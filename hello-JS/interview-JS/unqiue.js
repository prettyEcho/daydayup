let arr = ['a', 1, 4,'1', 'b', 'a'];

function unqiue(arr) {
    return [...new Set(arr)];
}

let unqiueArr = unqiue(arr);
console.log( unqiueArr );