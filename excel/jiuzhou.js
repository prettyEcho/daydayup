const xlsx = require('node-xlsx').default
const fs = require('fs')
const path = require('path')
const util = require('util')

// log
function log(obj) {
    console.log( util.inspect(obj, { colors: true, depth: null }));
}

// 拿到数据
const oldPath = path.resolve(process.cwd(), 'old.xlsx');
const newPath = path.resolve(process.cwd(), 'new.xlsx');

let oldArr = xlsx.parse(oldPath);
let newArr = xlsx.parse(newPath);

// view array
// log( oldArr );
// log( newArr );

// get data
let oldData = oldArr[0]['data'];
let newData = newArr[0]['data'];

// view data
log( 'oldData: ');
log( oldData );

log( 'newData: ');
log( newData );

// 定义一个容器
let container = [];

// 取出公共部分并相加
for( var i = 0; i < oldData.length; i ++ ) {
    let temp = [];
    for(var j = 0; j < newData.length; j++ ) {
        if( oldData[i][0] === newData[j][0] ) {
            temp[0] = oldData[i][0];  // 用户名
            temp[1] = oldData[i][1] + newData[j][1]; // 积分相加
            temp[2] = oldData[i][2];   // facebook分享次数
            temp[3] = oldData[i][3];   // 最新分享时间
            container.push(temp);
            oldData.splice(i, 1);
            newData.splice(j, 1);
            break; // 跳出内部循环
        }
    }
}

// 整合（拼接公共部分和两表中不同的部分）
container = container.concat(oldData, newData);

log('最终的数据：');
log(container);

const buf = xlsx.build([ { name: 'sheet1', data: container }]);
const filePath = path.resolve(process.cwd(), 'jiuzhou.xlsx');

// 生成sheet
fs.writeFile(filePath, buf, (err) => {
    if( err ) throw err;
    log( '生成成功' );
})



