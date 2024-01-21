const {getAllDocs,getDoc,insertDoc,updateDoc,deleteDoc} =require('./model');

const mongodb = require('mongodb');
const express = require('express');
const {} = require('./model');

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
    var _id = mongodb.ObjectId(req.query._id);
    //console.log(_id)
    let post = await getDoc(_id);
    res.render('update.ejs',{"doc":post});
});

postrouter.get('/updatepost',async(req,res) => {
    var _id = mongodb.ObjectId(req.query._id);
    let post = {
        "id": req.query.id,
        "userId" : req.query.UserId,
        "title" : req.query.title,
        "body" : req.query.body
    }
    await updateDoc(_id,post);
    res.redirect('/');
});

postrouter.get('/delete/:uid',async(req,res) => {
    let _id = mongodb.ObjectId(req.params.uid);
    console.log(_id)
    await deleteDoc(_id);
    res.redirect('/');
});

module.exports = postrouter;
