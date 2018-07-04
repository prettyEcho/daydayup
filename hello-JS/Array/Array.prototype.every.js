    let arr = [12, 14, 5, 39];

    function testArr(item, index, array){
        return item > 10;
    }

    function testItem(item, index, array){
        return item > 3;
    }

    console.log( arr.every(testArr) );
    console.log( arr.every(testItem) );
    console.log( arr.every(x => x > 1) );