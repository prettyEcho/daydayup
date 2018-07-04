[1,2,3].reduce((sum, value) => {
    console.log(`sum: ${sum} ======== value: ${value}`);
    return sum + value;
},4);

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var obj = {};
names.forEach(ele => {
    if(ele in obj){
        obj[ele]++;
    }else{
        obj[ele] = 1;
    }
});
console.log(obj);

