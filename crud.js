const fs = require('fs');

const path = require('path');

const dir_name = path.join(__dirname,'folder');

const filepath = `${dir_name}/hello.txt`;

fs.writeFileSync(filepath,'hello new file');

/*fs.readFile(filepath,'utf8',(err,item) =>{
        //console.log('read');
        //console.log(item);
    
})

fs.appendFile(filepath,'helo again',(err,read)=>{
    console.log('file is upadated');
})
*/

fs.unlinkSync(filepath,(err)=>{
    console.log("delete");
})
