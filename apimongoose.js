const express = require('express');
const mongooseconnect = require('./mongooseconnect');
const products = require('./products');

const app = express();

app.use(express.json());

app.post("/create" , async (req , res) =>{
    const data = new products(req.body);
    const result = await data.save();
    res.send(req.body);
    console.log(req.body);
});

app.get("/create" , async (req , res ) =>{
    const data = await products.find();
    res.send(data);
    console.log(data);
})

app.put("/create/:_id" , async (req , res) =>{
    const data = await products.updateOne(
        { name : "kaushiki" },
        { $set : { age : 200}}
    );
    console.log(data);
    res.send(data);
})

app.delete("/create/:_id" , async (req , res) => {
    const data = await products.deleteOne(req.params);
    res.send(data);
    console.log(data);
})

app.listen(5000);