const fs = require('fs')
const path = require('path')

// string_decoder会把残余的buffer储存起来，等待下一次buffer到来进行合并
const { StringDecoder } = require('string_decoder')

const decoder = new StringDecoder('utf8')

// path 必须为绝对路径
const filePath = path.resolve(__dirname, './text.md');

// option
// highWaterMark: 3 // 默认为64 * 1024字节
// encoding: 'utf-8' 返回的chunk为string
const rs = fs.createReadStream(filePath, { highWaterMark: 3 } );

// 返回值为buffer
rs.setEncoding = 'utf8'; 

rs.on('data', chunk => {

    let data = decoder.write(chunk);
    console.log(`每一段chunk为:${data}`);
    // 暂停
    // rs.pause(); 
})

setTimeout(() => {
    // 恢复
    // rs.resume();
}, 3000)

rs.on('open', () => {
    console.log('文件打开了');
})

rs.on('close', () => {
    console.log('文件关闭了');
})

rs.on('error', err => {
    console.error(err); 
    console.log('文件读取出错了');
})

rs.on('end', () => {
    console.log('文件读取结束了');    
})