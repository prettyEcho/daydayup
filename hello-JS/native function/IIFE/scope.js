let bar = function foo(a){
    if( a === 1 ){
        return;
    }
    console.log(a);
    foo(1);
}

console.log(bar(2));

(function baz(a){
    if( a === 1 ) {
        return;
    }
    baz(1);
})()