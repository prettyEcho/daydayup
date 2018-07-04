const hotRequire = require('./hot-require.js')

var code = hotRequire('./code.js');

setInterval(function () {
    console.log(code);
}, 5000);