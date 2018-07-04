const filewatcher = require('filewatcher');
const watcher = filewatcher();

var container = {}

function observe(obj, key, val) {
    Object.defineProperty(obj, key, {
        configurable: false,
        enumerable: false,
        get: function() {
            return val;
        },
        set: function(newVal) {
            val = newVal;
        }
    })
}



function hotRequire(filePath) {
    // get fileKey
    var filePath = require.resolve(filePath);
    var fileArr = filePath.split('/');
    var fileKey = fileArr[fileArr.length-1];

    // watch a file
    watcher.add(filePath);

    watcher.on('change', function(file, stat) {
      cleanCache(filePath);  
      console.log('File modified: %s', file);
      if (!stat) console.log('deleted');

      watcher.remove(filePath);

    });

    observe(container, fileKey, require(filePath));

}
 
function cleanCache(modulePath) {
    var module = require.cache[modulePath];
    // remove reference in module.parent
    if (module.parent) {
        module.parent.children.splice(module.parent.children.indexOf(module), 1);
    }
    require.cache[modulePath] = null;
}

module.exports = hotRequire
