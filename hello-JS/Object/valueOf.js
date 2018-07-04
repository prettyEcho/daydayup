let arr = [1,2,3];
const valueOf = Object.prototype.valueOf;
let num = 123;

console.log( arr.valueOf() );
console.log( new Date().valueOf() );
console.log( valueOf.call(num) );

let obj = {};

obj.toString = function() {
    return 'hello';
}

console.log( obj + '' + 'world');

let num1 = new Number(123);
let str = new String('111');
let bol = new Boolean(false);
console.log(bol);

const toString = Object.prototype.toString;
console.log(toString.call(arr));


let str1 = JSON.stringify(arr);
let newStr = str1.replace(/\[/, '(').replace(/\]/, ')');
console.log(newStr);

let result = [ { id: 1, code: '12131', time: 1517902028 },
{ id: 2, code: '4141ff', time: 1517899503 } ];
let cts = [ { id: 1, name: '福利中心测试礼包' }, { id: 2, name: '人气新品礼包' } ];


let outArr = result.map(item => {
    //item.time = timeToDate(item.time);
    for( let con of cts ) {
        console.log(item);
        console.log(con);
        
        if( item.id === con.id ) {
            console.log(item.id);
            item.name = con.name;
            break;
        }
    }
    return item;
})
console.log(result);