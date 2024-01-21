const { createWriteStream } = require('fs');
var ws = createWriteStream('data-write.txt');
var ok;
 async function writeBigData(){
    for(let i = 0; i<5; i++){
        ok = ws.write("Big Data"+'\n')
        if(!ok){
            console.log('Failed');
            new promise((resolve) => {
                ws.once('drain',resolve);
            })
        }
    }
 }
writeBigData();