function noRepeat(arr){
    //判断参数
    if(!arr) return [];
    if(!(Object.prototype.toString.call(arr) === "[object Array]")) return [];

    //去重
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                arr.splice(j,1);
                j--;
            }
        }
    }

    return arr;
}


let arr = [1,2,3,1,2,2,3,4,5,2,0,15,3,7,2];
let newArr = noRepeat(arr);
console.log(newArr);