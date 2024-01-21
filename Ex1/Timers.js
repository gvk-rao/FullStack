const greet = (msg) =>{
    console.log(msg);
}
var k=0;
setTimeout(greet, 1500, 'Hello, BEC');
setImmediate(greet, 'Hai, BEC');
const t = setInterval((msg) =>{
    k++;
    console.log(msg)
    if(k==4){
        clearInterval(t);
    }

},3000,'Welcome, BEC');

