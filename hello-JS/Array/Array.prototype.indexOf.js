let array = ["a","v","c","a","d","a"],
    element = "a",
    result = [];
    indexs = array.indexOf(element);

    while(indexs != -1){
       result.push(indexs);
       indexs = array.indexOf(element, indexs+1);
    }

    console.log(result);

let arr = [1,2,3];
console.log(arr.indexOf(2,1));
console.log(arr.join(""));


