const express = require('express')
const {getAllDocs,getDoc,insertDoc,updateDoc,deleteDoc} =require('./model-local');

const postrouter = express.Router();

postrouter.get('/',async(req,res) => {
    let docs = await getAllDocs();
    res.render("display.ejs",{posts:docs});
});

postrouter.get('/create',(req,res) => {
    res.render('insert.ejs');
});

postrouter.get('/insertpost',async (req,res) => {
    let post = {
        "id": req.query.id,
        "userId" : req.query.userId,
        "title" : req.query.title,
        "body" : req.query.body
    }
    await insertDoc(post);
    res.redirect('/');
});

postrouter.get('/update',async (req,res) => {
    var idx = req.query.idx;
    //console.log(idx);
    let post = await getDoc(idx);
    //console.log(post);
    res.render('update.ejs',{"idx":idx,"doc":post});
});

postrouter.get('/updatepost',async(req,res) => {
    var uid = req.query.idx;
    let post = {
        "id": req.query.id,
        "userId" : req.query.UserId,
        "title" : req.query.title,
        "body" : req.query.body
    }
    await updateDoc(uid,post);
    res.redirect('/');
});

postrouter.get('/delete/:idx',async(req,res) => {
    let uid = req.params.idx;
    await deleteDoc(uid);
    res.redirect('/');
});

module.exports = postrouter;
