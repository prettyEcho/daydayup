let arr = ['a', 1, 4,'1', 'b', 'a'];

function unqiue(arr) {
    let temp = [];
    for(i of arr) {
        if( !temp.includes(i) ) {
            temp.push(i);
        }
    }
    return temp;
}

let unqiueArr = unqiue(arr);
console.log( unqiueArr );