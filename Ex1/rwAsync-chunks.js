const {open,read,write} = require('fs');

var buf = Buffer.alloc(100);

function writeData(fdi,fdo){
    read(fdi,buf,null,100,null,(err,n,buf) =>{
        if (n>0){
            console.log(n,buf.toString());
            write(fdo,buf,null,n,(e,w,buff) => {
                writeData(fdi,fdo);
            })
        }
    })
}
open('data.txt','r',(err,fdi) => {
    if(!err){
      open('data-copy.txt','w',(err,fdo) => {
        if(!err)
            writeData(fdi,fdo);
      })  
    }
})