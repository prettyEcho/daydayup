const fs = require('fs')
const path = require('path')
const util = require('util')

// path 必须为绝对路径
const filePath = path.resolve(__dirname, './text.md');

fs.stat(filePath, (err, stat) => {
    if(err) console.log.error( err );

    log(stat);
})

function log(obj) {
    console.log(util.inspect(obj, { depth: null, colors: true }));
}