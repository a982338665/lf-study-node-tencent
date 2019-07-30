
const fs = require('fs');

console.log("11111111111111111");
//异步读取
fs.readFile('./data-ajax.json',(err, data) => {
    console.log("ajax:"+data.toString());
});
console.log("22222222222222222");

//异步写入
fs.writeFile("./data-ajax-write.json","data",(err => {
    if(err){
        console.log(err);
    }else{
        console.log("写入成功!");
    }
}));