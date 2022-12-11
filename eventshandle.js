const express = require('express');
const events = require('events');           // built -in function for handling events in node
const eventsEmitter = new events.EventEmitter();       // to implement event in node make instance from EventEmitter class

const app = express();
 let c=0;
eventsEmitter.on("eventhandle" , ()=>{  //event assign
    c++;
    console.log(`event called ${c}`);
})

app.get("/",(req,res) =>{
    eventsEmitter.emit("eventhandle")   //event fire
    res.send("hello");
});

app.get("/search",(req,res) =>{
    eventsEmitter.emit("eventhandle")
    res.send("helo");
})

app.get("/create",(req,res) =>{
    eventsEmitter.emit("eventhandle")
    res.send("nkjcwe");
})

app.listen(8000);