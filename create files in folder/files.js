const fs = require('fs');

const path = require('path');

const dir_name = path.join(__dirname,'folder');

fs.writeFileSync(dir_name+'/hello.txt',(err,files) => {
    console.log(files);
});
fs.readdir(dir_name,'hello.txt');