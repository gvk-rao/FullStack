const { PassThrough } = require('stream');
const { createReadStream,createWriteStream } = require('fs');

const rs = createReadStream('data.txt');
const ws = createWriteStream('data-copy(duplex).txt');
const tunnel = new PassThrough();
rs.pipe(tunnel).pipe(ws);
