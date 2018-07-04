const fs = require('fs')
const path = require('path')
const util = require('util')

// path 必须为绝对路径
const filePath = path.resolve(__dirname, '../fs/text.md');

const stat = util.promisify(fs.stat);

// primiss 版

/* stat(filePath).then(stat => {
    log( stat );
}).catch(err => {
    console.error( err );
}) */

// async 版
(async () => {
    try{
        let data = await stat(filePath);
        log( data );
    }catch(err) {
        console.error( err );
    }
})();


function log(obj) {
    console.log(util.inspect(obj, { depth: null, colors: true }));
}