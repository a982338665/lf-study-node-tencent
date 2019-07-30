
const fs = require('fs');

//创建可读流
let stream = fs.createReadStream('./data.txt');

stream.on('data',(a)=>{
    console.log(a.length);
    console.log(a.toString());
});