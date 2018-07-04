const xlsx = require('node-xlsx').default
const fs = require('fs')
const path = require('path')
const util = require('util')

const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
let buffer = xlsx.build([{name: "mySheetName", data: data}]); // Returns a buffer

let filePath = path.resolve(process.cwd(), 'test.xlsx')
fs.writeFile(filePath, buffer, (err) => {
    if( err ) throw err;
    fs.stat(filePath, (err, stat) => {
        if( err ) throw err;
        console.log(util.inspect(stat, { depth: null, colors: true }))
    })

    // 解析
    const parseData = xlsx.parse(filePath)
    console.log(util.inspect(parseData, { depth: null, colors: true }))
})

