const { createReadStream } = require('fs');
var rs = createReadStream('data.txt');
rs.on('readData',() => {
    var chunk = rs.read();
    while(chunk != null){
        console.log(chunk.toString());
        chunk=rs.read()
    }
    rs.close();
})
rs.on('data',( chunk ) => console.log(chunk.toString()));
rs.on('error',( err ) => console.log(err.message));
rs.on('end',() => console.log('End of the Stream'));
rs.on('close',() => console.log('Stream closed'));