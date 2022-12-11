const db = require('./mongodbconnect');

const insert = async () =>{
    console.log('ravi');
    let result = await db();
    result = await result.insertMany(
        [{name : 'prop' , age : '58'},
        {name : 'trop' , age : '55'}]
    );
    console.log(result);
}
 insert();