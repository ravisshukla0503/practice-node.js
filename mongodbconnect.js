const { MongoClient } = require('mongodb'); // import MongoClient

const url = 'mongodb://localhost:27017'; // give path of present MongoClient

const client = new MongoClient(url); //node is a client and server is the MongoClient from where we fetch data.

async function getdata(){
    
    let data = await client.connect(); //return promise
    let db = data.db('e-com');
    return  db.collection('product'); // return promise
}

module.exports = getdata;