const db = require('./mongodbconnect');

let main = async () =>{
    const data = await db();
    let res= await data.find().toArray();
    console.log(res);
}
main();