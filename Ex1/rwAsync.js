const {writeFile,readFile} = require('fs');

var data = readFile('data.txt',(err,data) => {
    if(!err){
        console.log(data.toString());
        writeFile('data-copy.txt',data,() => console.log("File Copied"));
    }
    else
        console.log(err.message);
});
