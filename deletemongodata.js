const db = require('./mongodbconnect');

const deletevar = async() =>{
    let data = await db();
    let result = await data.deleteMany({name : 'pop'});
    console.log(result)
}
 deletevar();