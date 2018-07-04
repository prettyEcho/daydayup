function foo(a, b){
    let arr = [].slice.call(arguments);
    let arr1 = Array.from(arguments);
    let arr2 = [...arguments];
    
    console.log( arr );
    console.log( arr1 );
    console.log( arr2 );
}

foo(1,2);