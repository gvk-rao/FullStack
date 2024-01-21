var buf = Buffer.alloc(50);
//creating Buffer
console.log('Buffer Created');
//writing to a buffer
buf.write('This is a Buffer');
console.log(buf.toString());
//buufer overloading
buf.write(' Buffer overloaded write',18);;
console.log(buf.toString());
//indexing
buf[18] = 64;
console.log('Indexing :'+buf.toString());
//filling the buffer
buf.fill(67,43);
console.log(buf.toString());
//concatenation 
var buf1 = Buffer.from('Creating New Buffer from the Data');
console.log(buf1.toString());
console.log('concatenation');
console.log(Buffer.concat([buf,buf1]).toString());
//slicing
console.log('slicing');
console.log(buf.slice(0,10).toString());
//copying buffer
var tb = new Buffer.alloc(50);
buf.copy(tb,0,5,9);
console.log('Copying : '+tb.toString());