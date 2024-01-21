const {MongoClient} = require('mongodb');

var client = null;
const uri = "mongodb://127.0.0.1:27017/test";

async function connectDB(){
    client = new MongoClient(uri);
    await client.connect();
}

async function getAllDocs(){
    if(!client){
        await connectDB()
    }
    let db = client.db();
    let collection = db.collection('posts');
    let cursor = collection.find({});
    let docs = await cursor.toArray();
    return docs;
} 

async function getDoc(uid){
    if(!client){
        await connectDB()
    }
    let db = client.db();
    let collection = db.collection('posts');
    let post = await collection.findOne({"_id":uid});
    return post
}

async function insertDoc(post){
    if(!client){
        await connectDB()
    }
    let db = client.db();
    let collection = db.collection('posts');
    await collection.insertOne(post);
}

async function deleteDoc(uid){
    if(!client){
        await connectDB()
    }
    let db = client.db();
    let collection = db.collection('posts');
    await collection.deleteOne({"_id":uid});
}
 
async function updateDoc(uid,post){
    if(!client){
        await connectDB()
    }
    let db = client.db();
    let collection = db.collection('posts');
    await collection.updateOne({"_id":uid},{$set:post});

}

module.exports = {
    getAllDocs,getDoc,deleteDoc,updateDoc,insertDoc
}