const {openSync,readSync,writeSync} = require('fs');

var buf = Buffer.alloc(100);

const fdi = openSync('data.txt','r');
const fdo = openSync('data-copy.txt','w');
do{
    var n = readSync(fdi,buf,null,100,null);
    if (n > 0){
        console.log(n,buf.toString());
        writeSync(fdo,buf,null,n,null);
    }
}while(n>0);