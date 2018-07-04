var data = {name: 'kindeng'};
var observe = require('./observe')
observe(data);
data.name = 'echo'; // 哈哈哈，监听到值变化了 kindeng --> dmq


