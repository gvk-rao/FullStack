const express = require('express')
const postrouter = require('./postcontroller')

var app = express();

app.set("viewengine","ejs");

app.use(express.static('public'));
app.use('/',postrouter);

app.listen(3000,(err) => {
    if(!err){
        console.log("Server started on port 3000");
    }
    else{
        console.log(err.message);
    }
})