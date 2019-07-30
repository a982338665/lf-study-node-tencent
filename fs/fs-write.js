const fs = require('fs');

console.log("11111111111111111");
//同步读取
let data = fs.readFileSync('./data-sync.json');
console.log("sync" + data.toString());
console.log("33333333333333333");