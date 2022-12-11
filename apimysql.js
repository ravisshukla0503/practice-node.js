const express = require('express');
const conn = require('./mysqlconnect');

const app = express();

app.use(express.json());

app.get("/" , (req,res) =>{
    conn.query("Select * from tablename" ,(err , result) =>{
        (err) ? console.log("error") : console.log(result); res.send(result)
    })
})

app.post("/" , (req , res) =>{
    const data = req.body;
    conn.query("INsert INTO users SET ?" , data , (error ,result ,fields)=>{
        if(error) error;
        res.send(result);
    })
})

app.put("/:id" , (req, res)=>{
    const data = [req.body.name, req.body.age,req.params.id];
    conn.query("UPDATE tablename SET name=? , age =? where id=?" , data , (err , result , fields) =>{
        if(err) err;
        res.send(result);
    })
})

app.delete("/:id" , (req, res) =>{
    conn.query("Delete from tablename where id=" +req.params.id , (er , result , fields) =>{
        if(er) er;
        res.send(result);
    })
})

app.listen(8000);