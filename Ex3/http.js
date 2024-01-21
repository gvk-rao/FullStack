const http = require ('http')
const url = require('url')
 var server = http.createServer((req,res) => {
     //console.log(url)
     res.writeHead(200,{'content-type':'text/html'})
     if(req.url == '/'){
        res.write('<form style="text-align:center"action="greet" method="get">')
        res.write('<h1>Bapatla Engineering College</h1>')
        res.write('Name <input type="text" name="name" ><br><br>')
        res.write('Email <input type="email" name="email" ><br><br>')
        res.write('Phno <input type="telephone" name="phno" ><br><br>')
        res.write('Address <input type="text" name="add" ><br><br>')
        res.write('<input type="submit" value="Submit" >')
        res.write('</form>')
        res.end()
     }
     else if (req.url.startsWith('/greet')){
         let urlObject=url.parse(req.url,true)
         let qobject=urlObject.query
         res.write('<h1 style="text-align:center">You have Submitted  the Details as below : <br></h1>' )
         res.write(`<h2 style="text-align:center">Name:${qobject.name}<br> Email: ${qobject.email} <br> Phno:${qobject.phno} <br> Address:${qobject.add}<br> </h2>`) 
         res.end()
     }
     
 })
 server.listen(3000,(err) => {
     if(err)
         console.log("Error occured cannot start the server")

     else
        console.log('Server started at port 3000')
    
 })