const express = require('express');
const mongooseconnect = require('./mongooseconnect');
const products = require('./products');

const app = express();
app.use(express.json());

app.get('/search/:key' , async (req, res) =>{       //params
    const data = await products.find({              // or logical operator also u can use and operator
        "$or":[                                     //for search multiple field use array
            { name : {$regex:req.params.key}} ,     //regex used for pattern search
            
        ] 
    });
    console.log(req.params.key);
    res.send(data);
});

app.listen(8000)