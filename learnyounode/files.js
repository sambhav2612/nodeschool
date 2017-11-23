var fs = require('fs');

var buf_obj = fs.readFileSync(process.argv[2]);

var str = buf_obj.toString().split('\n');

console.log(str.length-1);
