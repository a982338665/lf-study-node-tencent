
const fs = require('fs');

//创建可读流
var reader = fs.createReadStream('./file/input.txt')
//创建可写流
var writer = fs.createWriteStream('./file/outinput.txt')
// 管道读写操作
// 读出并写入
reader.pipe(writer)s