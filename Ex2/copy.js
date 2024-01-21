const { createReadStream,createWriteStream} = require('fs');
var rs = createReadStream('data.txt');
var ws = createWriteStream('data-copy.txt');
rs.pipe(ws);