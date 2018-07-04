/*  configurable
    enumerable
    value
    writable
    get
    set
 */

var o = {};
Object.defineProperty(o, "a", { value : 1, enumerable:true });
Object.defineProperty(o, "b", { value : 2, enumerable:false });
Object.defineProperty(o, "c", { value : 3 }); // enumerable defaults to false
o.d = 4; //

/*for(let i in o){
    console.log(i);
}*/

console.log( Object.keys(o) ); // ["a", "d"]