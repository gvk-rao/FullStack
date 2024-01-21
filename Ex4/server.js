const postrouter = require('./postcontroller');
const express = require('express');
//const path = require('path');

var app = express();

//app.set ('views', path.join (__dirname, 'views'))
app.set("viewengine","ejs");

app.use('/',postrouter);
app.listen(3000,(err) => {
    if(!err){
        console.log("Server started on port 3000");
    }
    else{
        console.log(err.message);
    }
})