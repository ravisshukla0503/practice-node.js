const mongoose =    require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-com');  //connect mongoose to your mongodb database

const prodschema = new mongoose.Schema({                   // mongoose schema
    name : String ,
    age : Number
});

const insert = async ()=>{
     
    let productmodel = mongoose.model('product' , prodschema); //model to connect node to mongodb for communication
    let data = new productmodel({name :'aai' , age : 58});     // enter any new data to model like insert delete or update with new instance
    let result = await data.save();  // to add new data into database
    console.log(result);
}
// insert();

const update = async () => {
    let prodmodel = mongoose.model('product' , prodschema);
    let data = await prodmodel.updateOne(
        {name : "kaaai"} ,
        {$set : {age : 100}}
        );
    console.log(data);    
}
// update();

const deleted = async ()=> {
    let prodmodel = mongoose.model('product' , prodschema);
    let data = await prodmodel.deleteMany({name : 'aai'});
    console.log(data)
}

//deleted();

const read = async ()=> {
    let prodmodel = mongoose.model('product' , prodschema);
    let data = await prodmodel.find();
    console.log(data)
}

//read();