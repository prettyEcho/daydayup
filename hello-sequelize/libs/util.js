const util = require('util');

const log = (log) => {
    console.log( util.inspect(log, {
        colors: true,
        depth: null
    }))
}

module.exports = {
    log
}