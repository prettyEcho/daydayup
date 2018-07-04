const fs = require('fs')
const path = require('path')
const BufferHelper = require('bufferhelper')

const bufferHelper = new BufferHelper();

const filePath = path.resolve(__dirname, '../fs/text.md')

const rs = fs.createReadStream(filePath, { highWaterMark: 5 })

rs.setEncoding = 'utf8'; 

rs.on('data', chunk => {
    console.log(Buffer.isBuffer(chunk));
    // console.log( typeof chunk );
    bufferHelper.concat(chunk);
})

rs.on('end', () => {
    let data = bufferHelper.toBuffer().toString();
    console.log( data );
    console.log('文件结束了');
})