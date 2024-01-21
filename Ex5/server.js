const express = require('express');
const { MongoClient,ObjectId } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017/test";

var app = express();
var client = null;

app.set("viewengine","ejs");
app.use(express.static('public'));

async function connectDB(){
    client = new MongoClient(uri);
    await client.connect();
}
app.get('/',async(req,res) => {
    if(!client){
        await connectDB()
    }
    let db = client.db();
    let collection = db.collection('posts');
    let cursor = collection.find({});
    let docs = await cursor.toArray();
    res.render("display.ejs",{posts:docs});
    await client.close();
    client = null;
});

app.get('/create',(req,res) => {
    res.render('insert.ejs');
});

app.get('/insertpost',async (req,res) => {
    let post = {
        "id": req.query.id,
        "userId" : req.query.userId,
        "title" : req.query.title,
        "body" : req.query.body
    }
    if(!client){
        await connectDB()
    }
    let db = client.db();
    let collection = db.collection('posts');
    await collection.insertOne(post);
    res.redirect('/');
});

app.get('/update',async (req,res) => {
    var _id = ObjectId(req.query._id);
    //console.log(_id)
    if(!client){
        await connectDB()
    }
    let db = client.db();
    let collection = db.collection('posts');
    let post = await collection.findOne({"_id":_id});
    res.render('update.ejs',{"doc":post});
});

app.get('/updatepost',async(req,res) => {
    var _id = ObjectId(req.query._id);
    let post = {
        "id": req.query.id,
        "userId" : req.query.UserId,
        "title" : req.query.title,
        "body" : req.query.body
    }
    if(!client){
        await connectDB()
    }
    let db = client.db();
    let collection = db.collection('posts');
    await collection.updateOne({"_id":_id},{$set:post});
    res.redirect('/');
});

app.get('/delete/:uid',async(req,res) => {
    let _id = ObjectId(req.params.uid);
    //console.log(_id);
    if(!client){
        await connectDB()
    }
    let db = client.db();
    let collection = db.collection('posts');
    await collection.deleteOne({"_id":_id});
    res.redirect('/');
});
app.listen(3000,(err) => {
    if(!err){
        console.log("Server started on port 3000");
    }
    else{
        console.log(err.message);
    }
})