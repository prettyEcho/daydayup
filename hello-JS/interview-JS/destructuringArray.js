function destructuring(arr1, arr2) {
    for(var i = 0; i < arr1.length; i++) {
        let flag = observe(arr1[i], arr2[i]);
        if( flag && arr2[i] ) {
            container[arr2[i]] = arr1[i] 
        }else{
            continue ;
        }
    }
}

function observe(arr1, arr2) {
    let toString = Object.prototype.toString;
    if( typeof arr2 === 'string' ){
        arr2 = JSON.parse(arr2.replace(/\w+/g, '"$&"'));
    }

    if( toString.call(arr1) === '[object Array]' && toString.call(arr2) === '[object Array]' ) {
        destructuring(arr1, arr2);
        return false;
    }else{
        return true;
    }
}

var container = {};
observe([1,[2,3],4], "[a, [b], c]");
console.log(container);

