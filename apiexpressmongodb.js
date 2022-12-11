const express = require('express');
const db = require('./mongodbconnect');
const mongodb = require('mongodb');

const app = express();

app.use(express.json());
app.get('/', async (req,res) => {
    
    let data = await db();
    data = await data.find().toArray();
    res.send(data);
    console.log(data);
})

app.post('/', async (req , res) =>{
   // console.log(req.body);
    let data = await db();
    let result = await data.insertOne(req.body)
    res.send(result)
    console.log(result)
})

app.put('/', async (req , res) => {
    const data = await db();
    let result = await data.updateMany({name : 'trop'} , {$set : req.body})
    res.send(result);
    console.log(result)
})

app.delete('/:id' , async (req , res)=>{
    const data =await db();
    let result = await data.deleteOne({_id : new mongodb.ObjectId(req.params.id)});
    console.log(result);
})

app.listen(8000);