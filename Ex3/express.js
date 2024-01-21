const express = require('express');

var app = express();
app.set('view engine','ejs');

app.get('/',(req,res) =>{
    res.render('form');
});
app.get('/greet',(req,res) => {
    res.render('result',{name:req.query.name,email: req.query.email,phno:req.query.phno,add:req.query.add});
});
    
app.listen(3000,(err) => {
    if(err)
        console.log("Error occured cannot start the server");
    else
        console.log('Server started at port 3000');
    
})