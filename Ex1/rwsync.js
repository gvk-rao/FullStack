const {writeFileSync,readFileSync} = require('fs');

var data = readFileSync('data.txt');
writeFileSync('data-copy.txt',data);
console.log(data.toString());