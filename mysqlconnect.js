const mysql = require('mysql');

const conn = mysql.createConnection({
    host:"localhost" ,
    user: "root" ,
    password : "" ,
    database : "test"
});

conn.connect((err)=>{
    if(err){
        console.log("there is error to connect")
    }else{
        console.log("no problem no problem");
    }
})

module.exports = conn;

/*conn.query("Select * from tablename" , (err , result) =>{
    console.log(result);
});*/