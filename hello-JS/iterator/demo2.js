const util = require('util')

let arr = [1,2,3];
let it = arr[Symbol.iterator]();

log( it.next() );
log( it.next() );
log( it.next() );
log( it.next() );
log( it.constructor );

function log(obj) {
    console.log( obj );
}