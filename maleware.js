const express = require('express');
const app = express();

const reqfilter  = (req , res , next) => {
      if(!req.query.age){
        res.send('provideage');
      }else if(req.query.age<18){
        res.send('age less than 18')
      }else{
        next();
      }
}
app.use(reqfilter);

app.get('/', (req,res) =>{
    res.send('HELLO')
})

app.listen(5000);