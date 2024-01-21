const posts = require('./posts');

async function getAllDocs(){
    return posts;
} 

async function getDoc(idx){
    return posts[idx];
}

async function insertDoc(post){
    posts.push(post);
}

async function deleteDoc(idx){
    posts.splice(idx,1);
}
 
async function updateDoc(idx,post){
    posts[idx]=post;
}

module.exports = {
    getAllDocs,getDoc,deleteDoc,updateDoc,insertDoc
}