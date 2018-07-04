const arr = [1,3,6,2,4].sort((a, b) => b - a);
const arr2 = [1,3,6,2,4].sort((a, b) => {
    if( a > b ) {
        return 1;
    }
});
console.log( arr2 );

/*
const arr1 = [1,2,3].toString();
console.log(arr1);*/
const arr1 = [1,2,3];

console.log( arr1.slice(0) );
console.log( arr1.concat() );
console.log( Array.from(arr1) );

// 需要被排序的数组
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// 对需要排序的数字和位置的临时存储
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// 按照多个值排序数组
mapped.sort(function(a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// 根据索引得到排序的结果
var result = mapped.map(function(el){
  return list[el.index];
});

let a = { value: 'aplha' };
let b = { value: 'bravo' };

console.log( result );
