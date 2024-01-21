const {MongoClient} = require('mongodb');
const {question} = require('readline-sync');

const uri = 'mongodb://127.0.0.1:27017/test';

function MenuDriven(){
    client = new MongoClient(uri);
    client.connect()
    .then(async client => {
        while(1){
            console.log('1.display\n2.insert\n3.update\n4.delete\n5.exit');
            var ch = Number(question('Enter your choice:'));
            switch(ch){
                case 1:
                    db = client.db();
                    col = db.collection('posts');
                    let cursor = col.find({});
                    let docs = await cursor.toArray();
                    docs.forEach(doc => console.log(doc));
                    break;
                case 2:
                    id = Number(question('Enter id:'));  
                    uid = Number(question('Enter userId:'));
                    title = question('Enter title:');
                    body = question('Enter body:');
                    await col.insertOne({id:id,userId:uid,title:title,body:body});
                    break;
                case 3:
                    id = Number(question('Enter id to update:')); 
                    uid = Number(question('Enter userId:'));
                    title = question('Enter title:');
                    body = question('Enter body:');
                    await col.updateOne({id:id},{$set:{userId:uid,title:title,body:body}});
                    break;
                case 4:
                    id = Number(question('Enter id to delete:'));
                    await col.deleteOne({id:id});
                    break;
                case 5:
                    await client.close();
                    process.exit(0);
                    break;
                default:
                    console.log('invalid option');
            }
        }
    })
    .catch( e => console.log(e.message));
}

MenuDriven();